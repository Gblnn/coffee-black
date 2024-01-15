import { ConfigProvider, Dropdown, MenuProps, theme } from "antd";
import { MoreHorizontal } from "lucide-react";
import { useState } from "react";

export default function MoreButton(){

    const [dropdownopen, setDropdownopen] = useState(false)

    const setDropdown = () =>{
        if(!dropdownopen){
            setDropdownopen(true)
        }
        else{
            setDropdownopen(false)
        }
        
    }

    const items: MenuProps['items'] = [
        {
          key: '1',
          label: (
            <a>
              Edit Post
            </a>
          ),
        },
        {
          key: '2',
          label: (
            <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
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
        </>
    )
}