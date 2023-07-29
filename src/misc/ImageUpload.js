import React, { useEffect, useState } from 'react'
import { auth,storage } from './config';
import {ref,uploadBytes ,listAll, getDownloadURL} from "firebase/storage"

import "./style.css"
const ImageUpload = () => {
  
   
    const [images, setImages] = useState([]);
     const [image, setImage] = useState(null);
  const [url, setUrl] = useState('');

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
    }
  };

  

const uploadImage=async()=>{
     if (image) {
      
      const user = auth.currentUser; // Get the current signed-in user
      if (user) {
        console.log(" before image data-")
        // Use the user's UID as the folder name
        const userStorageRef = await ref(storage,`users/${user.uid}/${image.name}`);
        console.log("After image data-")
        await uploadBytes(userStorageRef,image).then((snapshot) => {
          console.log('Image uploaded successfully');
           getDownloadURL(snapshot.ref).then((downloadUrl) => {
            setUrl(downloadUrl);
          });
        });
      }
    }else{
        console.log("Error found in Upload Images ")
    }

}


useEffect(()=>{
    const fetchImages = async () => {
        
        const user = auth.currentUser;
        if (user) {
          const imagesRef = ref(storage,`users/${user.uid}`);
           await listAll(imagesRef).then((res)=>{
             res.items.forEach((item)=>{
             getDownloadURL(item).then((url)=>{
                setImages((prev)=>[...prev ,url])
             })
             })
           })
        }
      };
  
    fetchImages();

//     // eslint-disable-next-line
},[])


  return (
    
    <div className='bg-purple-50' >
     
     <div className="place-content-center flex my-10" >
     
     <div className="mb-3">
  <label htmlFor="formFileMultiple" className="font-extrabold text-black text-center text-2xl ">Upload your images</label><br />
  <input className="py-5 my-5 px-5 bg-blue-600 text-white rounded-2xl " type="file" id="formFileMultiple" onChange={ handleImageChange} multiple/>
  <button className=' ml-10 px-4 py-3 bg-green-500 text-white rounded-xl '  onClick={uploadImage} >Upload Image</button>
  </div>

     </div>


     <div className="image ">
     <div className=" flex flex-wrap pl-24 ">

{/* {url && <img src={url} alt="Uploaded" style={{ maxWidth: '200px', marginTop: '20px' }} />} */}
{
      images.map((url,index)=>{
          return <div className='col-md-4' key={index} > <img className='my-2 mx-8 h-72' src={url} alt=" Please Wait  " /></div>
      })
  }

</div>
</div>

    </div>

  )
}

export default ImageUpload