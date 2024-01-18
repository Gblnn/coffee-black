
import { useEffect, useState } from 'react'
import CommentButton from './buttons/commentbutton'
import LikeButton from './buttons/likebutton'
import MoreButton from './buttons/morebutton'
import SaveButton from './buttons/savebutton'

import ReactTimeAgo from 'react-time-ago'


interface Props {
    id:number
    profile?:string
    author?:string
    content?:string
    likes:number
    comments:string
    liked:boolean
    colorscheme:string
    bio?:string
    date:Date
    activeuser?:boolean
    verified?:boolean
}

export default function Post(props:Props) {

    const [posts, setPosts] = useState("")
    const [showMore, setShowMore] = useState(false);
    // const [ellipsis, setEllipsis] = useState(true);
    // let rows = 1

    useEffect(()=>{
        fetch("https://658c3fd2859b3491d3f5c978.mockapi.io/comments?postid="+props.id)
            .then(res => res.json())
            .then(data => {
              setPosts(data)
            })
      },[props.id])

    return(
        <>
        <div className="post">
            <div className="post-header">
                <div className="post-profile">
                    <img className='pfp' src={props.profile}/>
                    <h3>{props.author}</h3>
                    {props.author=="coffee"?
                    <img style={{width:"1.25rem", color:"salmon"}} src='/verified.png'></img>:null
                    }
                    
                    <p>•</p>
                    <ReactTimeAgo style={{fontSize:"0.8rem", fontWeight:400}} date={props.date} locale='en' timeStyle="twitter"/>
                </div>
                
                <div className="post-header-more">
                    {
                        props.activeuser?
                        <MoreButton id={props.id}/>
                        :null
                    }
                    
                </div>
            </div>
            <div className='content-container'>
                <div id={props.colorscheme} className="post-content">
                    <p id={props.colorscheme} className='content'>{props.content}</p>
                </div>
            </div>
            
            <div className="post-footer" style={{justifyContent:"space-between"}}>
                <div className='footer-controls'>

                    <LikeButton id={props.id} liked={props.liked} likecount={props.likes}/>
                    <CommentButton postid={props.id} comments={String(posts.length)=="9"?"0":String(posts.length)}/>
                    
                </div>

                <div style={{marginRight:"1rem"}}>
                <SaveButton/>
                </div>

                
                
            </div>
            { props.bio==""||props.bio==null ? null :
                <div style={{border:"",width:"100%"}}>
                <div className='bio' style={{height:"fit-content", margin:"0.75rem", marginTop:"0rem",marginBottom:"0.75rem", borderRadius:"0.5rem", display:"flex", alignItems:"center", paddingLeft:"0.25rem",paddingRight:"0.25rem"}}>
                    <div style={{display:"flex", margin:"0.5rem"}}>

                    
                    <p style={{fontSize:"0.85rem"}}><strong>{props.author}</strong>{showMore? props.bio : props.bio.substring(0, 75)}
                    {
                    props.bio.length>75?<a className='more' style={{fontSize:"0.8rem",fontWeight:500, marginLeft:"0.35rem",paddingLeft:"0.5rem",paddingRight:"0.5rem", cursor:"pointer"}} onClick={()=>setShowMore(!showMore)}>{showMore?"Less":"More"}</a>:null
                    }
                    </p>
                    
                    </div>
                    
                </div>
            </div>
            }
            
            
        </div>
        
        

        
        
        
        </>
    )
}