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
  constructor (props) {
    super(props);
    this.state = {
      currentBannerIndex: 0,
    };
    this.getCurrentImgIndex = this.getCurrentImgIndex.bind(this);
    this.toShowWebView = this.toShowWebView.bind(this);
  }

  getCurrentImgIndex (imageIndex) {
    this.setState({ currentBannerIndex: imageIndex });
  }

  toShowWebView (info) {
    const { navigation } = this.props;
    const { title, url } = info;
    navigation.navigate('WebView', {
      title,
      url,
    });
  }

  render () {
    const { bannerArr } = this.props;
    if (!bannerArr.length) {
      return <View style={styles.defaultBg}/>;
    }
    return (
      <View>
        <Swiper
          style={styles.imgCarousel}
          horizontal={true}
          loop={true}
          autoplay={true}
          showsPagination={false}
          removeClippedSubviews={false} // 处理ios切换页面白屏
          onIndexChanged={this.getCurrentImgIndex}>
          {bannerArr.map(el => (
            <Touchable
              key={el.id}
              isWithoutFeedback={true}
              onPress={() => this.toShowWebView(el)}>
              <Image style={styles.imgBanner} source={{ uri: el.imagePath }}/>
            </Touchable>
          ))}
        </Swiper>
      </View>
    );
  }
}

const imageHeight = 380;
const styles = StyleSheet.create({
  defaultBg: {
    height: imageHeight,
    backgroundColor: Color.DEFAULT_BG,
  },
  bannerContainer: {
    height: imageHeight,
    backgroundColor: Color.DEFAULT_BG,
  },
  imgCarousel: {
    height: imageHeight,
  },
  imgBanner: {
    width: Dimensions.get('window').width,
    height: imageHeight,
    resizeMode: 'stretch',
  },
  bannerHint: {
    flex: 1,
    width: Dimensions.get('window').width,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    backgroundColor: 'rgba(0,0,0,0.3)',
    height: 50,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
  bannerText: {
    color: Color.WHITE,
    fontSize: 28,
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
