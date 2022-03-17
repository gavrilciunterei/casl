export const Types = {
  GET_USERS_REQUEST: 'users/get_users_request',
  GET_USERS_SUCCESS: 'users/get_users_success',
  UPDATE_ROLE: 'users/update_role',
};

export const getUserRequest = () => ({
  type: Types.GET_USERS_REQUEST,
});

export const getUserSuccess = ({ items }: any) => ({
  type: Types.GET_USERS_SUCCESS,
  payload: items,
});

export const updateRole = (newRole: any) => ({
  type: Types.UPDATE_ROLE,
  payload: newRole,
});
