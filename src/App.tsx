import * as React from 'react';
//import '../App.css';

import CharacterList from './views/components/CharacterList';
import {Card,CountryImage} from './views/components/Flag'

const data = {
  title : 'La hora ha llegado',
  paragraph : 'Todo fue lo que fue'
}


const App: React.SFC<{}> = () => {
  return (
    <>
      <h1>The Force Awakens</h1>
      <CharacterList />
      <Card title= {data.title} paragraph={data.paragraph}></Card>
      <CountryImage title = {data.title}></CountryImage>
    </>
  );
};

export default App;