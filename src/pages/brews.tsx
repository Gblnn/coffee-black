import Post from "@/components/post"
import { useEffect, useState } from "react"


export default function Brews(){
    const [posts, setPosts] = useState<any[]>([])

    useEffect(()=>{
        fetch("https://6586a271468ef171392e80df.mockapi.io/posts?liked=true")
        .then(res => res.json())
        .then(data => {
            setPosts(data)
            console.log(data.length)
           
        })
    },[])
    return(
        <>
        <div className="container">
            <div className="feed-container">
                {
                    posts.length==9?<div style={{display:"flex",justifyContent:"center", alignItems:"center",border:"", width:"100%", height:"75svh"}}><h3 style={{border:""}}>No Brews.</h3></div>:
                    posts.map((posts)=>(
                        <Post id={posts.id} key={posts.id} author={posts.author} profile={posts.profile} likes={posts.likes} comments={posts.comments} liked={posts.liked} content={posts.content} colorscheme={posts.colorscheme} bio={posts.bio} date={posts.date}/>
                    ))
                }
                
            </div>
            {/* <LoadingOutlined style={{fontSize:"2rem", zIndex:"-1"}}/> */}
            <div style={{height:"8rem"}}></div>

        </div>
        </>
    )
}