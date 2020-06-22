/**
 * 首页
 */
import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import BaseContainer from '../../base/BaseContainer';
import { connect } from 'react-redux';
import CommonFlatList from '../../components/CommonFlatList';
import Banner from '../../components/Banner';
import ListFooter from '../../components/ListFooter';
import ArticleItemRow from '../../components/ArticleItemRow';
import { fetchHomeBanner, fetchHomeArticleList, fetchHomeArticleListMore } from '../../actions/homeAction';
import { bindActionCreators } from 'redux';

class Home extends BaseContainer {
  constructor (props) {
    super(props);
    this.state = {
      isRefreshing: false,
    };
  }

  componentDidMount () {
    this.fetchData();
  }

  fetchData () {
    fetchHomeBanner();
    // fetchHomeArticleList();
  }

  renderItem = ({ item, index }) => {
    return (
      <ArticleItemRow
        navigation={this.navigation}
        item={item}
        onCollectPress={() => {
          // if (!isLogin) {
          //   showToast(i18n('please-login-first'));
          //   return navigation.navigate('Login');
          // }
          // if (item.collect) {
          //   fetchHomeCancelCollect(item.id, index);
          // } else {
          //   fetchHomeAddCollect(item.id, index);
          // }
        }}
      />
    );
  };

  renderHeader = () => {
    const { homeBanner } = this.props;
    console.log('homeBanner：', homeBanner);
    return (
      <View>
        <Banner bannerArr={homeBanner} navigation={this.navigation}/>
        <View style={{ height: 20 }}/>
      </View>
    );
  };

  renderFooter = () => {
    const { isRenderFooter, isFullData, themeColor } = this.props;
    return (
      <ListFooter
        isRenderFooter={isRenderFooter}
        isFullData={isFullData}
        indicatorColor={themeColor}
      />
    );
  };

  onEndReached () {
    const { isFullData, page } = this.props;
    if (isFullData) {
      return;
    }
    fetchHomeArticleListMore(page);
  }

  onRefresh () {
    this.setState({ isRefreshing: true });
    this.fetchData();
    this.setState({ isRefreshing: false });
  }

  render () {
    return (
      <View style={styles.container}>
        <CommonFlatList
          data={this.props.dataSource}
          keyExtractor={item => item.id.toString()}
          renderItem={this.renderItem}
          ListHeaderComponent={this.renderHeader}
          ListFooterComponent={this.renderFooter}
          onEndReached={this.onEndReached.bind(this)}
          toRefresh={this.onRefresh.bind(this)}
          isRefreshing={this.state.isRefreshing}
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

const mapStateToProps = (state, ownProps) => {
  return {
    page: state.homeReducer.page,
    dataSource: state.homeReducer.dataSource,
    homeBanner: state.homeReducer.homeBanner,
    homeArticleList: state.homeReducer.homeArticleList,
    isRenderFooter: state.homeReducer.isRenderFooter,
    isFullData: state.homeReducer.isFullData,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchHomeBanner: bindActionCreators(fetchHomeBanner, dispatch),
    fetchHomeArticleList: bindActionCreators(fetchHomeArticleList, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
