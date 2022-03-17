import React, { Dispatch, SetStateAction, useState } from 'react';
import '../App.css';
import {
  Button,
  ListItem,
  ListItemIcon,
  ListItemText,
  TextField,
} from '@material-ui/core';
import { DeleteOutline } from '@material-ui/icons';
import Can from '../casl/Can';
import SelectList from '../components/SelectList';

type RoleProps = {
  role: string;
  setRole: Dispatch<SetStateAction<string>>;
};

const Todo = ({ role, setRole }: RoleProps) => {
  const [value, setValue] = useState<string>();
  const [todo, setTodo] = useState<{ value: string; id: string }[] | undefined>(
    []
  );

  return (
    <div className="container">
      <div>
        <div>
          <div>
            <h2>Subject: Todo</h2>
            <SelectList role={role} setRole={setRole} />

            <div style={{ display: 'flex', alignItems: 'center' }}>
              <form>
                <TextField
                  onChange={(e) => setValue(e.target.value)}
                  size="small"
                  id="outlined-basic"
                  label="Todo"
                  variant="outlined"
                  value={value}
                />
                <span style={{ padding: 5 }} />
                <Can I="create" a="Todo">
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={() => {
                      setTodo([
                        // @ts-ignore
                        ...todo,
                        {
                          id: value,
                          value: value,
                        },
                      ]);
                      setValue('');
                    }}
                  >
                    Add
                  </Button>
                </Can>
              </form>
            </div>
            <div>
              {todo?.map((val, key) => {
                return (
                  <ListItem
                    key={key}
                    dense
                    button
                    style={{ marginTop: 10, marginBottom: 10 }}
                  >
                    <ListItemIcon>
                      <Can I="delete" a="Todo">
                        <DeleteOutline
                          onClick={() => {
                            const deleteValue = todo.filter(
                              (todo) => todo.id !== val.id
                            );
                            setTodo(deleteValue);
                          }}
                        />
                      </Can>
                    </ListItemIcon>
                    <Can I="read" a="Todo">
                      <ListItemText>{val.value}</ListItemText>
                    </Can>
                  </ListItem>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Todo;
