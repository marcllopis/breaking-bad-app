import React from 'react';
import People from './People';

const List = (props) => (
  <>
    {
      props.isAlive
        ? <button className='survs-button' onClick={props.showPeople}>show everybody!</button>
        : <button className='survs-button' onClick={props.showPeople}>show survivors!</button>
    }
    <div className='list-container'>
      {
        props.characters.map((character, index) => (
          <People
            name={character.name}
            occupation={character.occupation}
            img={character.img}
            status={character.status}
            nickname={character.nickname}
            key={character.char_id}
            killCharacter={props.killCharacter}
            index={index}
          />
        ))
      }
    </div>
  </>
)

export default List;
