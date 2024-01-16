import { Button, ConfigProvider, Form, Input, message } from "antd"
import { MessagesSquare } from "lucide-react"
import { useEffect, useState } from "react"
import Comment from "../comment"
import { Drawer, DrawerContent, DrawerDescription, DrawerHeader, DrawerTitle } from "../ui/drawer"
import { ScrollArea } from "../ui/scroll-area"


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
            <button onClick={setDrawer} className='footer-button hoverable'><MessagesSquare style={{marginTop:"0.2rem"}} width='1.25rem' color='#6a6a6a'/></button>
            <p style={{fontSize:"0.9rem", fontWeight:"600", marginTop:"0.2rem"}}>{props.comments}</p>
        </div>

        <Drawer open={draweropen}>
            <DrawerContent className="drawer">
                <DrawerHeader>
                    <DrawerTitle style={{textAlign:"center"}}>Comments</DrawerTitle>
                    <DrawerDescription></DrawerDescription>
                </DrawerHeader>
                <div style={{height:"65svh", border:"", width:"100%", display:"flex", flexFlow:"column-reverse",justifyContent:"flex-end", padding:"1rem", gap:"1rem"}}>
                    <ScrollArea style={{}}>
                    {
                  
                  String(posts.length)=="9"?null:
                  
                  posts.map((post)=>(
                    <Comment date={post.date} id={post.id} key={post.id} author={post.user} comment={post.comment}/>
                  ))
                 
                }
                    </ScrollArea>
                
                </div>

                <div style={{display:"flex",gap:"1rem", width:"100%",alignItems:"center", justifyContent:"center", padding:"1rem", boxShadow:"1px 1px 20px rgba(0 0 0 / 20%)"}}>
                {/* <ConfigProvider theme={{algorithm: theme.darkAlgorithm}}> */}
                <Form style={{width:"100%"}}>
                

                <div style={{display:"flex"}}>
                    <Input className="comment-input" onChange={e=>setComment(e.target.value)} placeholder="Add comment" bordered={false} style={{opacity:1,color:"var(--color)",fontFamily:"Clash Grotesk",fontSize:"16px", width:"95%"}}></Input>

                    <ConfigProvider theme={{token:{ colorBorder:"none", colorBgContainerDisabled:"rgba(100 100 100 / 10%)", colorTextDisabled:"#6a6a6a"}}}>
                        <Button htmlType="submit" type="primary" style={{}} disabled={!postable} onClick={onPost} loading={loading}>Comment</Button>
                    </ConfigProvider>
                </div>
                
                </Form>
                    

                    
                    
                {/* </ConfigProvider> */}
                
                </div>
                
                
                
            </DrawerContent>
        </Drawer>
        </>
    )
}