import { createContext, useState, useContext, useReducer } from "react";

//create a context
const AlbumContext = createContext();

//create and export custom hook
export const useAlbumContext =()=>{
    return useContext(AlbumContext);
}



//album reducer fn
const albumReducer = (albumState, action)=>{
    const {allAlbums, albumId, updatedAlbum} = action.payload;
    let newAlbums ={};
    switch(action.type){
        case "GET_ALBUMS":
            return allAlbums;
        case "ADD_ALBUM":
            const {newAlbum} = action.payload;
            return [newAlbum, ...albumState];
        case "DELETE_ALBUM":
            newAlbums = albumState.filter((album)=> album.id !== albumId);
            return newAlbums;
        case "EDIT_ALBUM":
            newAlbums = albumState.map((album)=>{
                if (album.id === updatedAlbum.id) {
                    // Update the title for the matching album
                    return { ...album, title: updatedAlbum.title };
                }else {
                    // Return the current album as is
                    return album;
                }
            
            });
            return newAlbums;
        default:
            return albumState;
    }

}

//create a custom albumContext provider
const CustomAlbumProvider = ({children})=>{
    const [albumState, dispatch] = useReducer(albumReducer, []);
    const [showForm, setShowForm] = useState(false);
    const [updateAlbum, setUpdateAlbum] = useState({newAlbum:{}, state:false});
    const [id, setId] = useState(101); // Initialize the id state with a value


    //get all albums
    const getAlbums = async ()=>{
        const res = await fetch(' https://jsonplaceholder.typicode.com/albums');
        const allAlbums = await res.json();
        dispatch({type:"GET_ALBUMS", payload:{allAlbums}});
    }


    //fn to add a album
    const addAlbum = async (albumName)=>{
      try{
        const newAlbum = {id:id, title:albumName, userId: 10};
        const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify(newAlbum),
            headers: {
              'Content-type': 'application/json; charset=UTF-8',
            },
          });
      
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }

        dispatch({type: "ADD_ALBUM", payload:{newAlbum}});
        setId(id+1);
      }catch(err){
        console.log(err);
      }
    }
    //fn to delete a album
    const deleteAlbum =(albumId)=>{
        fetch('https://jsonplaceholder.typicode.com/posts/{albumId}', {
            method: 'DELETE',
        });
        dispatch({type: "DELETE_ALBUM", payload:{albumId}});
    }

    //fn to edit album
    const editAlbum = (updatedAlbum)=>{
        fetch('https://jsonplaceholder.typicode.com/posts/1', {
        method: 'PUT',
        body: JSON.stringify(updatedAlbum),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
        })
        dispatch({type: "EDIT_ALBUM", payload:{updatedAlbum}});

    }

    return(
        <AlbumContext.Provider value={{albumState, getAlbums, addAlbum, deleteAlbum, showForm, setShowForm, updateAlbum, setUpdateAlbum, editAlbum}} >
            {children}
        </AlbumContext.Provider>
    );
}

export default CustomAlbumProvider;
