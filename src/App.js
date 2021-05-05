import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import List from './components/List';
import './App.css';


function App() {

  const [title] = useState('Wild Breaking Bad')
  let [startingData, setStartingData] = useState([])
  let [data, setData] = useState([])
  let [apiLoaded, setApiLoaded] = useState(false)
  let [isAlive, setIsAlive] = useState(false)

  useEffect(() => {
    fetch('https://www.breakingbadapi.com/api/characters')
      .then(response => response.json())
      .then(data => {
        setData(data)
        setStartingData(data)
        setApiLoaded(true)
      })
  }, [])

  const showPeople = () => {
    if(isAlive) {
      setData(startingData)
      setIsAlive(false)
    } else {
      let survivors = data.filter(character =>
          character.status !== 'Deceased')
      setData(survivors)
      setIsAlive(true)
    }
  }

  const killCharacter = (index) => {
    let newCharacters = [...data]
    newCharacters[index].status = 'Deceased'
    setData(newCharacters)
  }

  return (
    <div className="App">
      <Header title={title} />
      {
        apiLoaded
          ? <List
              showPeople={showPeople}
              characters={data}
              isAlive={isAlive}
              killCharacter={killCharacter}
            />
          : <h3>Loading...</h3>
      }
    </div>
  );
}

export default App;
