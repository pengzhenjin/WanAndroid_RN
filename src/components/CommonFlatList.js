import React, {PureComponent} from 'react';
import {
    StyleSheet,
    FlatList,
    RefreshControl,
} from 'react-native';
import PropTypes from 'prop-types';
import Color from '../utils/Color';

/**
 * FlatList 通用组件
 */
class CommonFlatList extends PureComponent {
    constructor(props) {
        super(props);
    }

    renderRefreshControl() {
        const {isPulling, onPull} = this.props;
        return (
            <RefreshControl
                refreshing={isPulling}
                onRefresh={onPull}
                enabled={true}
                colors={[Color.THEME]}
                tintColor={Color.THEME}
                title="重新加载"
                titleColor={Color.TEXT_LIGHT}
            />
        );
    }

    render() {
        return (
            <FlatList
                refreshControl={this.renderRefreshControl()}
                {...this.props}
            />
        );
    }
}

CommonFlatList.propTypes = {
    isPulling: PropTypes.bool,
    onPUll: PropTypes.func,
};

CommonFlatList.defaultProps = {
    isPulling: false,
    onPull: () => {
    },
};

export default CommonFlatList;
