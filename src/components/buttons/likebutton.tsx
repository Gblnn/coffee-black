
import { CoffeeIcon } from "lucide-react";
import { useEffect, useState } from "react";


interface Props {
    likecount:number
    liked:boolean
    id?:number
}



export default function LikeButton(props:Props){
    const [likestate, setLikestate] = useState("#6a6a6a")
    const [liked, setLiked] = useState(props.liked)
    
    useEffect(()=>{
        if(liked == false){
            setLikestate("#8a8a8a")
        }
        if(liked == true){
            setLikestate("salmon")
        }
    },[liked])

    const onLike = () =>{
        if (likestate==="#8a8a8a"){
        setLiked(true)
         
            fetch('https://6586a271468ef171392e80df.mockapi.io/posts/'+props.id, {
            method: 'PUT',
            headers: {'content-type':'application/json'},
            body: JSON.stringify({liked: true, likes:1})
            })
          
        }
        else{
        setLiked(false)
          
          fetch('https://6586a271468ef171392e80df.mockapi.io/posts/'+props.id, {
            method: 'PUT',
            headers: {'content-type':'application/json'},
            body: JSON.stringify({liked: false, likes:""})
            })
        }
      }

      
    
    return(
        <>
        <div style={{display:"flex", alignItems:"center", gap:"0.25rem"}} >
            <button onClick={onLike} className='footer-button hoverable'><CoffeeIcon width='1.4rem' color={likestate} /></button>
            {/* <p style={{fontSize:"0.85rem", fontWeight:"600", marginTop:"0.2rem"}}>{props.likecount}</p> */}
        </div>
        </>
    )
}