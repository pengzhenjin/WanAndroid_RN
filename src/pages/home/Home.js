/**
 * 首页
 */
import React from 'react';
import {
    StyleSheet,
    View,
} from 'react-native';
import BaseContainer from '../../base/BaseContainer';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import CommonFlatList from '../../components/CommonFlatList';
import Banner from '../../components/Banner';
import ListFooter from '../../components/ListFooter';
import ArticleItemRow from '../../components/ArticleItemRow';
import * as actionCreators from '../../actions/homeAction';
import { Avatar, ListItem } from 'react-native-elements'
import Color from "../../utils/Color";

const mapStateToProps = (state, ownProps) => {
    return {
        homeBanner: state.homeReducer.homeBanner,
        page: state.homeReducer.page,
        dataSource: state.homeReducer.dataSource,
        isRenderFooter: state.homeReducer.isRenderFooter,
        isFullData: state.homeReducer.isFullData,
    };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return bindActionCreators(actionCreators, dispatch)
};

@connect(mapStateToProps, mapDispatchToProps)
export default class Home extends BaseContainer {
    constructor(props) {
        super(props);
        this.state = {
            isRefreshing: false,
        };
    }

    componentDidMount() {
        this.fetchData();
    }

    fetchData = () => {
        this.props.fetchHomeBanner();
        this.props.fetchHomeArticleList();
    }

    onEndReachedFunc = () => {
        const {isFullData, page} = this.props;
        if (isFullData) {
            return;
        }
        this.props.fetchHomeArticleListMore(page);
    }

    onRefreshFunc = () => {
        this.setState({isRefreshing: true});
        this.fetchData();
        this.setState({isRefreshing: false});
    }

    /**
     * 收藏
     * @param item
     * @param index
     */
    onCollectFunc = (item, index) => {
        console.log('点击了收藏，', item.id)
        // if (!isLogin) {
        //   showToast(i18n('please-login-first'));
        //   return navigation.navigate('Login');
        // }
        // if (item.collect) {
        //   fetchHomeCancelCollect(item.id, index);
        // } else {
        //   fetchHomeAddCollect(item.id, index);
        // }
    }

    /**
     * 条状到文章详情页面
     * @param item
     */
    gotoArticleDetailPage = (item) => {
        const {title, link} = item;
        this.navigation.navigate('CommonWebView', {title: title, url: link,});
    }

    /**
     * 渲染 ListItem 右边到图片
     * @param item
     * @returns
     */
    renderItemRightAvatar = (item) => {
        if (item.envelopePic) {
            return {
                containerStyle: {width: 120, height: 180},
                source: {uri: item.envelopePic},
            }
        } else {
            return {
                size: 120,
                title: item.superChapterName,
                titleStyle: {fontSize: 18},
                overlayContainerStyle: {backgroundColor: Color.THEME},
            }
        }
    }

    renderItem = ({item, index}) => {
        return (
            <ListItem
                rightAvatar={this.renderItemRightAvatar(item)}
                title={item.title}
                titleProps={{numberOfLines: 2}}
                subtitle={
                    <ArticleItemRow
                        item={item}
                        onCollectFunc={() => this.onCollectFunc(item, index)}
                    />
                }
                onPress={() => this.gotoArticleDetailPage(item)}
                bottomDivider
            />
        );
    };

    renderHeader = () => {
        const {homeBanner} = this.props;
        return (
            <View>
                <Banner bannerArr={homeBanner} navigation={this.navigation} />
            </View>
        );
    };

    renderFooter = () => {
        const {isRenderFooter, isFullData} = this.props;
        return (
            <ListFooter
                isRenderFooter={isRenderFooter}
                isFullData={isFullData}
            />
        );
    };

    render() {
        console.log('datas：', this.props.dataSource);
        return (
            <View style={styles.container}>
                <CommonFlatList
                    data={this.props.dataSource}
                    keyExtractor={item => item.id.toString()}
                    renderItem={this.renderItem}
                    ListHeaderComponent={this.renderHeader}
                    ListFooterComponent={this.renderFooter}
                    onPUll={this.onRefreshFunc}
                    onEndReached={this.onEndReachedFunc}
                    isPulling={this.state.isRefreshing}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
