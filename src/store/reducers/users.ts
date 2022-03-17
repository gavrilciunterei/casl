import { Types } from '../actions/users';

const initial_state = {
  myUser: {},
};

export default function usersReducer(state = initial_state, action: any) {
  switch (action.type) {
    case Types.GET_USERS_SUCCESS:
      return {
        ...state,
        myUser: action.payload,
      };

    default:
      return state;
  }
}
