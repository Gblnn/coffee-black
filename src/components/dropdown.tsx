import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator } from "./ui/dropdown-menu";


interface Props {
    title:string
    item1:string
    item2:string
}

export default function Dropdown(props:Props){
    return(
        <>
        <DropdownMenu>
            <DropdownMenuContent>
                <DropdownMenuLabel>{props.title}</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>{props.item1}</DropdownMenuItem>
                <DropdownMenuItem>{props.item2}</DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>

        </>
    )
}