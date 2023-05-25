import { useEffect, useState } from 'react';
import { Container, Card, PeopleInfo, AddInfo, AddInfoContainer, Description, Title, DescriptionText, SubTitle } from './style';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { CiLineHeight } from 'react-icons/ci'



function App() {

    const [people, setPeople] = useState([]);
    const [homeworld, setHomeworld] = useState([]);
    const [starship, setStarship] = useState([]);

    const params = useParams();
    let dataAuth = parseInt(params["id"])
    console.log(dataAuth)

    useEffect(() => {
      axios.get(`https://swapi.dev/api/people/${dataAuth}`)
        .then(response => {
          setPeople(response.data); 
          console.log(response.data);
          setHomeworld(response.data.homeworld);
        })
        .catch(error => {console.error(error);});
    }, []);

    useEffect(() => {
      axios.get(homeworld)
        .then(response => {
          setHomeworld(response.data);
        })
        .catch(error => {console.error(error);});
    }, [homeworld]);
  
    return (
      <Container>

          <PeopleInfo>
            <Title>{people.name}</Title>

            <Description>
              <CiLineHeight/><DescriptionText>Gender: {people.gender}</DescriptionText>
            </Description>

            <Description>
              <CiLineHeight/><DescriptionText>Birth Year: {people.birth_year}</DescriptionText>
            </Description>

            <Description>
              <CiLineHeight/><DescriptionText>Mass: {people.mass}</DescriptionText>
            </Description>

            <Description>
              <CiLineHeight/><DescriptionText>Height: {people.height}</DescriptionText>
            </Description>

            <Description>
              <CiLineHeight/><DescriptionText>Hair Color: {people.hair_color}</DescriptionText>
            </Description>

            <Description>
              <CiLineHeight/><DescriptionText>Skin Color: {people.skin_color}</DescriptionText>
            </Description>

            <Title>Homeworld {homeworld.name}</Title>

            <Description>
              <CiLineHeight/><DescriptionText>Name: {homeworld.name}</DescriptionText>
            </Description>

            <Description>
              <CiLineHeight/><DescriptionText>Climate: {homeworld.climate}</DescriptionText>
            </Description>

            <Description>
              <CiLineHeight/><DescriptionText>Gravity: {homeworld.gravity}</DescriptionText>
            </Description>

          </PeopleInfo>
          <PeopleInfo></PeopleInfo>
      </Container>
    );
  }
export default App;
