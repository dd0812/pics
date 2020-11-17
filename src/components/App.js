import React from 'react';
import unsplash from '../api/unsplash';
import SeacrhBar from './SearchBar';
import ImageList from './ImageList';
import ReactListEx from './ReactListEx';

class App extends React.Component{ 
    state = {images: [] };
    onSearchSubmit = async (term) =>{ //other better way to handle api req (over promise .then) is using async-await 
        // console.log(term);
        const response = await unsplash.get('https://api.unsplash.com/search/photos',{ //this is an async n/w req call to the api to submit a query and await to fetch result
            params : {query: term},
            headers:{
                Authorization: 'Client-ID ZMuwaIm3QvC1d5l2ic89pA8dmPDtilI5lE8bSizhEsI'
            }
        });
        //.then(()=>{ //one of the way to handle api req : the arrow func is a callback that will be invoked with whatever data we get back from the unsplash api
        // });
        // console.log(response.data.results);
        this.setState({images: response.data.results});
    };    



    render(){
        return (
            <div className="ui container" style={{marginTop : '10px'}}>
                <SeacrhBar onSubmit={this.onSearchSubmit}/>
                <ImageList images={this.state.images}/>
                {/* <ReactListEx/> */}
            </div>
        );
    }
}

// const App = () => {
//     
// };

export default App;