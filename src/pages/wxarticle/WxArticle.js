/**
 * 公众号
 */
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import BaseContainer from '../../base/BaseContainer';

class WxArticle extends BaseContainer {
  render () {
    return (
      <View style={styles.container}>
        <Text>公众号</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default WxArticle;
