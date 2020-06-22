/**
 * Created by hjs on 2019-09-20
 */
import React, { Component } from 'react';
import { Text, View, StyleSheet, ActivityIndicator, Dimensions } from 'react-native';
import PropTypes from 'prop-types';
import Color from '../utils/Color';

class ListFooter extends Component {
  render () {
    if (!this.props.isRenderFooter) {
      return null;
    }
    if (this.props.isFullData) {
      return (
        <View style={styles.footer}>
          <Text style={{ color: Color.TEXT_LIGHT }}>all-loaded</Text>
        </View>
      );
    } else {
      return (
        <View style={styles.footer}>
          <ActivityIndicator color={this.props.indicatorColor}/>
          <Text style={{ marginLeft: 20, color: Color.TEXT_LIGHT }}>
            Playing with life loading
          </Text>
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  footer: {
    flexDirection: 'row',
    width: Dimensions.get('window').width,
    height: 80,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

ListFooter.propTypes = {
  isRenderFooter: PropTypes.bool.isRequired,
  isFullData: PropTypes.bool.isRequired,
  indicatorColor: PropTypes.string,
};
ListFooter.defaultProps = {
  isRenderFooter: false,
  isFullData: false,
  indicatorColor: Color.THEME,
};

export default ListFooter;
