/**
 * 搜索
 */
import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import BaseContainer from '../../base/BaseContainer';

class Search extends BaseContainer {
  render () {
    return (
      <View style={styles.container}>
        <Text>搜索</Text>
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

export default Search;
