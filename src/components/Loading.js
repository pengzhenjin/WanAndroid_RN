import React, {PureComponent} from 'react';
import {
    View,
    Modal,
    ActivityIndicator,
    Text,
    StyleSheet,
} from 'react-native';
import PropTypes from 'prop-types';
import Color from '../utils/Color';

class Loading extends PureComponent {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Modal
                transparent={true}
                visible={this.props.isVisible}
            >
                <View style={styles.container}>
                    <View style={styles.loading_container}>
                        <ActivityIndicator size="large" color={Color.THEME}/>
                        <Text style={styles.loading_title}>{this.props.title}</Text>
                    </View>
                </View>
            </Modal>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    loading_container: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 120,
        height: 120,
        backgroundColor: '#FFFFFF',
        borderRadius: 20,
        shadowColor: '#000000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    loading_title: {
        fontSize: 14,
        color: Color.THEME,
        marginVertical: 10,
    },
});

Loading.propTypes = {
    isVisible: PropTypes.bool.isRequired,   // 是否可见
    title: PropTypes.string.isRequired,     // 标题
};

Loading.defaultProps = {
    isVisible: false,
    title: '正在加载...',
};

export default Loading;
