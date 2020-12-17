import React, {Component} from 'react';

const APIKEY = "AIzaSyCAUJtBF_CaUsiG0MhCHV30rRKyJhEiPqY";

class YoutubeSearch extends Component{

    constructor(props){
        super(props);
        this.state = {
            searchClick: []
        };
        this.clicked = this.clicked.bind(this);

    }
    //https://youtube.googleapis.com/youtube/v3/search?maxResults=10&key=[YOUR_API_KEY]
    clicked() {
        fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&key=${APIKEY}`)
        .then((response) => response.json())
        .then((responseJson) => {
            const searchClick = responseJson.items.map(i => "https://www.youtube.com/embed/" + i.id.videoId);
            this.setState({searchClick: searchClick});
            console.log(this.state.searchClick);
        })
        .catch((error) => {
            console.error(error);
        });
    }

    render(){
        return(
            <div>
                <nav>
                <button className="button1" onClick={this.clicked}>Click for a random video</button>
                <div className="youtube">
                    {
                        this.state.searchClick.map((x) =>{
                            console.log(x);
                            return <iframe width="700" height="315" src={x} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen>
                            </iframe>
                        })
                    }                
                </div>
            
                </nav>
            </div>
        );
    }
}

export default YoutubeSearch;

