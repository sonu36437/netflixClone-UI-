import axios from "axios";
import React, { useEffect, useState } from "react";
import {MdChevronLeft,MdChevronRight} from 'react-icons/md'
import Movies from "./Movies";

const Row = ({ title, fetchURL }) => {
    const [movies, setMovies] = useState([]);
    // const [like ,setLike]=useState(false);

    useEffect(() => {
        axios.get(fetchURL).then((res) => {
            setMovies(res.data.results);
        });
    }, [fetchURL]);
    const slideLeft=(left)=>{
        console.log(left);
      
        let slider=document.getElementById('slider')
        slider.scrollLeft-=500;
    }
    const slideRight=()=>{
        let slider=document.getElementById('slider')
        slider.scrollLeft+=500;
    }
  


    return (
        <>
            <h2 className="text-white font-bold md:text-xl p-4">{title}</h2>    
            <div className="relative flex items-center justify-center group">
            <MdChevronLeft className="bg-white rounded-full opacity-50 hidden group-hover:block" size={40} onClick={()=>{slideLeft(this)}}/>
          
                <div id={'slider'} className="w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide">
                
                    {movies.map((item,index) => (
                      <Movies item={item} key={index}/>
                    ))}
                </div>
                <MdChevronRight className="bg-white rounded-full opacity-50 hidden group-hover:block" size={40} onClick={slideRight}/>

            </div>
        </>
    );
};

export default Row;
