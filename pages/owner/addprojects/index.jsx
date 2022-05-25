import React from 'react'
import style from './addProjects.module.css'
import NavBar from '../../../Components/navbar/NavBar'
import { useRef, useState } from 'react'
import Image from 'next/image'
import storage from '../../../Components/firebase/config'
import { ref, getDownloadURL, uploadBytesResumable, deleteObject } from "firebase/storage"



const AddProjects = () => {
  const [imgUrl, setImgUrl] = useState('/');
  const [loading, setLoading] = useState('no Image');
  const [loadingBtn, setLoadingBtn] = useState('Add Project');
  const [img,setImg] = useState('')

  const description = useRef()
  const title = useRef()
  const imageLink = useRef()

  const imageUploaded = (e) => {
    const name = `${e.target.files[0].name}${new Date()}`
    setImg(name)
    setLoading('loading...')
    const storageRef = ref(storage, `files/${name}`);
    const uploadTask = uploadBytesResumable(storageRef, e.target.files[0]);
    uploadTask.on("state_changed",
      (snapshot) => {
      },
      (error) => {
        alert(error);
        setLoading('error detected')
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setImgUrl(downloadURL)
          setLoading('')
        });
      }
    );
  }
  console.log(img);
  const deleteImageFormFirebase = () => {
    const desertRef = ref(storage, `files/${img}`);
    deleteObject(desertRef).then(() => {
      setImgUrl('')
      setLoading('no Image')
    }).catch((error) => {
      alert("error")
    });
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    setLoadingBtn("Adding...")
    const data = {
      title:title.current.value,
      link:imageLink.current.value,
      image:imgUrl,
      description:description.current.value
    }

    if(title.current.value === '' || imageLink.current.value === '' || description.current.value === '' || imgUrl === '/'){
      setLoadingBtn("Some data are missing...")
      setTimeout(()=>{
        setLoadingBtn("Add Project")
      },5000)
      return
    }
    fetch(`${process.env.NEXT_PUBLIC_BASE_URL}projects`,{
      method:"POST",
      headers: {
        'Content-Type': 'application/json'
        },
      body : JSON.stringify(data)
    }).then(res=>{
      setLoadingBtn("Added")
      console.log("responseres\n",res);
      
    }).catch(error=>{
      console.log("error\n"+ error);
      setLoadingBtn("Not Added")
    })
    setTimeout(()=>{
      setLoadingBtn("Add Project")
    },5000)
  }
  return (
    <div className={style.addProject}>
      <NavBar owner />
      <div style={{ "display": "grid", "gap": "10px" }}>
        <div className={style.container}>
          <div className={style.imageAndPreviewContainer}>
            <div className={style.imgUpload}>
              <input accept="image/*" onChange={imageUploaded} type="file" name="" id="" />
              <h5>Upload Image</h5>
            </div>
            <div className={style.imagePreview}>
              {
                loading==='' && 
                <div onClick={deleteImageFormFirebase} className={style.closeIcon}>
                <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 1L12.3137 12.3137" stroke="black" />
                  <path d="M12.1569 0.843262L0.843152 12.157" stroke="black" />
                </svg>
              </div>}
              <div className={style.imageContainer}>
                <h4>{loading}</h4>
                {
                  imgUrl.length > 3 &&
                  <Image src={imgUrl} objectFit="cover" alt="project image" layout='fill' />
                }
              </div>
            </div>
          </div>
          <div className={style.linkAndNameContainer}>
            <input ref={title} placeholder='name' type="text" />
            <input ref={imageLink} placeholder='link' type="text" />
          </div>
          <textarea ref={description} placeholder='description' className={style.description} name="" id="" cols="30" rows="10"></textarea>
        </div>
        <button onClick={handleSubmit}>{loadingBtn}</button>
      </div>
    </div>
  )
}

export default AddProjects