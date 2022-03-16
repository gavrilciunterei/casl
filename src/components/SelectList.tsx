import React, { Dispatch, SetStateAction } from 'react';
import { MenuItem, Select } from '@material-ui/core';
import '../App.css';

type SelectListProps = {
  role: string;
  setRole: Dispatch<SetStateAction<string>>;
};

function SelectList({ role, setRole }: SelectListProps) {
  return (
    <div className="container-select">
      <Select
        onChange={(value) => {
          // @ts-ignore
          setRole(value.target.value);
        }}
        value={role}
        labelId="demo-simple-select-label"
        id="demo-simple-select"
      >
        <MenuItem value={'admin'}>Admin</MenuItem>
        <MenuItem value={'staff'}>Staff</MenuItem>
        <MenuItem value={'viewer'}>Viewer</MenuItem>
      </Select>
    </div>
  );
}

export default SelectList;
