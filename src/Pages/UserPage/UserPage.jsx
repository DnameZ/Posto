import React from 'react';

import { Images } from '../../Lib/Styles/theme';

import { MainPage as UserMainPage  } from '../MainPage/MainStyle';

import { NavigationBar  } from './UserPageStyle';

const UserPage = () => {
    return ( 
        <UserMainPage style = {{ backgroundImage : `url(${Images.BackgroundUser})` }}>
            <NavigationBar>
                
            </NavigationBar>
        </UserMainPage>
     );
}
 
export default UserPage;