import Post from "@/components/post"
import { useEffect, useState } from "react"
import {LoadingOutlined} from '@ant-design/icons'


export default function Brews(){
    const [posts, setPosts] = useState<any[]>([])

    useEffect(()=>{
        fetch("https://6586a271468ef171392e80df.mockapi.io/posts?liked=true")
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
                        <Post key={posts.id} author={posts.author} profile={posts.profile} likes={posts.likes} comments={posts.comments} liked={posts.liked} content={posts.content} colorscheme={posts.colorscheme}/>
                    ))
                }
                
            </div>
            <LoadingOutlined style={{fontSize:"2rem"}}/>
            <div style={{height:"8rem"}}></div>

        </div>
        </>
    )
}