// import * as homeApi from './service';

export default {
  namespace: 'home',
  state: {
    name: 'name',
  },

  effects: {
    // * effectsDemo(_, { call, put }) {},
  },

  reducers: {
    save(state, { payload }) {
      return { ...state, ...payload };
    },
  },
};
