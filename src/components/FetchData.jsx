import React, { useEffect,useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';

const FetchData = ({cat}) => {
    const [Data, setData] = useState('');

    const fetchData=async()=>{
        await axios.get(
            cat? `https://newsapi.org/v2/top-headlines?country=in&category=${cat}&apiKey=a617f95ca6184d9b87c8058dfaca802e`:
            "https://newsapi.org/v2/top-headlines?country=in&apiKey=a617f95ca6184d9b87c8058dfaca802e").then((res)=>setData(res.data.articles));
    };

    useEffect(()=>{
        fetchData();
    },[cat]);

    return (
    <div className='container my-4' >
        
        <div className='container d-flex justify-content-center align-items-center flex-column my-2'style={{minHeight:'100vh'}}>
        <h3>
            <u>
            Top Headlines
            </u>
        </h3>
        {
            Data ? Data.map((item,index)=><>
            <div className='container my-4 p-3' style={{width:'600px',boxShadow:"2px 2px 10px silver",borderRadius:'10px'}}>
                <h5 className='my-2'>{item.title}</h5>
                
                <div className='container d-flex justify-content-center align-items-center flex-column my-2'>
                    <img src={item.urlToImage} alt='/' className='img-fluid ' style={{width:'100%',height:'300px',
                    objectFit:'cover'}}/>
                </div>
            
                <p className='my-1'>{item.content}</p>
                <Link to={item.url} target="blank">View More</Link>
            </div>
            </>)
        :'Loading'    
    }</div>
    </div>
  )
}

export default FetchData