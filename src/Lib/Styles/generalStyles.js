import styled from 'styled-components';

import { Colors } from './theme';

export const ButtonBig=styled.button`
    cursor:pointer;
    font-size: 70px;
    color:${Colors.White};
    border-radius:6px;
    width:22%;
    height:13%;
    border: solid 10px ${Colors.White};
    background-color: ${Colors.TransparentButton};`;

export const ButtonSmall=styled.button`
    cursor:pointer;
    margin-right:44px;
    border-radius:6px;
    font-size: 40px;
    border: solid 10px ${Colors.White};
    background-color: ${Colors.TransparentButton};
    color:${Colors.White};
    width:22%;
    height:10%;`;

export const MainTitle=styled.h2`
    text-shadow: 20px 0 20px #000000;
    -webkit-text-stroke: 1px #ffffff;
    color:${Colors.White};
    font-size:150px;`;

export const InputBox=styled.input`
    padding-left:28.5px;
    color:${Colors.White};
    font-size: 30px;
    width: 22%;
    margin-bottom:22px;
    height: 11%;
    border-radius: 20px;
    border: solid 10px ${Colors.White};
    background-color: ${Colors.TransparentInputBox};
    &:first-child
    {
        border-radius: 20px 20px 0px 0px;
    }
    &:last-child 
    {
        border-radius: 0px 0px 20px 20px;
    }`;

export const BackButtonWrapper=styled.div`
    position:absolute;
    top:39px;
    display:flex;
    width:100%;`;

export const BackButton=styled.img`
    width: 173px;
    height: 160px;`;