import React from 'react';
import TableHeader from './tableHeader';
import TableBody from './tableBody';
import PropTypes from 'prop-types';

const Table = ({ columns, sortColumn, data, onSort }) => {
    return (  
        <table className="table">
            <TableHeader 
                columns={columns} 
                sortColumn={sortColumn} 
                onSort={onSort} 
            />

            <TableBody
                columns={columns}
                data={data}
            />
        </table>
    );
}
 
Table.propTypes = {
    columns: PropTypes.array.isRequired,
    sortColumn: PropTypes.object.isRequired,
    data: PropTypes.array.isRequired,
    onSort: PropTypes.func.isRequired,
}

export default Table;