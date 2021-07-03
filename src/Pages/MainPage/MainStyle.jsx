import styled from 'styled-components';
import { Colors,Images } from '../../Lib/Styles/theme';

export const MainPage=styled.div`
    display:flex;
    width:100vw;
    height:100vh;
    background-image : url(${Images.Background});
    background-size: cover;
    `;

export const TitleWrapper = styled.div`
    display:flex; 
    justify-content:center;
    align-items:flex-end;
    flex-direction:column;
    margin-right:164px;
    width:100%;`;

export const ButtonWrapper=styled.div `
    display:flex;
    position:absolute;
    flex-direction: row;
    justify-content:flex-end;
    align-items:flex-end;
    right:20px;
    bottom:17px;
    width:100vw;
    height:100%;`;

export const SocialMedia=styled.div`
    display:flex;
    justify-content:flex-start;
    align-items:center;
    flex-direction: row;
    position:absolute;
    top:160px;
    right:140px;
    width:100%;
    height:10%;
    `;

export const SocialMediaCont=styled.section`
    display:flex;
    align-items:center;
    justify-content:space-between;
    transform: rotate(90deg); 
    border-radius:6px;
    border: solid 2px ${Colors.White};
    width:20%;
    height:10%;
    background-color: ${Colors.TransparentInputBox};`;

export const SM=styled.img`
    cursor:pointer;
    margin-left:20px;
    margin-right:20px;
    transform: rotate(270deg); 
    width: 78px;
    height: 75px;
    object-fit: contain;
    &:hover
    {
        animation:rotate 2s linear infinite;
    }
    @keyframes rotate{
        0%{
            transform: rotate(0deg);
        }
        50%{
            transform: rotate(180deg);
        }
        100%{
            transform: rotate(360deg);
        }
    }`;