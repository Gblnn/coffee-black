import '@/app/globals.css';
import Navbar from "@/components/navbar";
import '@/styles/navbar.css';
import '@/styles/style.css';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Brews from './brews';
import Feed from './feed';
import Posts from './posts';
import Saved from './saved';
import { useEffect } from 'react';

export default function Home(){

    const usenavigate = useNavigate()

  useEffect(()=>{
    if(window.name == ""){
      usenavigate("/login")
    }
  },[window.name])
  
    return(
        <>
            <Navbar/>
            <Routes>
                <Route path='feed' element={<Feed/>}/>
                <Route path='brews' element={<Brews/>}/>
                <Route path='posts' element={<Posts/>}/>
                <Route path='saved' element={<Saved/>}/>
            </Routes>
        </>
    )
}