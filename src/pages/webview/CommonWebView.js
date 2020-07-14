import React from 'react'
import { WebView } from 'react-native-webview'
import BaseComponent from "../../base/BaseComponent";

/**
 * @description: 公共的 webview
 * @author: pengzhenjin
 * @date: 2020/7/13
 */
export default class CommonWebView extends BaseComponent {
    constructor(props) {
        super(props);
        this.title = this.params.title;
        this.url = this.params.url;

        this.navigation.setOptions({headerTitle: this.title});
    }

    componentDidMount() {

    }

    render() {
        return (
            <WebView
                source={{uri: this.url}}
                startInLoadingState={true}
            />
        );
    }
}
