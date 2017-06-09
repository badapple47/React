
import React, { Component } from 'react' ;
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';


const API_KEY = 'AIzaSyBknMoPG_SzSjYdaQ6bYupb-ITn-eCjumo';


// youtube-api-search for return string data from youtube


//pack all component in container name 'app'
class  App extends Component {
  constructor(props){
    super(props)

    this.state = { videos: []};

    YTSearch({key: API_KEY , term: 'Martin Garrix'}, (data) => {
      this.setState({videos : data});
    });
  }

render(){
  return (
    <div>
    <SearchBar/>
    <VideoDetail video={this.state.videos[0]} />
    <VideoList videos={this.state.videos} />

    </div>
    );
  }
}

// after package has been packed into one piece called 'app' render 'app' container to HTML
ReactDOM.render(<App />, document.querySelector('.container'));
