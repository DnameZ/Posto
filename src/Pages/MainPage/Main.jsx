import React from 'react';
import { MainPage,
        TitleWrapper,
        ButtonWrapper,
        SocialMedia,
        SocialMediaCont,
        SM } from './MainStyle';

import { ButtonBig,
         MainTitle,
         ButtonSmall } from '../../Lib/Styles/generalStyles';

import { Images } from '../../Lib/Styles/theme';

const  Main = () => {
    return (
        <MainPage>

            <TitleWrapper>
                <MainTitle>Posto</MainTitle>
            </TitleWrapper>

            <ButtonWrapper>
                <ButtonSmall>Register</ButtonSmall>
                <ButtonBig>Log in</ButtonBig>
            </ButtonWrapper>

            <SocialMedia>
                <SocialMediaCont>
                    <SM src={Images.FbIcon}/>
                    <SM src={Images.InstaIcon}/>
                    <SM src={Images.YtIcon}/>
                </SocialMediaCont>
            </SocialMedia>

        </MainPage>
    );
}
 
export default Main ;