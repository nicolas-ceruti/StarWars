import { useEffect, useState } from 'react';
import { Container, Card, Filter, PagePanel, Button, Title, BaseBoard, FilterSelectBox, FilterSelectBoxOption, FilterInput, Info, InfoBlock, Description } from './style';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { TbCircleArrowLeft, TbCircleArrowRight } from 'react-icons/tb'
import { GiRocket, GiAlienSkull, GiFilmStrip } from 'react-icons/gi'

function App() {

  const navigate = useNavigate()
  const [page, setPage] = useState(1);
  const [itens, setItens] = useState([]);
  const [filteredItens, setFilteredItens] = useState([]);
  const [gender, setGender] = useState('')
  const [name, setName] = useState('')
  const [birthYear, setBirthYear] = useState('')
  const firstAcess = true;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const requests = [];
        for (let i = 1; i <= 9; i++) {
          requests.push(axios.get(`https://swapi.dev/api/people/?page=${i}`));
        }
        const responses = await Promise.all(requests);
        const allResults = responses.flatMap(response => response.data.results);
        setItens(allResults);
        setFilteredItens(allResults);
        localStorage.setItem('people', JSON.stringify(allResults))
      } catch (error) {
        console.error('Erro ao buscar os itens:', error);
      }
    };

    if (localStorage.getItem('people') !== null) {
      setItens(JSON.parse(localStorage.getItem('people')))
    } else {
      fetchData();
    }
  }, []);

  useEffect(() => {
    console.log(name)
    setFilteredItens(itens.filter((obj, i ) => 
      obj.name.toLowerCase().includes(name.toLowerCase()) &&
      obj.birth_year.toLowerCase().includes(birthYear.toLowerCase()) &&
      (gender != '' ? (obj.gender == gender) : (obj.gender != ''))
      ))

    console.log(filteredItens)
    setPage(1)
  }, [gender, name, birthYear]);

  return (
    <Container>

      <Filter>
        <FilterSelectBox value={gender} onChange={(e) => setGender(e.target.value)}>
          <FilterSelectBoxOption value=''>All</FilterSelectBoxOption>
          <FilterSelectBoxOption value='male'>male</FilterSelectBoxOption>
          <FilterSelectBoxOption value='female'>female</FilterSelectBoxOption>
          <FilterSelectBoxOption value='n/a'>n/a</FilterSelectBoxOption>
        </FilterSelectBox>
        <FilterInput value={name} onChange={(e) => setName(e.target.value)} placeholder='name'></FilterInput>
        <FilterInput value={birthYear} onChange={(e) => setBirthYear(e.target.value)} placeholder='birth year'></FilterInput>
      </Filter>


      {(filteredItens.length > 0  ? filteredItens : itens).filter((obj, i) => i >= `${page - 1}0` && i < `${page}0`).map((obj, i) => (
        <Card key={i} onClick={(e) => navigate(`/profile/${obj.name}`)}>
          <div>
            <Title>{obj.name}</Title>
            <Info>
              <InfoBlock>
                <GiRocket />
                <Description> {obj.starships.length} Starships</Description>
              </InfoBlock>
              <InfoBlock>
                <GiAlienSkull />
                <Description> {obj.species.length} Species</Description>
              </InfoBlock>
              <InfoBlock>
                <GiFilmStrip />
                <Description> {obj.films.length} Films</Description>
              </InfoBlock>
            </Info>
          </div>
        </Card>
      ))}

      <BaseBoard>
        <Button onClick={(e) => page - 1 == 0 ? setPage(page) : setPage(page - 1)}><TbCircleArrowLeft /></Button>
        <PagePanel>{page}</PagePanel>
        <Button onClick={(e) => page + 1 == 10 ? setPage(page) : setPage(page + 1)}><TbCircleArrowRight /></Button>
      </BaseBoard>
    </Container>
  );
}
export default App;
