import { Bookmark } from "lucide-react";
import { useEffect, useState } from "react";


export default function SaveButton(){
    const [saved, setSaved] = useState(false)
    const [savestate, setSavestate] = useState("rgba(0 0 0/ 0%)")

    useEffect(()=>{
        if(saved == false){
            setSavestate("rgba(0 0 0/ 0%)")
        }
        if(saved == true){
            setSavestate("#6a6a6a")
        }
    },[saved])

    const onSave = () =>{
        if (savestate==="rgba(0 0 0/ 0%)"){
        setSaved(true)
        }
        else{
            setSaved(false)
        }
    }
    return(
        <>
        <button onClick={onSave} style={{marginTop:"0.25rem"}} className="hoverable">
            <Bookmark width="1.4rem" fill={savestate} color='#8a8a8a'/>
        </button>
        </>
    )
}