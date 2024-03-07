
import React, { useEffect, useState } from "react";
import {FaHeart,FaRegHeart} from 'react-icons/fa'


const Movies = ({item,id}) => {
    const [like ,setLike]=useState(false);
  return (
    <>
    <div className="w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-2 transition-all duration-450 ease-in-out transform hover:scale-105">
    <img key={id} src={`https://image.tmdb.org/t/p/original/${item?.backdrop_path}`} alt={item.title} />
    <div className="absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100  text-white flex justify-center items-center">
        <p className="white-space-normal text-xs font-bold flex justify-center items-center h-full">{item?.title}</p>
        <p>{like ? <FaHeart className="absolute top-4 left-4"/> : <FaRegHeart className="absolute top-4 left-4"/>}</p>
        <button className="sm:hidden lg:block lg:absolute lg:bottom-7 lg:border-none lg:text-white lg:bg-red-600 lg:h-8 lg:w-[40%] rounded-lg">play</button>
    </div>
    </div>
    </>
  )
}

export default Movies