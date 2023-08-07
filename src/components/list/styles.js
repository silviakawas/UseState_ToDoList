import styled from "styled-components";


const StyledContainer = styled.section`
    width: 100%;
    height: 100vh;
    background-color: white;
    background-image: url(public/bg-desktop-light.jpg);
    background-size: contain;
    background-repeat: no-repeat;
    margin: auto;
    padding-bottom: 100px;
`;
const StyledListContainer = styled.div`
    width: 540px;
    margin: auto;
`;
const StyledLogoContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;
const StyledTitle = styled.h1`
    font-size: 30px;
    color: white;
    letter-spacing: 8px;
`;
const StyledModeImg = styled.img`
    width: 25px;
    height: 25px;
`;
const StyledInputContainer = styled.div`
    border: 1px solid lightgray;
    border-radius: 5px;
    background-color: white;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 10px;
    padding: 15px;
    margin-bottom: 20px;
`;
const StyledInputImgContainer = styled.div`
    width: 20px;
    height: 20px;
    border: 1px solid lightgray;
    border-radius: 100%;
    background-color: ${({active}) => active ? 'linear-gradient(0.35turn, #55DDFF, #C058F3)' : 'white'};
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    transition: all 0.5s ease;
`;
const StyledInputImage = styled.img`
    transition: all 0.5s ease;
`;
const StyledInput = styled.input`
    width: 90%;
    border: 0;
    font-size: 16px;
    background-color: white;
    padding-left: 10px;
    &:focus{
        outline: none;
    }
`;
const StyledTab = styled.div`
    border: 1px solid lightgray;
    border-radius: 5px;
    background-color: white;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 20px;
    margin: auto;
    padding: 15px;
`;

const StyledH2Tab = styled.h2`
    font-size: 16px;
    font-weight: 500;
    color: ${({active})=> !active ? '#494C6B' : '#D1D2DA'};
    text-decoration: ${({active}) => active ? 'line-through' : 'none'};
    transition: all 0.5s ease;
`;

const StyledTab2 = styled.div`
    background-color: white;
    border: 1px solid lightgray;
    border-radius: 5px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 20px;
    margin: auto;
    padding: 15px 20px;
    transition: all 0.5s ease;
`;

const StyledTabH3 = styled.h3`
    background-color: white;
    font-size: 15px;
    font-weight: 500;
    color: #9495A5;
    cursor: pointer;
    transition: all 0.5s ease;
`;

const StyledTabFilter = styled.div`
    background-color: white;
    display: flex;
    gap: 20px;
    transform: all 0.5s ease;
`;

export {StyledContainer, StyledListContainer, StyledLogoContainer, StyledTitle, StyledModeImg, StyledInputContainer, StyledInputImgContainer, StyledInputImage, StyledInput, StyledTab, StyledH2Tab, StyledTab2, StyledTabH3, StyledTabFilter};