import React,{useState} from 'react';

import { Images } from '../../Lib/Styles/theme';

import { MainPage as UserMainPage  } from '../MainPage/MainStyle';


import { NavigationBar,
        UserPhotoContainter,
        UserPhoto,
        NavItem,
        PhotoContainer,
        PhotoCard,
        PhotoTitle,
        Photo,
        StatusContainer,
        NumOfLikes,
        Like,
        DownLoad,
        ButtonWrapper,
        LogOutBuuton,
        PhotoCardBack,
        PhotoInner } from './UserPageStyle';


const UserPage = () => {

    const [flipped,setFlipped]=useState(false);
    const [hovered,setHovered]=useState(false);

    const SetHoveredState=()=>{setHovered((hovered)=>!hovered)}

    return (
        <UserMainPage style = {{ backgroundImage : `url(${Images.BackgroundUser})` }}>
            {console.log(hovered)}
            <NavigationBar>
                <NavItem src={Images.Eye}/>
                <NavItem src={Images.Home}/>
                <NavItem src={Images.Search}/>                
            </NavigationBar>

            <UserPhotoContainter>
                <UserPhoto src={Images.Plus}/>
            </UserPhotoContainter>

            <PhotoContainer > 
                <PhotoInner className={flipped ? "flipped" : ""}>
                    <PhotoCard>
                        <PhotoTitle onClick={()=>setFlipped(true)}>Title of photo</PhotoTitle>
                        <Photo src={Images.BackgroundUser}/>           
                    </PhotoCard>

                    <PhotoCardBack>
                        <PhotoTitle onClick={()=>setFlipped(false)}>Title of photo</PhotoTitle>
                        <StatusContainer>
                                {hovered===false ? <Like onClick={()=>SetHoveredState()} src={Images.Like}/> : <NumOfLikes onClick={()=>SetHoveredState()}>99+</NumOfLikes> }
                                
                                <DownLoad  src={Images.Download}/>
                        </StatusContainer>    
                    </PhotoCardBack>
                </PhotoInner>
                
                
            </PhotoContainer>
            
            
            <ButtonWrapper>
                <LogOutBuuton>Log out</LogOutBuuton>
            </ButtonWrapper>

        </UserMainPage>
     );
}
 
export default UserPage;