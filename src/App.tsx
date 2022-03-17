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
  const { myUser } = useSelector((state: RootState) => state.users);

  const [role, setRole] = useState('');
  const ability = buildAbilityFor(role);

  useEffect(() => {
    dispatch(getUserRequest());
  }, []);

  useEffect(() => {
    if (Object.keys(myUser).length > 0) {
      setRole(myUser.role);
    }
  }, [myUser]);

  return (
    <div className="App">
      <AbilityContext.Provider value={ability}>
        <h2>
          {myUser.firstName} current role: {role}
        </h2>
        <Todo setRole={setRole} role={role} />
      </AbilityContext.Provider>
    </div>
  );
}

export default App;
