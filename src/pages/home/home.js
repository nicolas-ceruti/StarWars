import { useEffect, useState } from 'react';
import { Container, Card } from './style';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';



function App() {

  const navigate = useNavigate()
  const [people, setPeople] = useState([]);
  const page = 1;
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

  return (
    <Container>
      {people.map((obj, i) => (
        <Card key={i} onClick={(e) => navigate(`/profile/${i}`)}>
          <div>
            <h2>{obj.name}</h2>
          </div>
        </Card>
      ))}
    </Container>
  );
}
export default App;
