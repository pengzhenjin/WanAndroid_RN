/**
 * 登录
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
    Text,
    Icon,
} from 'react-native-elements';
import Color from '../../utils/Color';
import Loading from '../../components/Loading';

class Login extends BaseContainer {
    constructor(props) {
        super(props);
        this.state = {
            account: '',
            password: '',
        };
    }

    /**
     * 登录
     */
    loginFunc = () => {

    };

    /**
     * 跳转到注册页面
     */
    gotoRegisterPage = () => {
        this.navigation.navigate('Register');
    };

    render() {
        return (
            <View style={styles.container}>
                <Loading isVisible={false} title='正在登录...'/>
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

                <Text style={styles.register_txt} onPress={this.gotoRegisterPage}>去注册</Text>
                <Button buttonStyle={styles.login_btn} onPress={this.loginFunc} title='登录'/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    register_txt: {
        fontSize: 16,
        color: Color.THEME,
        alignSelf: 'flex-end',
    },
    login_btn: {
        marginTop: 30,
    },
});

export default Login;
