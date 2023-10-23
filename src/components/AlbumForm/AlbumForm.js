import { useAlbumContext } from "../../context/albumContext"
import { useEffect, useRef } from "react";
export const AlbumForm = ()=>{
    const {showForm, setShowForm, updateAlbum, addAlbum, editAlbum, setUpdateAlbum} = useAlbumContext();
    
    const albumName = useRef();
    //handle add
    const handleSubmit = (e)=>{
        e.preventDefault();
        if(updateAlbum.state) {
            const newAlbum = updateAlbum.newAlbum.album;
            newAlbum.title = albumName.current.value;
            editAlbum(newAlbum);
            setUpdateAlbum({newAlbum, state:false})
        }else{
            addAlbum(albumName.current.value);
            setShowForm(false);

        }
    }
    useEffect(()=>{
        if(updateAlbum.state){
            albumName.current.value = updateAlbum.newAlbum.album.title;
        }
    }, [updateAlbum])

   

    return (
        <>
            {(showForm || updateAlbum.state) &&
                <form onSubmit={handleSubmit}  className="flex flex-col mx-auto mt-4 mb-4 bg-[#cdcbcb] p-4 h-fit w-[400px] rounded-md shadow-md">
                    <label htmlFor="">Album Name</label>
                    <input ref={albumName}  placeholder="Enter name" className="text-sm mt-1 font-sans font-light p-1 rounded-md" type="text" />
                    <button type="submit" className="bg-white p-1 h-fit w-fit rounded-md mt-2 mx-auto font-bold">{updateAlbum.state ? "Update": "Add"}</button>
                </form>
            }
        </>
     
    )
}