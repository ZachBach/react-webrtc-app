import Axios from 'axios';
import React from 'react';

function Home(props) {
  const handleJoin = () => {
    Axios.get(`http://localhost:5000/join`).then((res) => {
      props.history?.push(`/join/${res.data.link}?quality=${quality}`);
    });
  };

  return (
    <React.Fragment>
      <button onClick={handleJoin}>join</button>
    </React.Fragment>
  );
}

export default Home;
