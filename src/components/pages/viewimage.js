import React, { Component } from 'react';

class viewimage extends Component {
constructor(props) {
    super(props);
    this.state={
            imageid:'',
            images:[],
    }
    this.getImages=this.getImages.bind(this);
}

componentDidMount(){
    const search = window.location.search;
    
    const params = new URLSearchParams(search);
    const id = params.get('id');
    this.setState({imageid:id}, function(){
        this.getImages();
    })
    
     
  }

    getImages(e) {
        fetch('https://pixabay.com/api/?key=16808013-acbed925a2b44e665546cab79&id=' + this.state.imageid )
          .then(response => response.json())
          .then(json => {
            this.setState({ images: json.hits[0] }, function () {
            console.log("id ",this.state.images)
            })
          })
      }   
    render() {
        return (
            <div className='container-fluid row mt-2 mb-2'>
             
                <div className="col-8 col-md-8">
                    <img src={this.state.images.webformatURL} className='full-width' alt={this.state.imageid.tags} />
                </div>
                <div className="col-8 col-md-4 ">
                    <h1 className='text-capitalize'>{this.state.images.tags}</h1>
                    <p><strong>Free images and videos you can use anywhere</strong> Pixabay is a vibrant community of creatives, sharing copyright free images and videos</p>
                    <p><a class="btn btn-primary"  href={this.state.images.largeImageURL + '?attachment'} role="button" download target>Download Image</a></p>
                <p><span class="badge badge-pill badge-primary">Photo clicked by user {this.state.images.user}</span></p>
                
                <p><a class="btn btn-primary"  href='https://pixabay.com/accounts/media/upload/' target='_blank' role="button" download target>Upload Images</a></p>
               
                </div>

               
                </div>
            
        );
    }
}

export default viewimage; 