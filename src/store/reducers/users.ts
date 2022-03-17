import { Types } from '../actions/users';

type MyUserProps = {
  role: string;
};

type InicialProps = {
  myUser?: MyUserProps;
};

const initial_state: InicialProps = {
  myUser: {
    role: '',
  },
};

export default function usersReducer(state = initial_state, action: any) {
  switch (action.type) {
    case Types.GET_USERS_SUCCESS:
      return {
        ...state,
        myUser: action.payload,
      };
    case Types.UPDATE_ROLE:
      return {
        ...state,
        myUser: { ...state.myUser, role: action.payload },
      };
    default:
      return state;
  }
}
