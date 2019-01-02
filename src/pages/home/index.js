import Taro, { Component } from '@tarojs/taro';
import { View } from '@tarojs/components';
import { connect } from '@tarojs/redux';
import './index.less';

@connect(({home}) => ({
  ...home,
}))
export default class Home extends Component {

  config = {
    navigationBarTitleText: "Welcome",
  };

  render() {
    return (
      <View className='home'>
        welcome
      </View>
    )
  }
}
