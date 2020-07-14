import React from 'react';
import { TouchableOpacity } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import Home from './pages/home/Home';
import Project from './pages/project/Project';
import System from './pages/system/System';
import WxArticle from './pages/wxarticle/WxArticle';
import Login from './pages/user/Login';
import Search from './pages/search/Search';
import CommonWebView from './pages/webview/CommonWebView';

const bottomTabItemOption = ({route}) => {
    let tabBarLabel, tabBarIcon;
    switch (route.name) {
        case 'Home': {
            tabBarLabel = '首页';
            tabBarIcon = 'home';
            break;
        }
        case 'Project': {
            tabBarLabel = '项目';
            tabBarIcon = 'card-text';
            break;
        }
        case 'System': {
            tabBarLabel = '体系';
            tabBarIcon = 'layers';
            break;
        }
        case 'WxArticle': {
            tabBarLabel = '公众号';
            tabBarIcon = 'account-group';
            break;
        }
    }
    return (
        {
            tabBarLabel: tabBarLabel,
            tabBarIcon: ({focused, color, size}) => {
                return <Icon name={tabBarIcon} color={color} size={size} />;
            },

        }
    );
};

const bottomTabOptions = {
    activeTintColor: 'blue',
    inactiveTintColor: 'gray',
};

// 主页面底部导航
const Main = () => {
    const BottomTab = createBottomTabNavigator();
    return (
        <BottomTab.Navigator initialRouteName="Home" tabBarOptions={bottomTabOptions}>
            <BottomTab.Screen name="Home" component={Home} options={bottomTabItemOption} />
            <BottomTab.Screen name="Project" component={Project} options={bottomTabItemOption} />
            <BottomTab.Screen name="System" component={System} options={bottomTabItemOption} />
            <BottomTab.Screen name="WxArticle" component={WxArticle} options={bottomTabItemOption} />
        </BottomTab.Navigator>
    );
};

const stackItemOption = ({route, navigation}) => {
    let headerShown = false;
    let headerTitle = route.name;
    let headerTitleAlign = 'center';
    let headerTintColor = 'blue';
    let headerLeft, headerRight, headerLeftContainerStyle, headerRightContainerStyle;
    switch (route.name) {
        case 'Main': {
            headerShown = true;
            headerTitle = '玩安卓';
            headerLeft = () => {
                return (
                    <TouchableOpacity onPress={() => {
                        navigation.navigate('Login');
                    }}>
                        <Icon name="account-circle" size={32} />
                    </TouchableOpacity>
                );
            };
            headerRight = () => {
                return (
                    <TouchableOpacity onPress={() => {
                        navigation.navigate('Search');
                    }}>
                        <Icon name="magnify" size={32} />
                    </TouchableOpacity>
                );
            };
            headerLeftContainerStyle = {
                justifyContent: 'center',
                alignItems: 'center',
                padding: 10,
            };
            headerRightContainerStyle = {
                justifyContent: 'center',
                alignItems: 'center',
                padding: 10,
            };
            break;
        }
        case 'Login': {
            headerShown = true;
            headerTitle = '登录';
            break;
        }
        case 'Search': {
            headerShown = true;
            headerTitle = '搜索';
            break;
        }
        case 'CommonWebView': {
            headerShown = true;
            headerTitle = 'WebView';
            break;
        }
    }
    return (
        {
            headerShown: headerShown,
            headerTitle: headerTitle,
            headerTitleAlign: headerTitleAlign,
            headerTintColor: headerTintColor,
            headerLeft: headerLeft,
            headerLeftContainerStyle: headerLeftContainerStyle,
            headerRight: headerRight,
            headerRightContainerStyle: headerRightContainerStyle,
        }
    );
};

// App路由
const AppRoute = () => {
    const Stack = createStackNavigator();
    return (
        <Stack.Navigator initialRouteName="Main">
            <Stack.Screen name="Main" component={Main} options={stackItemOption} />
            <Stack.Screen name="Login" component={Login} options={stackItemOption} />
            <Stack.Screen name="Search" component={Search} options={stackItemOption} />
            <Stack.Screen name="CommonWebView" component={CommonWebView} options={stackItemOption} />
        </Stack.Navigator>
    );
};

export default AppRoute;
