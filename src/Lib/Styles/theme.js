
import BackgroundImage from "../../Assets/Images/MainPageBack.png";
import Fb from "../../Assets/Images/fbIcon.jpg";
import Insta from "../../Assets/Images/instagram png.png";
import Yt from "../../Assets/Images/ytpng.png";
import BackButton from "../../Assets/Images/Polygon 2.png";
import User from "../../Assets/Images/UserPage.png";
import PlusButton from "../../Assets/Images/plus.png"; 
import HomeButton from "../../Assets/Images/homeIconPng.png";
import EyeButton from "../../Assets/Images/eye.png";
import SearchButton from "../../Assets/Images/search.png";

export const breakpoints = {
    mobileLarge: 'min-width: 576px',
    tablet: 'min-width: 768px',
    desktop: 'min-width: 1024px',
    desktopLarge: 'min-width: 1300px',
  };

export const Colors = {
    Dark:`#000000`,
    TransparentButton:` rgba(241,6,6,0)`,
    TransparentInputBox: `rgba(0,0,0,0.45)`,
    TransparentNavBar:` rgba(0, 0, 0, 0.43);`,
    TransparentPhoto:` rgba(0, 0, 0, 0.60);`,
    White:`#ffffff`
};

export const Images = {
    Background:`${BackgroundImage}`,
    BackgroundUser : `${User}`,
    FbIcon:`${Fb}`,
    InstaIcon:`${Insta}`,
    YtIcon:`${Yt}`,
    Back:`${BackButton}`,
    Plus:`${PlusButton}`,
    Home:`${HomeButton}`,
    Eye:`${EyeButton}`,
    Search:`${SearchButton}`

};