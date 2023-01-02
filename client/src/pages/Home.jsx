import React from 'react';
import AddDragonModal from "../components/AddDragonModal";
import Dragons from '../components/Dragons';

export default function Home() {
  return (
    <>
      <div className="header">
        <AddDragonModal />
      </div>
      <Dragons />
    </> 
  )
}


