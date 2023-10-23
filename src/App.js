import logo from './logo.svg';
import './App.css';
import { AlbumList } from './components/AlbumList/AlbumsList';
import { AlbumForm } from './components/AlbumForm/AlbumForm';
import { useState } from 'react';
//album context
import CustomAlbumProvider from './context/albumContext';
function App() {

  return (
    <div className='p-4 '>

      <CustomAlbumProvider >
        <h4 className='text-blue-400 font-bold font-sans italic '>AlbumSoochee</h4>
        <AlbumForm />
        <AlbumList />
      </CustomAlbumProvider>

    </div>
  );
}

export default App;
