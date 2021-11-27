import React from 'react';
import testimage from '../../../testfiles/testimage.jpeg'
import 'materialize-css/dist/css/materialize.min.css'

const SongInfo = () => {
    return (
        <div className="section">
        <div className="row">
          <div className="col s6 offset-s3">
              <div className="card horizontal">
                <div className="card-stacked">
                  <img src={testimage} />
                  <div className="card-title center-align">Song Title</div>
                  <div className="card-content">
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                        Lorem Ipsum has been the industry's standard dummy text...</p>
                        <a className="btn-floating halfway-fab waves-effect waves-light blue-grey"><i className="material-icons">add</i></a>
                  </div>
                </div>
              </div>
          </div>   
      </div> 
      </div>
        );
    };
    
    export default SongInfo;