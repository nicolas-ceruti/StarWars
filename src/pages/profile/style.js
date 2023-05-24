import styled from "styled-components"

export const Container = styled.div`
    padding: 10px;
    margin: 200px 200px 200px 200px;
    height: 50vh;
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
    padding: 10px;
    margin: 20px;
    height: 130px;
    min-width: 330px;
    display: flex;  
    border-radius: 10px;
    background: rgba(255,255,255,0.6);
    -webkit-backdrop-filter: blur(28px);
    backdrop-filter: blur(28px);
    border: 1px solid rgba(255,255,255,0.3);

    @media (max-width: 500px){
        min-width: 230px;

    }
`;

