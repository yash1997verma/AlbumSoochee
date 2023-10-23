import { useEffect } from "react" 
import { useAlbumContext } from "../../context/albumContext"


export const Album =  ({album})=>{
    const {deleteAlbum,setUpdateAlbum } = useAlbumContext();

    //handle delete album
    const handleDelete = (id)=>{
        deleteAlbum(id);
    }

    //handle edit
    const handleEdit = (id)=>{
        setUpdateAlbum({newAlbum:{album}, state:true});
    }

    return(
        <div className="m-4 relative flex flex-col border-black border-1 shadow-md rounded-md h-[160px] w-[140px] items-center justify-between ">
            <svg onClick={()=>handleDelete(album.id)} className="cursor-pointer absolute left-[128px] top-[-13px] w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
            <svg onClick ={()=>handleEdit(album.id)} className=" cursor-pointer absolute left-[106px] top-[-14px] w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" >
                <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
            </svg>


            <svg className="h-[100px] w-[100px] rounded-md mt-4 border-2 border-slate-200 " xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" >
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
            </svg>
            

            <p className="absolute text-center h-[44px] w-[100px] top-[120px]  font-mono text-[#414040] text-sm text-ellipsis overflow-hidden">{album.title}</p>

        </div>
    )   
}
