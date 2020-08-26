import React from 'react';
import PropTypes from 'prop-types';

const ListGroup = (props) => {
    const { items, onItemSelect, textProperty, valueProperty } = props;

    return ( 
        <ul className="list-group">
            <li className="list-group-item active">Hello</li>
            {
                items.map(item => 
                    <li 
                        key={item[valueProperty]}
                        className="list-group-item"
                    >{item[textProperty]}</li>                    
                )
            }
        </ul>
     );
}

ListGroup.defaultProps = {
    textProperty: 'name', 
    valueProperty: '_id'
}

ListGroup.propTypes = { 
    items: PropTypes.array.isRequired, 
    onItemSelect: PropTypes.func.isRequired,
    textProperty: PropTypes.string.isRequired,
    valueProperty: PropTypes.string.isRequired
}

export default ListGroup;