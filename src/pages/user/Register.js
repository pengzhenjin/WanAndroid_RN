/**
 * 注册
 */
import React from 'react';
import {
    StyleSheet,
    View,
} from 'react-native';
import BaseContainer from '../../base/BaseContainer';
import {
    Input,
    Button,
    Icon,
} from 'react-native-elements';
import Loading from '../../components/Loading';

class Register extends BaseContainer {
    constructor(props) {
        super(props);
        this.state = {
            account: '',
            password: '',
            repassword: '',
        };
    }

    registerFunc = () => {

    };

    render() {
        return (
            <View style={styles.container}>
                <Loading isVisible={false} title='正在注册...'/>
                <Input
                    placeholder='请输入用户名'
                    textContentType='username'
                    leftIcon={<Icon name='person' size={24}/>}
                />
                <Input
                    placeholder='请输入密码'
                    textContentType='password'
                    leftIcon={<Icon name='lock' size={24}/>}
                />
                <Input
                    placeholder='请输入确认密码'
                    textContentType='password'
                    leftIcon={<Icon name='lock' size={24}/>}
                />
                <Button buttonStyle={styles.register_btn} onPress={this.registerFunc} title='注册'/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    register_btn: {
        marginTop: 30,
    },
});


export default Register;
