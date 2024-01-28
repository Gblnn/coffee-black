import { ConfigProvider, Dropdown, MenuProps, theme } from "antd";
import { MoreHorizontal } from "lucide-react";
import { useState } from "react";
import AlertDialogBox from "../alert-dialogbox";

// interface Props{
//   id:number
// }

export default function OtherMoreButton(){

    const [dropdownopen, setDropdownopen] = useState(false)
    const [dialog, setDialog] = useState(false)
    const [dialogtitle, setDialogtitle] = useState("")
    const [dialogdesc, setdialogdesc] = useState("")


    const setDropdown = () =>{
        if(!dropdownopen){
            setDropdownopen(true)
        }
        else{
            setDropdownopen(false)
        }
        
    }

 

    // const Reload = () =>{
    //   setTimeout(()=>{
    //       window.location.reload()
    //   },2000)
      
    // }

    // const handleEdit = () => {
    //   setDialog(true)
    //   setDialogtitle("Edit Post?")
    //   setdialogdesc("Confirm edit post?")
    //   setAction("edit")
    // }

    // const handleDelete = () => {
    //   setDialogtitle("Delete Post?")
    //   setdialogdesc("This action can not be undone")
    //   setDialog(true)
    //   setAction("delete")
    // }

    const handleReport = () => {
      setDialogtitle("Report Post?")
      setdialogdesc("Report selected Post?")
      setDialog(true)
    }

    // const execEdit = () => {

    // }

    // const execDelete = () => {
    //   message.loading("Deleting")
    //   fetch('https://6586a271468ef171392e80df.mockapi.io/posts/'+props.id, {
    //     method: 'DELETE',
    //   })
    //   setDialog(false)
    //   // fetch("https://658c3fd2859b3491d3f5c978.mockapi.io/comments?postid="+props.id, {
    //   //   method: 'DELETE',
    //   // })
  
    //     Reload()
    // }

    // const handleConfirm = () => {
    //   if(action=="edit"){
    //     execEdit
    //   }
    //   if(action=="delete"){
    //     execDelete()
    //   }
    // }

    const handleCancel = () => {
      setDialog(false)
    }

    const items: MenuProps['items'] = [
        {
          key: '1',
          label: (
            <a>
              View Profile
            </a>
          ),
        },
        {
          key: '2',
          label: (
            <a style={{color:"tomato"}} onClick={handleReport}>
              Report User
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
        <AlertDialogBox open={dialog} title={dialogtitle} desc={dialogdesc} onCancel={handleCancel} destructive={true}/>
        
        </>
    )
}