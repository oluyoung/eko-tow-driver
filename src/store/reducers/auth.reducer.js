import ACTION_HANDLERS from '../handlers/auth.handler';

const initState = {
  authentication: {
    email: '',
    password: '',
    isLogin: true
  },
  currentUser: {
    username: 'eman',
    id: '5d7d8305127604647eafb25e',
    phoneNumber: '+23480735767122'
  }
};


const homeReducer = (state = initState, action) => {
  const handler = ACTION_HANDLERS[action.type];

  return handler ? handler(state, action) : state;
};

export default homeReducer;
