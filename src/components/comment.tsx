
interface Props{
    id:string
    author:string
    comment:string
    date:string
}

export default function Comment(props:Props){

    return(
        <>
        <div style={{border:"", alignItems:"center", background:"#1a1a1a", padding:"0.5rem", paddingRight:"1rem", borderRadius:"0.5rem"}}>

            

            <div style={{display:"flex",justifyContent:"space-between", background:""}}>
            <p style={{textTransform:"uppercase", fontSize:"0.8rem", fontWeight:400}}><strong>{props.author}</strong></p>
            <p style={{fontSize:"0.75rem"}}>{props.date}</p>
            
            
            </div>
            <p>{props.comment}</p>
            
        </div>
        </>
    )
}