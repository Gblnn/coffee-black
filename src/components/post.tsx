
import LikeButton from './buttons/likebutton'
import MoreButton from './buttons/morebutton'
import DialogBox from './dialogbox'
import CommentButton from './buttons/commentbutton'


interface Props {
    id:number
    profile?:string
    author?:string
    content?:string
    likes:number
    comments:string
    liked:boolean
    colorscheme:string
}

export default function Post(props:Props) {

    

    return(
        <>
        <div className="post">
            <div className="post-header">
                <div className="post-profile">
                    <img className='pfp' src={props.profile}/>
                    <h3>{props.author}</h3>
                </div>
                <div className="post-header-more">
                    <MoreButton/>
                </div>
            </div>
            <div className='content-container'>
                <div id={props.colorscheme} className="post-content">
                    <p id={props.colorscheme} className='content'>{props.content}</p>
                </div>
            </div>
            
            <div className="post-footer">
                <div className='footer-controls'>

                    <LikeButton id={props.id} liked={props.liked} likecount={props.likes}/>
                    <CommentButton comments={props.comments}/>
                    
                </div>
                
            </div>
            <div style={{width:"100%"}}>
                <div className='bio' style={{height:"fit-content", margin:"0.75rem", marginTop:"0.2rem", borderRadius:"0.5rem", display:"flex", alignItems:"center", paddingLeft:"0.25rem",paddingRight:"0.25rem"}}>
                    <div style={{display:"flex", margin:"0.5rem"}}>
                    <p style={{fontSize:"0.8rem"}}><strong>{props.author}</strong> Write something elaborate here, just to occupy space and so that its easier to inspect text overflow behavior</p>
                    </div>
                    
                </div>
            </div>
            
        </div>
        
        

        <DialogBox open={false}/>
        
        
        </>
    )
}