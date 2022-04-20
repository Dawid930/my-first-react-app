import React from 'react';
import ReactDOM from 'react-dom';
import Beers from './components/Beers'
import data from './data'
import Header from './components/Header'

/* console.log(data.logo);
console.log(data.cards); */
//console.log(<Beers list={data.cards} />);

//ez a DOM renderer, innen indul ki minden

ReactDOM.render(
  <React.StrictMode>
    <Header title={data.logo}/>
    <Beers list={data.cards}/>
  </React.StrictMode>,
  document.getElementById('root')
);



