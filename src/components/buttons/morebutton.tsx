import { ConfigProvider, Dropdown, MenuProps, theme } from "antd";
import { MoreHorizontal } from "lucide-react";
import { useState } from "react";
import DialogBox from "../dialogbox";

export default function MoreButton(){

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

    const handleEdit = () => {
      setDialog(true)
      setDialogtitle("Edit Post?")
      setdialogdesc("Confirm edit post?")
    }

    const handleDelete = () => {
      setDialogtitle("Delete Post?")
      setdialogdesc("This action can not be undone")
      setDialog(true)
    }

    // const handleConfirm = () => {

    // }

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
        <DialogBox open={dialog} title={dialogtitle} desc={dialogdesc} onCancel={handleCancel}/>
        </>
    )
}