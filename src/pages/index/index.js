import Taro, { Component } from '@tarojs/taro'
import { View, Button, Input } from '@tarojs/components'
import { connect } from '@tarojs/redux';
import Title from './common/title';
import './index.less'

@connect(({ solomon }) => ({
  ...solomon,
}))

export default class Index extends Component {

  config = {
    navigationBarTitleText: '首页',
  }

  onChangeUsername = e => {
    const { dispatch } = this.props;
    dispatch({ type: 'solomon/change/username', payload: e.target.value });
  }

  onChangePassword = e => {
    const { dispatch } = this.props;
    dispatch({ type: 'solomon/change/password', payload: e.target.value });
  }

  onSubmit = () => {
    const { username } = this.props;
    if (!username) {
      Taro.showToast({
        title: '请输入用户名!',
        icon: 'none',
        mask: true,
      });
      return false;
    }
    
    Taro.navigateTo({
      url: '/pages/home/index',
    })
  }
  
  render () {
    const { username, password } = this.props;
    return (
      <View className='index'>
        <Title />
        <View className='content'>
          <Input
            className='input'
            placeholder='请输入用户名'
            value={username}
            onInput={this.onChangeUsername}
          />
          <Input
            className='input'
            type='password'
            value={password}
            onInput={this.onChangePassword}
            placeholder='请输入密码'
          />
        </View>
        <View className='button'>
          <Button onClick={this.onSubmit}>登录</Button>
        </View>
      </View>
    )
  }
}

