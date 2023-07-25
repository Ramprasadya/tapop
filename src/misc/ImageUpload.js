import React, { useEffect, useState } from 'react'
import { storage } from './config';
import {ref,uploadBytes ,listAll, getDownloadURL} from "firebase/storage"
import { v4 } from 'uuid';
import "./style.css"
const ImageUpload = () => {
  
    const [imageUpload, setImageUpload] = useState("");
    const [imageList,setImageList] =useState([])

    const imageListRef = ref(storage,"images/");

const uploadImage=async()=>{
   console.log(" before image data-"+imageUpload)
    if(imageUpload == null)return;
    console.log("After image data-"+imageUpload)
    const imageRef = await ref(storage,`images/${imageUpload.name +v4()}`); 
    await uploadBytes(imageRef,imageUpload).then((snapshot)=>{
        console.log("File uploaded-")
        console.log("File data-"+snapshot)
        getDownloadURL(snapshot.ref).then((url)=>{
            setImageList((prev)=>[...prev,url])
        })
    })
}


useEffect(()=>{
    
    listAll(imageListRef).then((res)=>{
        res.items.forEach((item)=>{
            getDownloadURL(item).then((url)=>{
                setImageList((prev)=>[...prev,url])
            })
        })
    })
    // eslint-disable-next-line
},[])


  return (
    
    <>
     
     <div>
     
      
        <input type="file" onChange={(event)=>{setImageUpload(event.target.files[0])} }    />
        <button  onClick={uploadImage} >Upload Image</button>
        
        {
            imageList.map((url)=>{
                return <img src={url} alt="Not Found " />
            })
        }
     </div>

    </>

  )
}

export default ImageUpload