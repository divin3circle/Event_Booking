import styled from 'styled-components';
import {Link as RouterLink} from 'react-router-dom'
import background from '../../assets/Event.jpeg';
export const colors ={
    primary: "#fff",
    theme: "#BE185D",
    light1: "#3F4F6",
    light2: "#ESE7EB",
    dark1: "#1F2937",
    dark2: "#4B5563",
    dark3: "#DC2626",
    red: "#DC2626"

}
export const StyledContainer = styled.div`
    margin: 0;
    min-height: 100vh;
    display: flex;
    justify-content: center;    
    align-items: center;
    background: linear-gradient(0deg, rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${background});
    background-size: cover;
    background-attachment: fixed;
`
export const StyledTitle =  styled.h2`
    font-size: ${(props) => props.size}px;
    text-align: center;
    color: ${(props) => props.colors ? props.colors: colors.primary }
    padding: 5px;
    margin-bottom: 25px;`;

export const StyledSubTitle = styled.p`
    font-size: ${(props) => props.size}px;
    text-align: center;
    color: ${(props) => props.colors ? props.colors: colors.primary }
    padding: 5px;
    margin-bottom: 25px;

`;
export const  Avatar = styled.div`
    width: 85px;
    height: 85px;
    border-radius: 50px;
    background-image: url(${props => props.image});
    background-size: cover;
    background-position: center;
    margin: auto;
`;
export const StyledButton = styled(RouterLink)`
    padding: 10px;
    width: 150px;
    background-color: transparent;
    font-size: 16px;
    border: 3px solid ${colors.primary};
    border-radius: 25px;
    color: ${colors.primary};
    outline: 0;
    text-decoration:  none;
    text-align: center;
    transition: ease-in-out 0.3s;
    &:hover{
        background-color: ${colors.primary};
        color: ${colors.theme};
        cursor: pointer;
    }

`;
export const ButtonGroup = styled.div`
    display: flex;
    justify-content: space-around;
    flex-direction: row;
    margin-top: 25px;
`;
export  const StyledTextInput = styled.input`
    width: 280px;
    padding: 15px;
    padding-left: 50px;
    font-size: 17px;
    letter-spacing: 1px;
    color: ${colors.dark1};
    background-color: ${colors.light2};
    border: 0;
    outline: 0;
    display: block;
    margin: 5px auto 10px auto;
    transition: ease-in-out 0.3s;

    ${(props) => props.invalid && `background-color: ${colors.red}; color: ${colors.primary};`}
    
    $:focus{ 
        background-color: ${colors.dark2};
        color:${colors.primary};
    }
`;
export const StyledLabel = styled.p`
    text-align: left;
    font-size: 13px;
    font-weight: bold;
`;
export const StyledFormArea = styled.div`
    background-color: ${props => props.bg ||
    colors.light1};
    text-align: center;
    padding: 45px 55px;


`;
export const StyledFormButton = styled.div`
    padding: 10px;
    width: 150px;
    background-color: transparent;
    font-size: 16px;
    border: 3px solid ${colors.theme};
    outline: 0;
    border-radius: 25px;
    color: ${colors.primary};
    transition: ease-in-out 0.3s;
    &:hover{
        background-color: ${colors.primary};
        color: ${colors.theme};
        cursor: pointer;
    }

`; 
// icons
export const StyledIcon = styled.p`
    color: ${colors.dark1};
    position: absolute;
    font-size: 21px;
    top: 35px;
    ${(props) => props.right && `right: 15px;`}; 
    ${(props) => !props.right && `left: 15px;`}; 

`;
export const ErrorMsg = styled.div`
    font-size: 11px;
    color: ${colors.red};
    margin-top: -5px;
    margin-bottom: 10px;
    text-align: left;
    `;
export const ExtraText = styled.div`
    font=size: ${(props) => props.size }px;
    text-align: center;
    color:${(props) => (props.color? props.color : colors.dark2 ) };
    padding: 2px;
    margin-top: 10px;
`;
export const TextLink = styled(RouterLink)`
    text-decoration: none;
    color: ${colors.theme};
    transition: ease-in-out 0.3s;

    &: hover{
        text-decoration: underline;
        letter-spacing: 2px;
        font-weight: bold;
    }


`;
export const CopyrightText = styled.p`
    padding: 50px;
    margin: 20px;
    text-align:center;
    color: ${colors.light2}
`;