import styled from 'styled-components';

import { Colors } from './theme';

export const ButtonBig=styled.button`
    font-size: 70px;
    color:${Colors.White};
    border-radius:6px;
    width:22%;
    height:13%;
    border: solid 10px ${Colors.White};
    background-color: ${Colors.TransparentButton};`;

export const ButtonSmall=styled.button`
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