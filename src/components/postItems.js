import React, { Component } from 'react';

class postItems extends Component {
    constructor(props) {
        super(props);
       
    }

    render() {
       // console.log(this.props.items)
        var postItem = this.props.items.map((d, i) => {
                         
            return (
                <div className="col-12 col-sm-6 col-md-4  mb-4" id={d.id} key={d.id}>
                    <div className="border p-0 h-100">
                        <img src={`${d.previewURL}`} className="img-fluid" alt={d.tags} />
                        <div className="p-3">
                        <h3 className="h5 pt-2">{d.tags}</h3> 
                        </div></div>
                </div>
            )
            
        })
        return (
            <div className="row">
                {postItem}
            </div>
        );
    }
}

export default postItems;