/**
 * Created by huangjunsheng on 2019-09-25
 */
import React, { PureComponent } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import Color from '../utils/Color';
import globalStyles from '../styles/globalStyles';
import Touchable from './Touchable';
import Icon from 'react-native-vector-icons/Ionicons';

class ArticleItemRow extends PureComponent {
  constructor (props) {
    super(props);
    this.state = {};
  }

  render () {
    const { navigation, item, isWxArticle, onCollectPress } = this.props;
    return (
      <Touchable
        style={styles.container}
        onPress={() =>
          navigation.navigate('WebView', {
            title: item.title,
            url: item.link,
          })
        }>
        <View style={styles.itemWrapper}>
          <View style={styles.itemLeftWrapper}>
            <Text numberOfLines={2} style={styles.title}>
              {item.title}
            </Text>
            <Text numberOfLines={3} style={styles.desc}>
              {item.desc}
            </Text>
            <View style={styles.likeTime}>
              <Touchable isPreventDouble={false} onPress={onCollectPress}>
                <Icon
                  name={'md-heart'}
                  size={50}
                  color={item.collect ? Color.COLLECT : Color.ICON_GRAY}
                />
              </Touchable>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <View style={styles.timeIconWrapper}>
                  <Icon
                    name={'ios-time'}
                    size={50}
                    color={Color.ICON_GRAY}
                  />
                </View>
                <Text style={styles.dateText}>{item.niceDate}</Text>
                <Text style={[styles.dateText, { marginLeft: 20 }]}>
                  {item.author || item.shareUser || item.chapterName}
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.itemRightWrapper}>
            {item.envelopePic ? (
              <Image
                style={styles.image}
                source={{ uri: item.envelopePic }}
                resizeMode={'stretch'}
              />
            ) : (
              <View style={{ backgroundColor: Color.WHITE }}>
                <View
                  style={[
                    globalStyles.circleSpecialWrapper,
                    {
                      backgroundColor: isWxArticle
                        ? Color.WX_GREEN
                        : getChapterBgColor(item.chapterId),
                    },
                  ]}>
                  <Text style={globalStyles.specialText}>
                    {item.superChapterName || i18n('Article')}
                  </Text>
                </View>
              </View>
            )}
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
  },
  itemWrapper: {
    width: 700,
    backgroundColor: Color.WHITE,
    paddingHorizontal: 20,
    paddingTop: 25,
    paddingBottom: 13,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
    borderRadius: 20,
  },
  itemLeftWrapper: {
    flex: 1,
    width: 520,
    justifyContent: 'space-between',
  },
  itemRightWrapper: {
    justifyContent: 'center',
  },
  image: {
    height: 200,
    width: 120,
    backgroundColor: Color.ICON_GRAY,
  },
  title: {
    fontSize: 28,
    color: Color.TEXT_MAIN,
    fontWeight: 'bold',
    maxWidth: 520,
  },
  desc: {
    fontSize: 26,
    color: Color.TEXT_DARK,
    marginVertical: 12,
    maxWidth: 520,
  },
  likeTime: {
    width: 520,
    flexDirection: 'row',
    alignItems: 'center',
  },
  dateText: {
    fontSize: 24,
    color: Color.TEXT_LIGHT,
  },
  timeIconWrapper: {
    marginHorizontal: 20,
  },
});

ArticleItemRow.propTypes = {
  navigation: PropTypes.object.isRequired,
  item: PropTypes.object.isRequired,
  isWxArticle: PropTypes.bool.isRequired, // 公众号文章
  onCollectPress: PropTypes.func.isRequired, // 收藏
};

ArticleItemRow.defaultProps = {
  isWxArticle: false,
  onCollectPress: () => {},
};

export default ArticleItemRow;
