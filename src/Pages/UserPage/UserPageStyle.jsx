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
    object-fit: contain;`;

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