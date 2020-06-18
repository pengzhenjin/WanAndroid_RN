/**
 * 体系
 */
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import BaseContainer from '../../base/BaseContainer';

class System extends BaseContainer {
  render () {
    return (
      <View style={styles.container}>
        <Text>首页</Text>
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

export default System;
