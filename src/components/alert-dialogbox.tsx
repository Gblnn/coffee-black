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
    actionbutton?:any
    actionicon?:any
}

export default function AlertDialogBox(props:Props){
    return(
        <>
        <AlertDialog open={props.open}>
            <AlertDialogContent style={{background:"var(--card-color)", border:'none'}}>
                <AlertDialogHeader style={{color:"var(--color)"}}>
                    <AlertDialogTitle >{props.title}</AlertDialogTitle>
                    <AlertDialogDescription style={{textAlign:'center'}}>{props.desc}</AlertDialogDescription>
                </AlertDialogHeader>

                <AlertDialogFooter>
                    <Button style={{background:"rgba(120 120 120/ 15%)", color:"var(--color)"}} onClick={props.onCancel} className="alert-dialog-btn">Cancel</Button>
                    <Button onClick={props.onConfirm} className="alert-dialog-btn" style={{ background:props.destructive?"rgba(120 120 120/ 15%)":"var(--color)", color:props.destructive?"#e11d48":"var(--card-color)"}}>{props.actionicon?props.actionicon:null}{props.actionbutton?props.actionbutton:"Confirm"}</Button>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
        </>
    )
}