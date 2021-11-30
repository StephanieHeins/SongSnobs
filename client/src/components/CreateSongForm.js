import React from 'react'
import 'materialize-css/dist/css/materialize.min.css'
 

export const CreateSong = () => {
    return (
        <div>
  <div className="row" style={{marginTop: "50px"}}>
    <form className="col s12">
      <div className="row">
        <div className="input-field col s6">
          <i className="material-icons prefix">headphones</i>
          <input id="icon_prefix" type="text" className="validate" />
          <label className="active" htmlFor="icon_prefix">Song Title</label>
        </div>
        <div className="input-field col s6">
          <i className="material-icons prefix">music_video</i>
          <input id="icon_telephone" type="tel" className="validate" />
          <label className="active" htmlFor="icon_telephone">Genre</label>
        </div>
      </div>
    </form>
  </div>

  <div className="row"> 
  <form className="col s12" action="#">
  <div className="row">  
  <div className="file-field input-field col s6">
    <div className="btn">
      <span>File</span>
      <input type="file" />
    </div>
    <div className="file-path-wrapper">
      <input className="file-path validate" type="text" placeholder="Upload your Lyrics" /> 
    </div>
  </div>
  <div className="input-field col s6">
          <i className="material-icons prefix">radio</i>
          <input id="icon_telephone" type="tel" className="validate" />
          <label className="active" htmlFor="icon_telephone">Link to Listen</label>
        </div>
  </div>
</form>
</div>

</div>

    )
}

export default CreateSong;

