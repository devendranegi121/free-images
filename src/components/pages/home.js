import React, { Component } from 'react';
import Images from './imagesList'
class home extends Component {

     

    render() {
         
        return (

<div className='home'>
        <main className="searchbg text-center" id="content" >
          <div className='textc'>
          <h1>Stunning free images & royalty free stock</h1>
          <p>Over 1.8 million+ high quality stock images and videos shared by our talented community.</p>
          <form action='/search'>
          <div className="input-group mt-3">
            <input className="form-control" name='q' placeholder="Search images.." aria-label="Search image Name here" aria-describedby="basic-addon2" />

            <div className="input-group-append">
            <button type="submit" className="btn btn-primary mb-2">Submit</button>

            </div>
          </div>
          </form>
    </div>
          </main>
           

          <Images q='business' ></Images>

</div>
           
        );
    }
}

export default home;