import React from 'react';


const People = ({name, nickname, img, status, killCharacter, index}) => (
  <div className='char-wrapper'>
    <h1>{name}</h1>
    <h2>{nickname}</h2>
    {/* <ul>{occupation.map(job => <li>{job}</li>)}</ul> */}
    <img src={img} alt={name} />
    <p>currently (spoiler): {status}</p>
    {
      status !== 'Deceased'
        && <button onClick={() => killCharacter(index)}>Kill!</button>
    }
  </div>
)

export default People;
