import React, {Component} from 'react';
import './album.css';

class Album extends Component {
    render() {
        return (
            <div className="album">
                <img className="card-img-top" src={this.props.imgUrl} alt="Album"></img>
                <div className="card-block">
                    <h4 className="card-title">{this.props.title}</h4>
                    <p className="card-text">{this.props.artist}</p>
                    <a href="#" className="btn btn-outline-secondary bs-override-btn">Add to Library</a>
                </div>
            </div>
        );
    }
}

export default Album;
