import { useEffect, useState } from 'react';
import { Container, Card, PeopleInfo, AddInfo, AddInfoContainer, Description, Title, DescriptionText, SubTitle } from './style';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { CiLineHeight } from 'react-icons/ci'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function App() {

  const itens = JSON.parse(localStorage.getItem('people'))
  const [people, setPeople] = useState([]);
  const [homeworld, setHomeworld] = useState([]);
  const [starships, setStarship] = useState([]);
  const [vehicle, setVehicle] = useState([]);
  const [films, setFilms] = useState([]);
  const [specie, setSpecie] = useState([]);
  const params = useParams();
  let dataAuth = params['id']


  useEffect(() => {

    const id = toast.loading('Getting Data');

    itens.map((obj, i) => {
      if (obj.name == dataAuth) {


        axios.get(`https://swapi.dev/api/people/${i + 1 >= 17 ? i + 2 : i + 1}`)
          .then(response => {
            setPeople(response.data);

            const promisesShip = response.data.starships.map(url => axios.get(url));
            Promise.all(promisesShip)
              .then(responses => {
                const starshipDataList = responses.map(response => response.data);
                setStarship(starshipDataList);
              })
              .catch(error => console.error(error));

            const promisesFilms = response.data.films.map(url => axios.get(url));
            Promise.all(promisesFilms)
              .then(responses => {
                const filmDataList = responses.map(response => response.data);
                setFilms(filmDataList);
              })
              .catch(error => console.error(error));

            const promisesVechile = response.data.vehicles.map(url => axios.get(url));
            Promise.all(promisesVechile)
              .then(responses => {
                const vechileData = responses.map(response => response.data);
                setVehicle(vechileData);
              })
              .catch(error => console.error(error));

            axios.get(response.data.homeworld)
              .then(responses => {
                setHomeworld(responses.data);
              })
              .catch(error => console.error(error));

            axios.get(response.data.species)
              .then(responses => {
                setSpecie(responses.data);
                console.log(specie.name)
              })
              .catch(error => console.error(error));

              toast.update(id, {
                autoClose: 500,
                render: 'Success',
                type: 'success',
                isLoading: false,
            });

          })
          .catch(error => { console.error(error); });
      }else{
        toast.update(id, {
          autoClose: 500,
          render: 'Error',
          type: 'error',
          isLoading: false,
      });
      }
    })

  }, []);



  return (
    <>
      <Container>
      <ToastContainer theme="dark"/>

        <PeopleInfo>
          <Title>{people.name}</Title>

          <Description>
            <CiLineHeight /><DescriptionText>Specie: {specie.name ? specie.name : 'UNDEFINED'}</DescriptionText>
          </Description>

          <Description>
            <CiLineHeight /><DescriptionText>Language: {specie.language ? specie.language : 'UNDEFINED'}</DescriptionText>
          </Description>

          <Description>
            <CiLineHeight /><DescriptionText>Gender: {people.gender}</DescriptionText>
          </Description>

          <Description>
            <CiLineHeight /><DescriptionText>Birth Year: {people.birth_year}</DescriptionText>
          </Description>

          <Description>
            <CiLineHeight /><DescriptionText>Mass: {people.mass}</DescriptionText>
          </Description>

          <Description>
            <CiLineHeight /><DescriptionText>Height: {people.height}</DescriptionText>
          </Description>

          <Description>
            <CiLineHeight /><DescriptionText>Hair Color: {people.hair_color}</DescriptionText>
          </Description>

          <Description>
            <CiLineHeight /><DescriptionText>Skin Color: {people.skin_color}</DescriptionText>
          </Description>

          <Title>Homeworld {homeworld.name}</Title>

          <Description>
            <CiLineHeight /><DescriptionText>Name: {homeworld.name}</DescriptionText>
          </Description>

          <Description>
            <CiLineHeight /><DescriptionText>Climate: {homeworld.climate}</DescriptionText>
          </Description>

          <Description>
            <CiLineHeight /><DescriptionText>Gravity: {homeworld.gravity}</DescriptionText>
          </Description>

          <Description>
            <CiLineHeight /><DescriptionText>Terrain: {homeworld.terrain}</DescriptionText>
          </Description>

          <Description>
            <CiLineHeight /><DescriptionText>Population: {homeworld.population}</DescriptionText>
          </Description>

        </PeopleInfo>
        <PeopleInfo>

          <Title>Starships</Title>
          {starships.length > 0 ?
            starships.map((obj) => {
              return (
                <Description>
                  <CiLineHeight /><DescriptionText>{obj.name}</DescriptionText>
                </Description>
              )
            }) :
            <Description style={{ 'backgroundColor': '#e97575' }}>
              <CiLineHeight /><DescriptionText>Not contain starships</DescriptionText>
            </Description>
          }

          <Title>Films</Title>
          {films.length > 0 ?
            films.map((obj) => {
              return (
                <Description>
                  <CiLineHeight /><DescriptionText>{obj.title}</DescriptionText>
                </Description>
              )
            }) :
            <Description style={{ 'backgroundColor': '#e97575' }}>
              <CiLineHeight /><DescriptionText>Not contain films</DescriptionText>
            </Description>
          }

          <Title>Vechiles</Title>
          {vehicle.length > 0 ?
            vehicle.map((obj) => {
              return (
                <Description>
                  <CiLineHeight /><DescriptionText>{`${obj.name} - ${obj.model}`}</DescriptionText>
                </Description>
              )
            }) :
            <Description style={{ 'backgroundColor': '#e97575' }}>
              <CiLineHeight /><DescriptionText>Not contain vehicles</DescriptionText>
            </Description>
          }

        </PeopleInfo>
      </Container>
    </>
  );
}
export default App;
