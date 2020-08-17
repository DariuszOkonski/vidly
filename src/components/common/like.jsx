import React from 'react'

const Like = () => {
    let classes = "fa fa-heart";
    classes += (!this.props.liked) ? "-o" : "";

    return (
        <i 
            onClick={this.props.onClick} 
            className={classes} 
            style={{cursor: 'pointer'}}
            aria-hidden="true"
        ></i>
    );
}
 
export default Like;