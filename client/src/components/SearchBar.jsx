import React, { useState } from 'react';
import { InputText } from 'primereact/inputtext';

const  SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };
 
  return (
    <InputText type={'text'} value={searchTerm} placeholder='Search Dragons' onChange={handleChange} />
  );
}

export default SearchBar;