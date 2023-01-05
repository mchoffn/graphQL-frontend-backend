import React from 'react';
import AddDragonModal from "../components/AddDragonModal";
import { Dragons } from "../components/Dragons";

export default function Home() {
  const [ search, setSearch ] = React.useState('');
  console.log(search);

  const handleChange = (event) => {
    setSearch(event.target.value);
  };
  return (
    <>
      <div className="header">
        <AddDragonModal />
        <input placeholder='Search Dragons' value={search} onChange={handleChange} />
      </div>
      <Dragons search={search} />
    </> 
  )
}


