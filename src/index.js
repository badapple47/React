
import React from 'react' ;
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyBknMoPG_SzSjYdaQ6bYupb-ITn-eCjumo';


// youtube-api-search for return string data from youtube
YTSearch({key: API_KEY, term: 'pewdiepie'}, function(data){
  console.log(data);
});


//pack all component in container name 'app'
const  App =  () => {
  return ( <div> <SearchBar/> </div> );
}


// after package has been packed into one piece called 'app' render 'app' container to HTML
ReactDOM.render(<App />, document.querySelector('.container'));
