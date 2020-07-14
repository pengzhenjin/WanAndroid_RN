import React, { Component } from 'react';
import { StyleSheet, View, Image, Dimensions } from 'react-native';
import PropTypes from 'prop-types';
import Swiper from 'react-native-swiper';
import Touchable from './Touchable';
import Color from '../utils/Color';

/**
 * 轮播图组件
 */
class Banner extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentBannerIndex: 0,
        };
    }

    /**
     * 跳转到详情页面
     * @param itemData
     */
    gotoBannerDetailPage = (itemData) => {
        const {navigation} = this.props;
        const {title, url} = itemData;
        navigation.navigate('CommonWebView', {title, url,});
    }

    render() {
        const {bannerArr} = this.props;
        if (!bannerArr.length) {
            return <View style={styles.default_image} />;
        }
        return (
            <Swiper
                style={styles.swiper_container}
                horizontal={true}
                loop={true}
                autoplay={true}
                showsPagination={false}
                removeClippedSubviews={false} // 处理ios切换页面白屏
            >
                {
                    bannerArr.map((item, index) => (
                        <Touchable
                            key={index}
                            isWithoutFeedback={true}
                            onPress={() => this.gotoBannerDetailPage(item)}
                        >
                            <Image style={styles.swiper_image} source={{uri: item.imagePath}} />
                        </Touchable>
                    ))
                }
            </Swiper>
        );
    }
}

const imageWidth = Dimensions.get('window').width;
const imageHeight = 320;
const styles = StyleSheet.create({
    default_image: {
        height: imageHeight,
        backgroundColor: Color.DEFAULT_BG,
    },
    swiper_container: {
        height: imageHeight,
    },
    swiper_image: {
        width: imageWidth,
        height: imageHeight,
        resizeMode: 'stretch',
    },
});

Banner.propTypes = {
    bannerArr: PropTypes.array.isRequired,
    navigation: PropTypes.object.isRequired,
};

Banner.defaultProps = {
    bannerArr: [],
};

export default Banner;
