import React from 'react';
import AddDragonModal from "../components/AddDragonModal";
import Dragons from '../components/Dragons';
import SearchBar  from '../components/SearchBar';

export default function Home() {
  return (
    <>
      <div className="header">
        <AddDragonModal />
        <SearchBar />
      </div>
      <Dragons />
    </> 
  )
}


