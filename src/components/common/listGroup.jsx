import React from 'react';
import PropTypes from 'prop-types';

const ListGroup = (props) => {
    const { items, onItemSelect, textProperty, valueProperty, selectedItem } = props;

    return ( 
        <ul className="list-group">
            {/* <li className="list-group-item active">Hello</li> */}
            {
                items.map(item => 
                    <li
                        onClick={() => onItemSelect(item)} 
                        key={item[valueProperty]}
                        className={item === selectedItem ? "list-group-item active" : "list-group-item"}
                        style={{cursor: 'pointer'}}
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
    valueProperty: PropTypes.string.isRequired,
    selectedItem: PropTypes.object
}

export default ListGroup;