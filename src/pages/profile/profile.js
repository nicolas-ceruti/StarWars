import { useEffect, useState } from 'react';
import { Container, PeopleInfo, Description, Title, DescriptionText} from './style';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { CiLineHeight } from 'react-icons/ci'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {GiAlienSkull, GiInfestedMass, GiFallingBoulder, GiFilmProjector, GiDinosaurBones, GiRocketThruster} from 'react-icons/gi'
import {FaAmericanSignLanguageInterpreting, FaBirthdayCake, FaHeadSideMask, FaTruckMonster} from 'react-icons/fa'
import {IoIosPeople, IoIosNuclear} from 'react-icons/io'
import {TbBrandPlanetscale, TbMountain} from 'react-icons/tb'
import {BsGenderAmbiguous} from 'react-icons/bs'
import {SiMattermost} from 'react-icons/si'



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
            <GiAlienSkull /><DescriptionText>Specie: {specie.name ? specie.name : 'UNDEFINED'}</DescriptionText>
          </Description>

          <Description>
            <FaAmericanSignLanguageInterpreting /><DescriptionText>Language: {specie.language ? specie.language : 'UNDEFINED'}</DescriptionText>
          </Description>

          <Description>
            <BsGenderAmbiguous /><DescriptionText>Gender: {people.gender}</DescriptionText>
          </Description>

          <Description>
            <FaBirthdayCake /><DescriptionText>Birth Year: {people.birth_year}</DescriptionText>
          </Description>

          <Description>
            <GiInfestedMass /><DescriptionText>Mass: {people.mass}</DescriptionText>
          </Description>

          <Description>
            <CiLineHeight /><DescriptionText>Height: {people.height}</DescriptionText>
          </Description>

          <Description>
            <FaHeadSideMask /><DescriptionText>Hair Color: {people.hair_color}</DescriptionText>
          </Description>

          <Description>
            <GiDinosaurBones /><DescriptionText>Skin Color: {people.skin_color}</DescriptionText>
          </Description>

          <Title>Homeworld {homeworld.name}</Title>

          <Description>
            <TbBrandPlanetscale /><DescriptionText>Name: {homeworld.name}</DescriptionText>
          </Description>

          <Description>
            <SiMattermost /><DescriptionText>Climate: {homeworld.climate}</DescriptionText>
          </Description>

          <Description>
            <GiFallingBoulder /><DescriptionText>Gravity: {homeworld.gravity}</DescriptionText>
          </Description>

          <Description>
            <TbMountain /><DescriptionText>Terrain: {homeworld.terrain}</DescriptionText>
          </Description>

          <Description>
            <IoIosPeople /><DescriptionText>Population: {homeworld.population}</DescriptionText>
          </Description>

        </PeopleInfo>
        <PeopleInfo>

          <Title>Starships</Title>
          {starships.length > 0 ?
            starships.map((obj) => {
              return (
                <Description>
                  <GiRocketThruster /><DescriptionText>{obj.name}</DescriptionText>
                </Description>
              )
            }) :
            <Description style={{ 'backgroundColor': '#e97575' }}>
              <IoIosNuclear /><DescriptionText>Not contain starships</DescriptionText>
            </Description>
          }

          <Title>Films</Title>
          {films.length > 0 ?
            films.map((obj) => {
              return (
                <Description>
                  <GiFilmProjector /><DescriptionText>{obj.title}</DescriptionText>
                </Description>
              )
            }) :
            <Description style={{ 'backgroundColor': '#e97575' }}>
              <IoIosNuclear /><DescriptionText>Not contain films</DescriptionText>
            </Description>
          }

          <Title>Vechiles</Title>
          {vehicle.length > 0 ?
            vehicle.map((obj) => {
              return (
                <Description>
                  <FaTruckMonster /><DescriptionText>{`${obj.name} - ${obj.model}`}</DescriptionText>
                </Description>
              )
            }) :
            <Description style={{ 'backgroundColor': '#e97575' }}>
              <IoIosNuclear /><DescriptionText>Not contain vehicles</DescriptionText>
            </Description>
          }

        </PeopleInfo>
      </Container>
    </>
  );
}
export default App;
