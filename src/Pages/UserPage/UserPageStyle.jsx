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
    border: solid 5px ${Colors.White};
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
    top:173.5px;
    left:234px;
    width:10%;`;

export const UserPhoto=styled.img`
    width: 63%;
    border-radius: 60%;
    object-fit: contain;
    border: solid 10px ${Colors.TransparentPhoto};`;

export const PhotoContainer=styled.div`
    display:grid;
    align-self:center;
    top:350px;
    grid-gap:10px;
    grid-template-rows: repeat(2,1fr);
    grid-template-columns: repeat(3,1fr);
    flex-wrap:wrap;
    justify-items:start;
    position:fixed;
    height:60%;
    width:60%;`;

export const PhotoCard=styled.div`
    justify-self:center;
    width:90%;
    border-radius: 6px;
    opacity:0.38;
    background-color: ${Colors.Dark}`;