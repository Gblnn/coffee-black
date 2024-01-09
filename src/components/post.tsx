import '@/styles/post.css'
import '@/styles/colorscheme.css'
import { Coffee, MessagesSquare } from 'lucide-react'
import { useEffect, useState } from 'react'
import {  } from '@radix-ui/react-dialog'
import DialogBox from './dialogbox'


interface Props {
    profile?:string
    author?:string
    content?:string
    likes?:string
    comments?:string
    liked?:boolean
    colorscheme:string
}

export default function Post(props:Props) {

    const [liked, setLiked] = useState(props.liked)
    const [likestate, setLikestate] = useState("#8a8a8a")

    useEffect(()=>{
        if(liked == false){
            setLikestate("#6a6a6a")
        }
        if(liked == true){
            setLikestate("salmon")
        }
    },[liked])


    const onLike = () => {
        setLiked(!liked)
    }

    return(
        <>
        <div className="post">
            <div className="post-header">
                <div className="post-profile">
                    <img className='pfp' src={props.profile}/>
                    <h3>{props.author}</h3>
                </div>
                <div className="post-header-more">
                    
                    {/* <DropdownMenu>
                        <DropdownMenuTrigger>
                            <button className='flex'>
                                <MoreVertical color='#8a8a8a' width="1.25rem"/>
                            </button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className='dropdown'>
                            <DropdownMenuItem onClick={onEdit}>Edit Post</DropdownMenuItem>
                            <DropdownMenuItem onClick={onDelete}>Delete Post</DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu> */}
                </div>
            </div>
            <div className='content-container'>
                <div id={props.colorscheme} className="post-content">
                    <p id={props.colorscheme} className='content'>{props.content}</p>
                </div>
            </div>
            
            <div className="post-footer">
                <div className='footer-controls'>
                    <div style={{display:"flex", alignItems:"center", gap:"0.25rem"}}>
                    <button onClick={onLike} className='footer-button'><Coffee width='1.4rem' color={likestate}/></button>
                    <p style={{fontSize:"0.9rem", fontWeight:"600", marginTop:"0.2rem"}}>{props.likes}</p>
                    </div>

                    <div style={{display:"flex", alignItems:"center", gap:"0.25rem"}}>
                    <button className='footer-button'><MessagesSquare  width='1.25rem' color='#6a6a6a'/></button>
                    <p style={{fontSize:"0.9rem", fontWeight:"600", marginTop:"0.2rem"}}>{props.comments}1</p>
                    </div>
                    
                    
                </div>
            </div>
        </div>

        <DialogBox open={false}/>
        
        </>
    )
}