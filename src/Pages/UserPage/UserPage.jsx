import React from 'react';

import { Images } from '../../Lib/Styles/theme';

import { MainPage as UserMainPage  } from '../MainPage/MainStyle';

import { NavigationBar,
        UserPhotoContainter,
        UserPhoto,
        NavItem,
        PhotoContainer,
        PhotoCard } from './UserPageStyle';

const UserPage = () => {
    return ( 
        <UserMainPage style = {{ backgroundImage : `url(${Images.BackgroundUser})` }}>

            <NavigationBar>
                <NavItem src={Images.Eye}/>
                <NavItem src={Images.Home}/>
                <NavItem src={Images.Search}/>                
            </NavigationBar>

            <UserPhotoContainter>
                <UserPhoto src={Images.Plus}/>
            </UserPhotoContainter>

            <PhotoContainer>
                
                <PhotoCard>

                </PhotoCard>

                <PhotoCard>
                    
                </PhotoCard>

                <PhotoCard>
                    
                </PhotoCard>

                <PhotoCard>
                    
                </PhotoCard>

                <PhotoCard>
                    
                </PhotoCard>

                <PhotoCard>
                    
                </PhotoCard>
                
            </PhotoContainer>

        </UserMainPage>
     );
}
 
export default UserPage;