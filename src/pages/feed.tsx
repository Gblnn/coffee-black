import Post from "@/components/post";
import '@/styles/style.css'
import { useEffect, useState } from "react";
import {LoadingOutlined} from '@ant-design/icons'

export default function Feed(){
    const [posts, setPosts] = useState<any[]>([])

    useEffect(()=>{
        fetch("https://6586a271468ef171392e80df.mockapi.io/posts")
            .then(res => res.json())
            .then(data => {
                setPosts(data)
            })
    },[])
    return(
        <>

        <div className="container">
            <div className="feed-container">
                {
                    posts.map((posts)=>(
                        <Post id={posts.id} key={posts.id} author={posts.author} profile={posts.profile} likes={posts.likes} comments={posts.comments} liked={posts.liked} content={posts.content} colorscheme={posts.colorscheme}/>
                    ))
                }
                
            </div>
            {/* <LoadingOutlined style={{fontSize:"2rem"}}/> */}
            <LoadingOutlined style={{fontSize:"2rem", zIndex:"-1"}}/>
            <div style={{height:"8rem"}}></div>

        </div>
        </>
    )
}