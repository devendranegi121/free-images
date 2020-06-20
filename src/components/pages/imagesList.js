import React, { Component } from 'react';
class posts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [],
      searchInput: "",
      filterData: [],
      image_type: '',
      per_page:'0,20',
      imageid:'',
      totalimage:20
    }
    this.getImages = this.getImages.bind(this);
    this.loadMore=this.loadMore.bind(this);
  }
  componentDidMount() {

    const search = window.location.search;
    
    const params = new URLSearchParams(search);
    let id = params.get('id');
    
  
    this.setState({imageid:id}, function(){
        this.getImages();
    })
    
  }

  loadMore(e){alert(e.target.name.toLowerCase())
    this.setState({
      per_page: e.target.name.toLowerCase()
    }, function(){

    })
  }
  componentDidUpdate(){
    this.getImages();
  }
 
  getImages(e) {
    fetch('https://pixabay.com/api/?key=16808013-acbed925a2b44e665546cab79&q=' + this.props.q + '&per_page'+ this.state.per_page +'&orientation=' + this.props.orientation+ '&image_type=' + this.props.image_type + '&category=' + this.props.category + '&per_page=' +this.state.per_page )
      .then(response => response.json())
      .then(json => {
        this.setState({ images: json.hits, totalimage: json.total }, function () {
        
        })
      })
  }   
  render() {
    if (this.state.images) {
      var menuItem = this.state.images.map((d, i) => {
        return (
          <li key={d.id}>
            <a href={'/viewimage?id=' + d.id}>
              <img src={`${d.webformatURL}`} className="img-fluid" alt={d.tags} />
              <h3 className="h5 pt-2 sr-only">{d.tags}</h3>
            </a>
            <span className='user_by'>{d.user}</span>
            <a href={'/viewimage?id=' + d.id} className='downloadlink'>Download</a>
          </li>
        )
      })
    }
    return (
      <div className="row-fluid"><h1 className='text-capitalize p-2'>{this.props.q} Images</h1>
        <ul className='imageGrid'>{menuItem}</ul>

        <div className='mt-4 text-center'>
        {/* <nav aria-label="more image pageination">
  <ul class="pagination pagination-lg">
    <li class="page-item disabled">
      <a class="page-link" href="#" tabindex="-1" name='1-20' onClick={this.loadMore}>1</a>
    </li>
    <li class="page-item"><a class="page-link" href="#" name='21-40' onClick={this.loadMore}>2</a></li>
    <li class="page-item"><a class="page-link" href="#" name='41-60' onClick={this.loadMore}>3</a></li>
  </ul>
</nav> */}
                </div>
      </div>
    );
  }
}

export default posts;