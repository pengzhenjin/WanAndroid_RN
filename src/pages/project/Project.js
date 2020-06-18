/**
 * 项目
 */
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import BaseContainer from '../../base/BaseContainer';

class Project extends BaseContainer {
  render () {
    return (
      <View style={styles.container}>
        <Text>项目</Text>
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

export default Project;
