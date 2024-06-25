"use client"
import { useParams, useRouter } from 'next/navigation'
import React from 'react'

const Navbar = () => {
  const params : {blog : string} = useParams();
  const router = useRouter();

  const onClickHandler = () => {
    router.back();
  }


  return (
    <nav id='navbar' className={params?.blog ? 'spaceBetween' : ""} >
        {params.blog ? <button id="goHomeButton" onClick={onClickHandler}>Go Home</button> : ""}
        {params.blog ? <span>{params.blog?.split("-")?.join(" ")}</span> : <span>Blogs</span>}
    </nav>
  )
}

export default Navbar