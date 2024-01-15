import '@/styles/post.css'
import '@/styles/colorscheme.css'
import { Coffee, MessagesSquare, MoreHorizontal } from 'lucide-react'
import { useEffect, useState } from 'react'
import {  } from '@radix-ui/react-dialog'
import DialogBox from './dialogbox'
import { Drawer, DrawerContent, DrawerDescription, DrawerHeader, DrawerTitle } from './ui/drawer'
import { ConfigProvider, Dropdown, MenuProps, theme } from 'antd'
import LikeButton from './likebutton'


interface Props {
    profile?:string
    author?:string
    content?:string
    likes?:number
    comments?:string
    liked?:boolean
    colorscheme:string
}

export default function Post(props:Props) {

    const [liked, setLiked] = useState(props.liked)
    const [likestate, setLikestate] = useState("#8a8a8a")
    const [draweropen, setDraweropen] = useState(false)
    const [dropdownopen, setDropdownopen] = useState(false)

    const setDropdown = () =>{
        if(!dropdownopen){
            setDropdownopen(true)
        }
        else{
            setDropdownopen(false)
        }
        
    }

    useEffect(()=>{
        if(liked == false){
            setLikestate("#6a6a6a")
        }
        if(liked == true){
            setLikestate("salmon")
        }
    },[liked])


    const onLike = () => {
        setLiked(!liked)
    }

    const setDrawer = () =>{
        if(!draweropen){
            setDraweropen(true)
        }
        else{
            setDraweropen(false)
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
        <div className="post">
            <div className="post-header">
                <div className="post-profile">
                    <img className='pfp' src={props.profile}/>
                    <h3>{props.author}</h3>
                </div>
                <div className="post-header-more">
                    <ConfigProvider theme={{algorithm: theme.darkAlgorithm}}>
                    <Dropdown menu={{items}} trigger={['click']}>
                    <button className='flex' onClick={setDropdown}>
                        <MoreHorizontal color='#8a8a8a' width="1.25rem"/>
                    </button>
                    </Dropdown>
                    </ConfigProvider>
                    
                    
                    
                     
                </div>
            </div>
            <div className='content-container'>
                <div id={props.colorscheme} className="post-content">
                    <p id={props.colorscheme} className='content'>{props.content}</p>
                </div>
            </div>
            
            <div className="post-footer">
                <div className='footer-controls'>

                    <LikeButton liked={props.liked} likecount={props.likes}/>

                    <div style={{display:"flex", alignItems:"center", gap:"0.25rem"}}>
                    <button onClick={setDrawer} className='footer-button'><MessagesSquare style={{marginTop:"0.2rem"}} width='1.25rem' color='#6a6a6a'/></button>
                    <p style={{fontSize:"0.9rem", fontWeight:"600", marginTop:"0.2rem"}}>{props.comments}1</p>
                    </div>
                    
                    
                </div>
            </div>
        </div>
        
        

        <DialogBox open={false}/>
        <Drawer open={draweropen}>
            <DrawerContent className="drawer">
                <DrawerHeader>
                    <DrawerTitle style={{textAlign:"center"}}>Comments</DrawerTitle>
                    <div style={{height:"45ch"}}></div>
                    <DrawerDescription>
                        
                    </DrawerDescription>
                </DrawerHeader>
            </DrawerContent>
        </Drawer>
        
        </>
    )
}