import styled from 'styled-components';

import { Colors} from '../../Lib/Styles/theme';

export const NavigationBar= styled.div `
    display:flex;
    margin: 47px auto;
    width: 16%;
    height: 10%;
    border-radius: 60px;
    border: solid 5px ${Colors.White};
    background-color:  ${Colors.TransparentNavBar}; 
    `;