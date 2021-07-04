import React from 'react';

import { Images } from '../../Lib/Styles/theme';

import { MainPage  } from '../MainPage/MainStyle';

import { TittleWrapper,
        InputBoxWrapper,
        ButtonWrapper } from './RegisterStyle';

import { MainTitle, 
        InputBox, 
        ButtonBig,
        BackButtonWrapper,
        BackButton } from '../../Lib/Styles/generalStyles';


const RegisterPage = () => {

    const inputBoxes=["Username","Password"];
    const Password="Password";
    const passowrd="password";
    const DoNothing="";


    return ( 
        <MainPage>

            <BackButtonWrapper>
                <BackButton src={Images.Back}/>
            </BackButtonWrapper>

            <TittleWrapper>
                <MainTitle>Posto</MainTitle>
            </TittleWrapper>

            <InputBoxWrapper>
                {inputBoxes.map((inputbox,index)=>(
                <InputBox key={index} placeholder={inputbox} type={ inputbox === Password ? passowrd : DoNothing} />
                ))} 
            </InputBoxWrapper>

            <ButtonWrapper>
                    <ButtonBig>Log in</ButtonBig>
            </ButtonWrapper>
        </MainPage>
     );
}
 
export default RegisterPage;