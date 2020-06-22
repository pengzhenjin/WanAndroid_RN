import React, { Component } from 'react';

class BaseComponent extends Component {
  constructor (props) {
    super(props);
    console.log('BaseComponent props:', props);
    this.navigation = this.props.navigation; // 获取导航
    this.route = this.props.route; // 获取路由
    this.params = this.route ? this.route.params : null; // 获取路由参数
  }
}

export default BaseComponent;
