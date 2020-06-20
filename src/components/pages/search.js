import React, { Component } from 'react';
import Images from './imagesList'
class search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            images: [],
            q: "",
            filterData: [],
            searchData: '',
            image_type: '',
            orientation: '',
            category: ''
        }
        this.searchItems = this.searchItems.bind(this);
        this.submistSearch = this.submistSearch.bind(this);
        this.searchItemsInput= this.searchItemsInput.bind(this);
    }

    componentDidMount(){
    const search = window.location.search;
    
    const params = new URLSearchParams(search);
    let id = params.get('q');
           
            if(!id){
              let path= decodeURI(window.location.pathname);
              let para= path.split('/');
              id=para[para.length-1];
              
          } 
          this.setState({searchData:id}, function(){
            
        })
    }

    searchItems(evt) {

        this.setState({
            [evt.target.name]: evt.target.value.toLowerCase()
        });

    }
    searchItemsInput(evt) {
        this.setState({
            [evt.target.name]: evt.target.value.toLowerCase()
        });
      }
          

    submistSearch(e) {
        this.setState({ searchData: this.state.q })
        e.preventDefault()
    }
    render() {
        return (
            <div>
                <div className='searchbginner'>
                    <main className="text-center" id="content" >
                        <div className='textinner'>
                            <form className="form-inline" onSubmit={this.submistSearch}>
                                <div className="form-check mb-2 mr-sm-2">
                                    <select className="form-control" name='image_type' onChange={this.searchItems}>
                                        <option value='all'>Image type</option>
                                        <option value='photo'>Photo</option>
                                        <option value='illustration'>Illustration</option>
                                        <option value='vector'>Vector</option>
                                    </select>
                                </div>
                                <div className="form-check mb-2 mr-sm-2">
                                    <select className="form-control" name='orientation' onChange={this.searchItems}>
                                        <option value='all'>Orientation</option>
                                        <option value='horizontal'>horizontal</option>
                                        <option value='vertical'>vertical</option>
                                    </select>
                                </div>

                                <div className="form-check mb-2 mr-sm-2">
                                    <select className="form-control" name='category' onChange={this.searchItems}>
                                        <option value='all'>Category</option>
                                        <option value='backgrounds'>backgrounds</option>
                                        <option value='fashion'>fashion</option>
                                        <option value='nature'>nature</option>
                                        <option value='science'>science</option>
                                        <option value='education'>education</option>
                                        <option value='feelings'>feelings</option>
                                        <option value='health'>health</option>
                                    </select>
                                </div>
                                <input type="text" name='q' onChange={this.searchItemsInput} className="lginput form-control mb-2 mr-sm-2" id="inlineFormInputName2"
                                    placeholder="Search your dream image" />
                                <button type="submit" className="btn btn-primary mb-2" onClick={this.submistSearch}>Search</button>
                            </form>
                        </div>
                    </main>
                </div>
               
                <Images q={this.state.searchData}
                    image_type={this.state.image_type}
                    orientation={this.state.orientation}
                    category={this.state.category}
                ></Images>
            </div>
        );
    }
}

export default search;