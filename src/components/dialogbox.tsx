import { Button } from "antd";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "./ui/dialog";

interface Props {
    open:boolean
    title?:string
    desc?:string
    style?:any
    onCancel?:any
    onConfirm?:any
}

export default function DialogBox(props:Props){
    return(
        <>
        <Dialog open={props.open}>
            <DialogContent className="dialog" style={props.style}>
                <DialogHeader>
                <DialogTitle>{props.title}</DialogTitle>
                
                <DialogDescription style={{marginTop:"1rem"}}>{props.desc}</DialogDescription>
                </DialogHeader>
                <DialogFooter>
                    <div style={{border:"", width:"100%",display:"flex",gap:"1rem", justifyContent:"center"}}>
                    
                    <Button onClick={props.onCancel} type="primary">Cancel</Button>
                    <Button type="primary">Confirm</Button>
                    </div>
                    
                </DialogFooter>
            </DialogContent>
        </Dialog>
        </>
    )
}