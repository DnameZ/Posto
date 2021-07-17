import styled from 'styled-components';

import { Colors } from '../../Lib/Styles/theme';


export const NavigationBar= styled.div `
    display:flex;
    justify-content:space-evenly;
    align-items:center;
    margin: 47px auto;
    width: 16%;
    height: 10%;
    border-radius: 60px;
    border: solid 2px ${Colors.White};
    background-color:  ${Colors.TransparentNavBar}; 
    `;

export const NavItem=styled.img`
    cursor:pointer;
    width: 20%;
    height: 70%;
    object-fit: contain;
    
    &:hover 
    {
        transition: all 1s;
        width: 40%;
        height: 80%;
    }`;

export const UserPhotoContainter=styled.div`
    display:flex;
    position:absolute;
    top:155px;
    left:210px;
    min-width:10%;`;

export const UserPhoto=styled.img`
    width: 63%;
    border-radius: 60%;
    object-fit: contain;
    border: solid 10px ${Colors.TransparentPhoto};`;

export const PhotoContainer=styled.div`
    display:grid;
    cursor:pointer;
    z-index:0;
    top:320px;
    row-gap:20px;
    justify-self:center;
    grid-template-rows: repeat(2,1fr);
    grid-template-columns: repeat(3,1fr);
    position: absolute;
    height:60%;
    width:60%;
    transition: z-index 500ms; transform 500ms;
    -webkit-perspective: 1000px;
    perspective:1000px;
    transform-style: preserve-3d;

    &.flipped
    {
        z-index:1;
    }`;


export const PhotoCard=styled.div`
    position: absolute;
    -moz-backface-visibility: hidden;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    width:90%;
    z-index:0;
    border-radius: 6px;
    background-color: ${Colors.TransparentInputBox};`;

export const PhotoCardBack=styled.div`
    position: absolute;
    -moz-backface-visibility: hidden;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    z-index:1;
    transform: rotateY( -180deg );
    width:90%;
    border-radius: 6px;
    background-color: ${Colors.TransparentInputBox};`;

export const PhotoTitle=styled.h3`
    padding-top:13.5px;
    padding-left:25px;
    font-size: 20px;
    font-weight:bold;
    color:${Colors.White};
    &:hover
    {
        transition: all 0.3s ease-out;
        font-size:25px;
    }
    `;

export const PhotoInner=styled.div`
    position: relative;
    transition: transform 500ms;
    transform-style: preserve-3d;
    &.flipped
    {
        transform: rotateY(180deg);
    }`;

export const Photo=styled.img`
    margin-top:11.5px;
    margin-left:17.5px;
    object-fit: contain;
    width: 90%;`;

export const StatusContainer=styled.div`
    display:flex;
    justify-content:space-around;
    width:100%;
    height:200px;
    `;


export const Like=styled.img`
    transition: all 1s;
    cursor:pointer;
    align-self:center;
    height: 120px;`;


export const NumOfLikes=styled.h4`
    color:${Colors.White};
    font-size:50px;
    align-self:center;`;

export const DownLoad=styled.img`
    cursor:pointer;
    align-self:center;
    width: 120px;
    height: 120px;
    
    &:hover
    {
        transition: all 0.3s ease-out;
        width: 140px;
        height: 140px;
    }`;

export const ButtonWrapper=styled.div`
    display:flex;
    position:fixed;
    justify-content:flex-end;
    align-items:flex-end;
    width:100%;
    height:10%;
    bottom:18px;`;

export const LogOutBuuton=styled.button`
    width: 20%;
    height: 96.4px;
    cursor:pointer;
    border: solid 10px ${Colors.White};
    background-color: ${Colors.TransparentButton};
    color:${Colors.White};
    font-size: 40px;
    border-radius:6px;`;