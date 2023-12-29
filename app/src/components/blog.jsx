import React, { Component } from 'react';
// const axios = require('axios');
import axios from 'axios';

export default class Blog extends Component {
    state = {
        posts: [],
    }

    componentDidMount(){
        let thisvariable = this;
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then((response) => {
            this.setState({posts:response.data});
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
    }

    render(){
        const posts = this.state.posts;
        // const allposts = posts.map((post, index) => )
        return (
            <div style={{ marginLeft:200 }}>
                <h1>This is Blog Component</h1>
                <div class="media">
                <img src="..." class="mr-3" alt="..."/>
                <div class="media-body text-center">
                    <h5 class="mt-0">Media heading</h5>
                    <p>Will you do the same for me? It's time to face the music I'm no longer your muse. Heard it's beautiful, be the judge and my girls gonna take a vote. I can feel a phoenix inside of me. Heaven is jealous of our love, angels are crying from up above. Yeah, you take me to utopia.</p>
                </div>
                </div>
            </div>
        )
    }
}