import '@/app/globals.css'
import '@/styles/style.css'
import '@/styles/navbar.css'
import Navbar from "@/components/navbar";
import { Route, Routes } from 'react-router-dom';
import Feed from './feed';
import Brews from './brews';
import Posts from './posts';
import Saved from './saved';

export default function Home(){
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