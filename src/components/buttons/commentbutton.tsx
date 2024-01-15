import { Button, ConfigProvider, Input, message, theme } from "antd"
import { MessagesSquare } from "lucide-react"
import { useEffect, useState } from "react"
import Comment from "../comment"
import { Drawer, DrawerContent, DrawerDescription, DrawerHeader, DrawerTitle } from "../ui/drawer"


interface Props {
    postid:number
    comments:string
}

export default function CommentButton(props:Props){

    const [comment, setComment] = useState("")
    const [user, setUser] = useState(window.name)
    const postid = props.postid
    const date = new Date().toLocaleDateString()
    const [posts, setPosts] = useState<any[]>([])
    const [loading, setLoading] = useState(false)
    const [draweropen, setDraweropen] = useState(false)
    const [postable, setPostable] = useState(false)

    //Validation
    useEffect(()=>{
        if(comment==""){
            setPostable(false)
        }
        else{
            setPostable(true)
        }
    },[comment])

    const setDrawer = () =>{
        if(!draweropen){
            setDraweropen(true)
            fetch("https://658c3fd2859b3491d3f5c978.mockapi.io/comments?postid="+postid)
            .then(res => res.json())
            .then(data => {
            setPosts(data)
            console.log(data)
      })
        }
        else{
            setDraweropen(false)
        }

    }
        const Reload = () =>{
            message.loading("Posting")
            setLoading(true)
            setTimeout(()=>{
              setLoading(false)
              window.location.reload()
            },1000)
            
          }
    
          
    
        const onPost = () => {
        if(user==""){
            setUser("user")
        }
          const obj = {postid, user, comment, date}
          
          
          fetch("https://658c3fd2859b3491d3f5c978.mockapi.io/comments",
          {
                method:"POST",
                headers:{'content-type':'application/json'},
                body:JSON.stringify(obj)
          }
          )
        
            Reload()
        }
        
    
    return(
        <>
        <div style={{display:"flex", alignItems:"center", gap:"0.25rem"}}>
            <button onClick={setDrawer} className='footer-button'><MessagesSquare style={{marginTop:"0.2rem"}} width='1.25rem' color='#6a6a6a'/></button>
            <p style={{fontSize:"0.9rem", fontWeight:"600", marginTop:"0.2rem"}}>{props.comments}</p>
        </div>

        <Drawer open={draweropen}>
            <DrawerContent className="drawer">
                <DrawerHeader>
                    <DrawerTitle style={{textAlign:"center"}}>Comments</DrawerTitle>
                    <DrawerDescription>Welcome to the comment section</DrawerDescription>
                </DrawerHeader>
                <div style={{height:"65svh", border:"", width:"100%", display:"flex", flexFlow:"column",justifyContent:"flex-end", padding:"1.5rem", gap:"1rem"}}>
                {
                  
                  String(posts.length)=="9"?null:
                  posts.map((post)=>(
                    <Comment date={post.date} id={post.id} key={post.id} author={post.user} comment={post.comment}/>
                  ))
                 
                }
                </div>

                <div style={{display:"flex",gap:"1rem", width:"100%",alignItems:"center", justifyContent:"center", padding:"1rem", boxShadow:"1px 1px 10px rgba(0 0 0 / 50%)"}}>
                {/* <ConfigProvider theme={{algorithm: theme.darkAlgorithm}}> */}
                    <Input className="comment-input" onChange={e=>setComment(e.target.value)} placeholder="Add comment" bordered={false} style={{opacity:1,color:"var(--color)",fontFamily:"Clash Grotesk",fontSize:"16px", width:"95%"}}></Input>
                    <Button style={{color:"var(--color)"}} disabled={!postable} onClick={onPost} type="primary" loading={loading}>Post</Button>
                {/* </ConfigProvider> */}
                
                </div>
                
                
                
            </DrawerContent>
        </Drawer>
        </>
    )
}