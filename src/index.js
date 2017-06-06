import React from 'react' ;
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyBknMoPG_SzSjYdaQ6bYupb-ITn-eCjumo';


const  App =  () => {
  return ( <div> <SearchBar/> </div> );
}



ReactDOM.render(<App />, document.querySelector('.container'));
