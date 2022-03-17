import React, { useEffect } from 'react';
import './App.css';
import { buildAbilityFor } from './casl/ability';
import { AbilityContext } from './casl/Can';
import Todo from './views/Todo';

import { useDispatch, useSelector } from 'react-redux';
import { getUserRequest } from './store/actions/users';
import { RootState } from './store';

function App() {
  const dispatch = useDispatch();
  const { myUser } = useSelector((state: RootState) => state.users);

  const ability = buildAbilityFor(myUser.role ? myUser.role : 'viewer');

  useEffect(() => {
    dispatch(getUserRequest());
  }, []);

  return (
    <div className="App">
      <AbilityContext.Provider value={ability}>
        <h2>
          {myUser.firstName} current role: {myUser.role}
        </h2>
        <Todo />
      </AbilityContext.Provider>
    </div>
  );
}

export default App;
