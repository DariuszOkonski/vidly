import React from 'react';
import PropTypes from 'prop-types';

const Like = (props) => {    
        let classes = "fa fa-heart";
        if(!props.liked)
            classes += "-o";

        return ( 
            <i 
                className={classes} 
                aria-hidden="true" 
                style={{cursor: 'pointer'}}
                onClick={props.onClick}
            ></i>
         );
}

Like.propTypes = {
    liked: PropTypes.bool,
    onClick: PropTypes.func.isRequired
}
 
export default Like;