
import React, { Component } from 'react' ;
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
import _ from 'lodash';


const API_KEY = 'AIzaSyBknMoPG_SzSjYdaQ6bYupb-ITn-eCjumo';


// youtube-api-search for return string data from youtube


//pack all component in container name 'app'
class  App extends Component {
  constructor(props){
    super(props)

    this.state = {
      videos: [],
      selectedVideo: null
    };

    this.videoSearch('Martin');
  }

  videoSearch(term){
    YTSearch({key: API_KEY , term: term}, (data) => {
      this.setState({
        videos : data,
        selectedVideo: data[0]
      });
    });
  }

render(){
  //videoSearch อันล่างนี่แค่ทำให้มันรันได้หนึ่งครั้งในทุก 300 mili sec
  const videoSearch = _.debounce((term) => {this.videoSearch(term)} , 300);

  return (
    // ด้านหลัง SearchBar ตรง onSearchTermChange มันคือProperties
    <div>
    <SearchBar onSearchTermChange={videoSearch}/>
    <VideoDetail video={this.state.selectedVideo} />
    <VideoList
        onVideoSelect={selectedVideo => this.setState({selectedVideo})}
        videos={this.state.videos} />
    </div>
    );
  }
}

// after package has been packed into one piece called 'app' render 'app' container to HTML
ReactDOM.render(<App />, document.querySelector('.container'));
