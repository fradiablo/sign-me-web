import React, { Component } from 'react';
import logo from './excellent.jpg';
import './app.css';
import Album from '../album/album'

import HttpService from '../services/http-service';

const http = new HttpService();

class App extends Component {

    constructor(props) {
        super(props);

        this.state = {albums:[]};

        this.loadAlbums = this.loadAlbums.bind(this);
        this.albumList = this.albumList.bind(this);
        this.loadAlbums();
    }

	loadAlbums = () => {
        var self = this;
		http.getAlbums().then(data => {
            self.setState({albums: data})
        }, err => {

        });
    }

    albumList = () => {
        const list = this.state.albums.map((album) =>
            <div className="col-sm-4" key={album._id}>
                <Album title={album.title} artist={album.artist} imgUrl={album.imgUrl} />
            </div>
        );

        return list;
    }

    render() {
        return (
          <div className="app">
            <div className="app-header">
              <img src={logo} className="app-logo" alt="logo" />
              <h2>excellent...</h2>
            </div>
            <div className="container app-main">
            	<div className="row">
                    {this.albumList()}
                </div>

            </div>
          </div>
        );
    }
}

export default App;
