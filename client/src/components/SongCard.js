import React from 'react';
import { Link } from 'react-router-dom';
import testimage from '../../../testfiles/testimage.jpeg'
import 'materialize-css/dist/css/materialize.min.css'

const SongCard = () => {
    return (
        <div className="section">
          <div className="container">
            <div className="col s10 m7">
                <h4 as={Link} to='/SingleSong' className="header">Song Title</h4>
                <div className="card horizontal">
                  <div className="card-image">
                    <img src={testimage}/>
                  </div>
                  <div className="card-stacked">
                    <div className="card-content">
                      <p className="truncate">Song lyrics go here...</p>
                    </div>
                    <div className="card-action">
                      <div>Posted by User on Date</div>
                      <div className="right-align">
                          5 Comments
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </div>
    );
};

export default SongCard;