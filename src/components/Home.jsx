import React from 'react'
import "../App.css";
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className='background-image'>
        <div className='content'>
            <h1 className='text-[6vh] font-bold font-serif mb-[1vh]'>Unlimited Movies, in your fav genres</h1>
            <h3  className='text-[4vh] font-serif mb-[1vh]'>Huzzle-free, zero payments</h3>
            <Link to='/trending'><button className='mt-[2vh] px-5 py-2 text-[2.5vh] bg-red-600 text-center hover:rounded-full'>Watch Movies</button></Link>
        </div>
    </div>
  )
}

export default Home