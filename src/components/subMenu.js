import React, { Component } from 'react';

class subMenu extends Component {
    constructor(props) {
        super(props);
       
    }

    render() {

        var subMenus = this.props.items.map((data, i) => {
            return (
                <a className={this.props.typemenu} href={`#${data.id}`} key={data.id} > 
                    {data.name}
                </a>
            )
        })
        return (
           
                <React.Fragment>
                {subMenus}
                </React.Fragment>
           
        );
    }
}

export default subMenu;