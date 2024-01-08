import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "./ui/dialog";

interface Props {
    open:boolean
    title?:string
    desc?:string
    style?:any
}

export default function DialogBox(props:Props){
    return(
        <>
        <Dialog open={props.open}>
            <DialogContent className="dialog" style={props.style}>
                <DialogHeader>
                <DialogTitle>Are you sure absolutely sure?</DialogTitle>
                
                <DialogDescription style={{paddingTop:"1rem"}}>
                    This action cannot be undone. This will permanently delete your account
                    and remove your data from our servers.
                </DialogDescription>
                </DialogHeader>
                <div></div>
            </DialogContent>
        </Dialog>
        </>
    )
}