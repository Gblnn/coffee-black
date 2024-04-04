import Post from "@/components/post";
import { LoadingOutlined } from '@ant-design/icons';
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Feed(){

    
    const user_data = window.name

    const [posts, setPosts] = useState<any[]>([])
    const [loaded, setloaded] = useState(false)

    useEffect(()=>{
        fetchPosts()
    },[])

    const fetchPosts = async () => {
        await fetch("https://6586a271468ef171392e80df.mockapi.io/posts")
            .then(res => res.json())
            .then(data => {
                setPosts(data)
            })
            setloaded(true)
    }

    return(
        <>
        {!loaded?
        <div style={{width:"100%", height:"100svh", display:"flex", justifyContent:"center", alignItems:"center"}}>
            <LoadingOutlined style={{fontSize:"2rem", zIndex:"-1", position:"absolute", }}/>
        </div>
        :null}
        <div className="container" style={{display:"flex", alignItems:'center', justifyContent:"center"}}>

        

        {loaded?
        <div className="feed-container">
        {
            posts.map((posts)=>(
                
                <motion.div key={posts.id} style={{width:"100%", border:"", display:"flex", alignItems:"center", justifyContent:"center"}} initial={{opacity:0}} whileInView={{opacity:1}}>
                    <Post id={posts.id} key={posts.id} author={posts.author} profile={posts.profile} likes={posts.likes} comments={posts.comments} liked={posts.liked} content={posts.content} colorscheme={posts.colorscheme} bio={posts.bio} activeuser={user_data==posts.author} date={posts.date}/>
                </motion.div>
            
                
                
            ))
        }
        
    </div>
    :null
        }
            
            
            
            <div style={{height:"6rem"}}></div>

        </div>
        </>
    )
}