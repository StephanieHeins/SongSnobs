import React from 'react';
import 'materialize-css/dist/css/materialize.min.css'

const Comment = () => {
    return (
        <div className="section">
        <div className="row">
          <div className="col s6 offset-s3">
              <div className="card horizontal blue-grey lighten-4">
                <div className="card-stacked">
                    <div className="card-title">Username</div>
                    <div className="card-content">
                        <p>Comment</p>
                    </div>
                    <div className="card-content right-align">
                        <p>Posted on: Date</p>
                    </div>
                    </div>
                </div>
            </div>
            </div>
        </div>
        );
    };
    
export default Comment;