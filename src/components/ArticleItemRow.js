import React, { PureComponent } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import Color from '../utils/Color';
import globalStyles from '../styles/globalStyles';
import Touchable from './Touchable';
import { Icon } from 'react-native-elements';

class ArticleItemRow extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {};
    }

    gotoArticleDetailPage = (itemData) => {
        const {navigation} = this.props;
        const {title, link} = itemData;
        navigation.navigate('CommonWebView', {title: title, url: link,});
    }

    render() {
        const {item, onCollectFunc} = this.props;
        return (
            <Touchable
                style={styles.container}
                onPress={() => this.gotoArticleDetailPage(item)}
            >
                <View style={styles.item_container}>
                    <View style={styles.item_left_container}>
                        <Text numberOfLines={2} style={styles.item_title}>
                            {item.title}
                        </Text>
                        <Text numberOfLines={2} style={styles.item_desc}>
                            {item.desc}
                        </Text>
                        <View style={styles.item_like_time_container}>
                            <Touchable isPreventDouble={false} onPress={onCollectFunc}>
                                <Icon
                                    name='favorite'
                                    type='material'
                                    size={32}
                                    color={item.collect ? Color.COLLECT : Color.ICON_GRAY}
                                />
                            </Touchable>
                            <Text style={[styles.item_date_text, {marginLeft: 20}]}>
                                {item.niceDate}
                            </Text>
                            <Text style={[styles.item_date_text, {marginLeft: 10}]}>
                                {item.author || item.shareUser || item.chapterName}
                            </Text>
                        </View>
                    </View>
                    <View style={styles.item_right_container}>
                        {
                            item.envelopePic
                                ?
                                (
                                    <Image
                                        style={styles.item_image}
                                        source={{uri: item.envelopePic}}
                                        resizeMode={'stretch'}
                                    />
                                )
                                :
                                (
                                    <View style={{backgroundColor: Color.WHITE}}>
                                        <View
                                            style={[
                                                globalStyles.circleSpecialWrapper,
                                                {backgroundColor: Color.THEME,},
                                            ]}>
                                            <Text style={globalStyles.specialText}>
                                                {item.superChapterName}
                                            </Text>
                                        </View>
                                    </View>
                                )
                        }
                    </View>
                </View>
            </Touchable>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        padding: 10,
    },
    item_container: {
        backgroundColor: Color.WHITE,
        paddingHorizontal: 20,
        paddingTop: 20,
        paddingBottom: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderRadius: 20,
    },
    item_left_container: {
        flex: 1,
        justifyContent: 'space-between',
    },
    item_right_container: {
        justifyContent: 'center',
        marginLeft: 20,
    },
    item_image: {
        height: 200,
        width: 120,
        backgroundColor: Color.ICON_GRAY,
    },
    item_title: {
        fontSize: 18,
        color: Color.TEXT_MAIN,
        fontWeight: 'bold',
    },
    item_desc: {
        fontSize: 16,
        color: Color.TEXT_DARK,
        marginVertical: 12,
    },
    item_like_time_container: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
    },
    item_date_text: {
        fontSize: 16,
        color: Color.TEXT_LIGHT,
    },
});

ArticleItemRow.propTypes = {
    navigation: PropTypes.object.isRequired,
    item: PropTypes.object.isRequired,
    onCollectFunc: PropTypes.func.isRequired, // 收藏
};

ArticleItemRow.defaultProps = {
    onCollectFunc: () => {
    },
};

export default ArticleItemRow;
