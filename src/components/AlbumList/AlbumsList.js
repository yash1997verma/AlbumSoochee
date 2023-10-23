import { useEffect, useState } from "react";
import { Album } from "./Album";
import { useAlbumContext } from "../../context/albumContext";
export const AlbumList = ()=>{
    const {albumState, getAlbums, showForm,setShowForm, updateAlbum} = useAlbumContext();
    // console.log(albumState)
    
    //fetch albums
    const fetchAlbums = async ()=>{
      getAlbums();
    }
    //to add album
    const handleAddAlbum = ()=>{
        setShowForm(true);
    }

    useEffect( ()=>{
        fetchAlbums();
        
    },[]);
    return (
        <>
        <div className="flex justify-between p-4 m-4">
            <h1>All Albums</h1>
            {(!showForm || !updateAlbum.state) && <button onClick={handleAddAlbum} className=" bg-black text-white font-bold rounded-md p-2">Add Album</button> }

        </div>
            <div className="grid grid-cols-4 gap-4">
                {albumState.map((album)=>(
                        <Album album={album} key ={album.id} />
                ))}
            </div>
        </>
    );
}