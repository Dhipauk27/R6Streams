import { SIGN_IN, SIGN_OUT } from '../actions/types';

const INITIAL_STATE = {
  isSignedIn: null,
  userId: null
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    //modifies redux state based on signedIn or signedOut
    case SIGN_IN:
      return { ...state, isSignedIn: true, userId: action.payloadId, userName: action.payloadName, userAvatar: action.payloadAvatar};
    case SIGN_OUT:
      return { ...state, isSignedIn: false, userId: null};
    default:
      return state;  
  }
};