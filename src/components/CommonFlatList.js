import React, { PureComponent } from 'react';
import { StyleSheet, FlatList, RefreshControl } from 'react-native';
import PropTypes from 'prop-types';
import Color from '../utils/Color';

/**
 * FlatList 通用组件
 */
class CommonFlatList extends PureComponent {
  constructor (props) {
    super(props);
  }

  render () {
    return (
      <FlatList
        refreshControl={this.renderRefreshControl()}
        {...this.props}
      />
    );
  }

  renderRefreshControl () {
    const { isRefreshing, toRefresh, themeColor } = this.props;
    return (
      <RefreshControl
        refreshing={isRefreshing}
        onRefresh={toRefresh}
        enabled={true}
        colors={themeColor}
        tintColor={themeColor}
        title="重新加载"
        titleColor={Color.TEXT_LIGHT}
      />
    );
  }
}

const styles = StyleSheet.create({});

CommonFlatList.propTypes = {
  isRefreshing: PropTypes.bool,
  toRefresh: PropTypes.func,
  themeColor: PropTypes.string,
};

CommonFlatList.defaultProps = {
  isRefreshing: false,
  toRefresh: () => {},
};

export default CommonFlatList;
