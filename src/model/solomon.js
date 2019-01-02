import Taro from '@tarojs/taro';

export default {
  namespace: 'solomon',
  state: {
    username: '',
    password: '',
  },

  effects: {
    // * load(_, {}) {
      
    // },
  },

  reducers: {
    'change/username': (state, { payload }) => {
      return {
        ...state,
        username: payload,
      };
    },
    'change/password': (state, { payload }) => {
      return {
        ...state,
        password: payload,
      };
    },
  },
};
