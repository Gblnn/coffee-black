import { AlertDialog, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle } from "./ui/alert-dialog";
import { Button } from "./ui/button";

interface Props{
    open?:boolean
    title?:string
    desc?:string
    action?:string
    onConfirm?:any
    onCancel?:any
    destructive?:boolean
}

export default function AlertDialogBox(props:Props){
    return(
        <>
        <AlertDialog open={props.open}>
            <AlertDialogContent style={{background:"var(--card-color)", border:'1px solid rgba(120 120 120/ 50%)'}}>
                <AlertDialogHeader style={{color:"var(--color)"}}>
                    <AlertDialogTitle >{props.title}</AlertDialogTitle>
                    <AlertDialogDescription style={{textAlign:'center'}}>{props.desc}</AlertDialogDescription>
                </AlertDialogHeader>

                <AlertDialogFooter>
                    <Button style={{background:"rgba(120 120 120/ 15%)", color:"var(--color)"}} onClick={props.onCancel} className="alert-dialog-btn">Cancel</Button>
                    <Button onClick={props.onConfirm} className="alert-dialog-btn" style={{ background:props.destructive?"crimson":"orange", color:"var(--card-color)"}}>Confirm</Button>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
        </>
    )
}