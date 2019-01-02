import Taro, { Component } from '@tarojs/taro';

import { View, Text } from '@tarojs/components';
import './title.less';

class Title extends Component {
  render() {
    return (
      <View className='top'>
        <Text>Hello world!</Text>
      </View>
    )
  }
}

export default Title;
