import styled from "styled-components"

export const Container = styled.div`
    padding: 10px;
    margin: 200px 200px 200px 200px;
    min-height: 50vh;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;

    @media (max-width: 1400px){
        margin: 150px 80px 200px 80px;
    }

    @media (max-width: 1100px){
        margin: 150px 20px 200px 20px;
    }

    @media (max-width: 500px){
        margin: 20px 0px 200px  0px;
    }
`;

export const Card = styled.div`
    font-family: 'Star Jedi', arial;;
    letter-spacing: 2px;
    padding: 10px;
    margin: 20px;
    height: 130px;
    min-width: 330px;
    display: flex;  
    border-radius: 5px;
    background: #1d1e1f;
    cursor: pointer;
    padding: 15px;

    -webkit-box-shadow: 16px 19.5px 22px -17.5px #5e5e5e;
    -moz-box-shadow: 16px 19.5px 22px -17.5px #5e5e5e;
    box-shadow: 16px 19.5px 22px -17.5px #5e5e5e;


    color: white;

    @media (max-width: 500px){
        min-width: 230px;

    }
`;


export const Title = styled.div`
    font-size: 20px;
    font-family: 'Star Wars',sans-serif;
    letter-spacing: 2px;
    min-width: 330px;
    display: flex;
    border-radius: 5px;
    color: white;
    display: flex;
`;


export const Filter = styled.div`
    padding: 10px;
    margin: 15px 200px 10px 200px;
    width: 100%;

    display: flex;
    justify-content: center;
    flex-wrap: wrap;

    @media (max-width: 1400px){
        margin: 0px 80px 10px 80px;
    }

    @media (max-width: 1100px){
        margin: 0px 20px 10px 20px;
    }

    @media (max-width: 500px){
        margin: 0px 0px 10px  0px;
    }
`;

export const PagePanel = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;

    background: transparent;
    border-radius: 50% 50% 50% 50% / 50% 50% 50% 50%;
    width: 50px;
    height: 50px;
    z-index: -1;
    color: white;
    font-size: 20px;
    -webkit-box-shadow: 1px 1px 147px 13px rgba(89,0,76,1);
    -moz-box-shadow: 1px 1px 147px 13px rgba(89,0,76,1);
    box-shadow: 1px 1px 147px 13px rgba(89,0,76,1); 
`;

export const Button = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;

    cursor: pointer;
    border-radius: 50% 50% 50% 50% / 50% 50% 50% 50%;
    width: 50px;
    height: 50px;
    color: #9b9b9b;
    font-size: 20px;
    border: none;
    margin: 0px 30px;
    
`;