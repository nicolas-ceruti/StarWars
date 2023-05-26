import styled from "styled-components"

export const Container = styled.div`
    background-color: white;
    padding: 10px;
    margin: 100px 100px 100px 100px;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;

    @media (max-width: 1200px){
        margin: 50px 50px 50px 50px;

    }

    @media (max-width: 1100px){
        margin: 50px 50px 50px 50px;
    }

    @media (max-width: 500px){
        margin: 20px 0px 200px  0px;
        padding: 0px;
    }
`;

export const PeopleInfo = styled.div`
    min-height: 700px;
    min-width: 250px;
    width: 40%;
    display: inline-block;
    margin: 10px 10px 0px 10px;

    @media (max-width: 1400px){
        width: 80%;
        
    }

    @media (max-width: 1100px){
        
    }

    @media (max-width: 500px){
        
    }
`;

export const Title = styled.div`
    width: 90%;
    background-color: #242424;
    border-radius: 5px;
    margin: 10px;
    padding: 10px;
    font-size: 30px;
    font-family: 'Star Wars',sans-serif;
    letter-spacing: 2px;
    color: white;
    margin-top: 15px;

    @media (max-width: 500px){
        width: 80%;
    }
`;

export const SubTitle = styled.div`
    width: 90%;
    background-color: gray;
    margin: 10px;
    padding: 10px;
    font-size: 15px;
    font-family: 'Star Wars',sans-serif;
    letter-spacing: 2px;
    color: black;

    @media (max-width: 500px){
        width: 80%;
    }
`;

export const Description = styled.div`
    width: 90%;
    min-height: 20px;
    background-color: #efefef;
    border-radius: 5px;
    margin: 10px;
    padding: 10px;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;

    @media (max-width: 500px){
        width: 80%;
    }
`;

export const DescriptionText = styled.div`
    margin: 0px 0px 0px 8px;
    font-size: 18px;
    font-family: 'Roboto Slab', serif;
    letter-spacing: 2px;
`;



