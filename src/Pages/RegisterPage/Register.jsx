import React from 'react';

import { Images } from '../../Lib/Styles/theme';

import { MainPage  } from '../MainPage/MainStyle';

import { TitleWrapper } from '../MainPage/MainStyle';

import { ButtonWrapper } from './RegisterStyle';

import { InputBoxWrapper } from '../LogInPage/LogInStyle';

import { MainTitle, 
         InputBox, 
         ButtonBig,
         BackButtonWrapper,
         BackButton } from '../../Lib/Styles/generalStyles';


const RegisterPage = () => {

    const inputBoxes=["Username","E-mail","Password","Repeat-password"];

    const Password="Password";
    const Repeatpassword="Repeat-password";
    const passowrd="password";
    const DoNothing="";

    return ( 
        <MainPage style = {{ backgroundImage : `url(${Images.Background})` }}>

            <BackButtonWrapper>
                <BackButton src={Images.Back}/>
            </BackButtonWrapper>

            <TitleWrapper>
                <MainTitle>Posto</MainTitle>
            </TitleWrapper>

            <InputBoxWrapper>
                {inputBoxes.map((inputBox,index)=>(
                    <InputBox key={index} placeholder={inputBox} type={ 
                        inputBox === Password || inputBox === Repeatpassword ? passowrd : DoNothing }/>
                ))}
            </InputBoxWrapper>

            <ButtonWrapper>
                <ButtonBig>Register</ButtonBig>
            </ButtonWrapper>

        </MainPage>
     );
}
 
export default RegisterPage;