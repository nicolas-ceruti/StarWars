import { useEffect, useState } from 'react';
import { Container, Card, Filter, PagePanel, Button, Title } from './style';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { TbCircleArrowLeft, TbCircleArrowRight } from 'react-icons/tb'



function App() {

  const navigate = useNavigate()
  const [people, setPeople] = useState([]);
  const [allPeople, setAllPeople] = useState([]);
  const [page, setPage] = useState(1);
  const baseUrl = 'https://swapi.dev/api/people/?page=';

  useEffect(() => {
    if (localStorage.getItem(`${baseUrl + page}`) != null) {
      setPeople(JSON.parse(localStorage.getItem(`${baseUrl + page}`)))
    } else {
      axios.get(`${baseUrl + page}`)
        .then(response => {
          setPeople(response.data.results);
          localStorage.setItem(`${baseUrl + page}`, JSON.stringify(response.data.results))
        })
        .catch(error => { console.error(error); });
    }
  }, [page]);


  useEffect(() => {
      axios.get(`${baseUrl + page}`)
        .then(response => {
          setAllPeople([...allPeople, response.data.results]);
          localStorage.removeItem(`peoples`)
          localStorage.setItem(`peoples`, JSON.stringify(allPeople))
        })
        .catch(error => { console.error(error); });
    
  }, [page]);

  return (
    <Container>
      
      {people.map((obj, i) => (
        <Card key={i} onClick={(e) => navigate(`/profile/${page * 10 + 1 + i - 10 }`)}>
          <div>
            <Title>{obj.name}</Title>
          </div>
        </Card>
      ))}
      <Filter>
        <Button onClick={(e) => page - 1 == 0 ? setPage(page) : setPage(page - 1)}><TbCircleArrowLeft/></Button>
        <PagePanel>{page}</PagePanel>
        <Button onClick={(e) => page + 1 == 10 ? setPage(page) : setPage(page + 1)}><TbCircleArrowRight/></Button>
      </Filter>
    </Container>
  );
}
export default App;
