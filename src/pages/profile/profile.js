import { useEffect, useState } from 'react';
import { Container, Card } from './style';
import axios from 'axios';
import { useParams } from 'react-router-dom';



function App() {

    const [people, setPeople] = useState([]);

    const params = useParams();
    let dataAuth = parseInt(params["id"])
    console.log(dataAuth)

    useEffect(() => {
      axios.get(`https://swapi.dev/api/people/${dataAuth}`)
        .then(response => {console.log(response.data);})
        .catch(error => {console.error(error);});
    }, []);
  
    return (
      <Container>

          <Card >
            {dataAuth}
          </Card>
        
      </Container>
    );
  }
export default App;
