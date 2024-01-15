import MoreButton from "./buttons/morebutton"

interface Props{
    id:number
    author:string
    comment:string
    date:string
}

export default function Comment(props:Props){

    return(
        <>
        <div style={{border:"", alignItems:"center", background:"rgba(100 100 100/ 10%)", padding:"0.5rem", paddingRight:"1.25rem",paddingLeft:"1rem", borderRadius:"0.5rem"}}>

            <div style={{display:"flex",justifyContent:"space-between", background:""}}>
                <div style={{display:"flex", alignItems:"center", gap:"0.25rem"}}>
                <p style={{textTransform:"uppercase", fontSize:"0.8rem", fontWeight:400}}><strong>{props.author}</strong></p>
                <p style={{fontSize:"0.65rem"}}>{props.date}</p>
                </div>
                <MoreButton id={props.id}/>
            </div>

            <p>{props.comment}</p>
            
        </div>
        </>
    )
}