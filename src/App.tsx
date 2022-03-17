import React, { useEffect, useState } from 'react';
import './App.css';
import { buildAbilityFor } from './casl/ability';
import { AbilityContext } from './casl/Can';
import Todo from './views/Todo';

import { useDispatch, useSelector } from 'react-redux';
import { getUserRequest } from './store/actions/users';
import { RootState } from './store';

function App() {
  const dispatch = useDispatch();
  const [role, setRole] = useState('admin');
  const ability = buildAbilityFor(role);

  const { myUser } = useSelector((state: RootState) => state.users);

  useEffect(() => {
    dispatch(getUserRequest());
  }, []);

  return (
    <div className="App">
      <AbilityContext.Provider value={ability}>
        <h2>Current role: {role}</h2>
        <Todo role={(role) => setRole(role)} />
      </AbilityContext.Provider>
    </div>
  );
}

export default App;
