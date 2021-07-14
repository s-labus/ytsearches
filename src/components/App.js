import React from 'react';
import Search from './Search';
import VideoDetail from './VideoDetail';
import youtubeapi from '../apis/youtubeapi';

class App extends React.Component {

    state = { videos: [], selected: null };

    onQuerySubmit = async query => {
        const res = await youtubeapi.get('/search', {
            params: {
                q: query
            }
        });

        this.setState({ videos: res.data.items, selected: res.data.items[0] });
        console.log(res);
    }

    render() {
        return (
            <div className="ui container ui-container">
                <Search onFormSubmit={this.onQuerySubmit} />
                <div className="ui grid">
                    <div className="seven wide column">
                        <VideoDetail video={this.state.selected} />
                    </div>
                </div>
            </div>
        );
    }
}


export default App;

//this is the core of our app

//I will use axios to fetch data from google youtube API

//semantic ui - cleaner visual presentation

//class and functional components