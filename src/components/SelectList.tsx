import React, { Dispatch, SetStateAction } from 'react';
import Select from 'react-select';
import '../App.css';

type SelectListProps = {
  role: {};
  setRole: Dispatch<SetStateAction<{ value: string; label: string }>>;
};

function SelectList({ role, setRole }: SelectListProps) {
  const options: any = [
    { value: 'admin', label: 'admin' },
    { value: 'staff', label: 'staff' },
    { value: 'viewer', label: 'viewer' },
  ];

  const handleChange = (option: any) => {
    setRole({ value: option.value, label: option.label });
  };

  return (
    <div className="container-select">
      <Select defaultValue={role} onChange={handleChange} options={options} />
    </div>
  );
}

export default SelectList;
