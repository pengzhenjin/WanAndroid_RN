import React, { PureComponent } from 'react';
import { Platform, ProgressBarAndroid, ProgressViewIOS } from 'react-native';
import PropTypes from 'prop-types';
import Color from '../utils/Color';
import { connect } from 'react-redux';

/**
 * ProgressBar 用于WebView展示时上方进度条
 */
class ProgressBar extends PureComponent {
  constructor (props) {
    super(props);
    this.state = {};
  }

  render () {
    const { progress, themeColor } = this.props;
    if (progress === 1) {
      return null;
    }
    if (Platform.OS === 'android') {
      return (
        <ProgressBarAndroid
          style={{ height: 10, backgroundColor: Color.WHITE }}
          styleAttr="Horizontal"
          color={themeColor}
          progress={progress}
        />
      );
    }
    return (
      <ProgressViewIOS
        trackTintColor={Color.WHITE}
        progressTintColor={themeColor}
        progress={progress}
      />
    );
  }
}

ProgressBar.propTypes = {
  progress: PropTypes.number.isRequired,
};
ProgressBar.defaultProps = {
  progress: 0,
};

const mapStateToProps = state => {
  return {
    themeColor: state.user.themeColor,
  };
};

export default connect(mapStateToProps)(ProgressBar);
