import { ConfigProvider, Dropdown, MenuProps, message, theme } from "antd";
import { MoreHorizontal } from "lucide-react";
import { useState } from "react";
import AlertDialogBox from "../alert-dialogbox";

interface Props{
  id:number
}

export default function MoreButton(props:Props){

    const [dropdownopen, setDropdownopen] = useState(false)
    const [dialog, setDialog] = useState(false)
    const [dialogtitle, setDialogtitle] = useState("")
    const [dialogdesc, setdialogdesc] = useState("")
    const [action, setAction] = useState("")
    const [actionbutton, setActionbutton] = useState("")


    const setDropdown = () =>{
        if(!dropdownopen){
            setDropdownopen(true)
        }
        else{
            setDropdownopen(false)
        }
        
    }

 

    const Reload = () =>{
      setTimeout(()=>{
          window.location.reload()
      },2000)
      
    }

    const handleEdit = () => {
      setDialog(true)
      setDialogtitle("Edit Post?")
      setdialogdesc("Confirm edit post?")
      setAction("edit")
      setActionbutton("Edit")
    }

    const handleDelete = () => {
      setDialogtitle("Delete Post?")
      setdialogdesc("This action can not be undone")
      setDialog(true)
      setAction("delete")
      setActionbutton("Delete")
    }

    const execEdit = () => {
      setDialog(false)
    }

    const execDelete = () => {
      message.loading("Deleting")
      fetch('https://6586a271468ef171392e80df.mockapi.io/posts/'+props.id, {
        method: 'DELETE',
      })
      setDialog(false)
      // fetch("https://658c3fd2859b3491d3f5c978.mockapi.io/comments?postid="+props.id, {
      //   method: 'DELETE',
      // })
  
        Reload()
    }

    const handleConfirm = () => {
      if(action=="edit"){
        execEdit()
      }
      if(action=="delete"){
        execDelete()
      }
    }

    const handleCancel = () => {
      setDialog(false)
    }

    const items: MenuProps['items'] = [
        {
          key: '1',
          label: (
            <a onClick={handleEdit}>
              Edit Post
            </a>
          ),
        },
        {
          key: '2',
          label: (
            <a onClick={handleDelete}>
              Delete Post
            </a>
          ),
        },
        
    ];


    

    return(
        <>
        <ConfigProvider theme={{algorithm: theme.darkAlgorithm}}>

    
          <Dropdown menu={{items}} trigger={['click']}>
          <button className='flex' onClick={setDropdown}>
            <MoreHorizontal color='#8a8a8a' width="1.25rem"/>
          </button>
        </Dropdown>
        
            

            

            
        </ConfigProvider>
        {/* <DialogBox open={dialog} title={dialogtitle} desc={dialogdesc} onCancel={handleCancel} onConfirm={handleConfirm} action={action}/> */}
        <AlertDialogBox open={dialog} title={dialogtitle} desc={dialogdesc} onCancel={handleCancel} onConfirm={handleConfirm} action={action} actionbutton={actionbutton} />
        </>
    )
}