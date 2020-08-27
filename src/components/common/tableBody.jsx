import React, { Component } from 'react';
import _ from 'lodash';

class TableBody extends Component {

    renderCall = (item, column) => {
        if(column.content)
            return column.content(item);

        return _.get(item, column.path)
    };

    render() { 
        const { data, columns } = this.props;
        console.log(data);

        return ( 
            <tbody>
                {data.map(item => (
                    <tr>
                        {columns.map(column => <td>{this.renderCall(item, column)}</td>)}
                    </tr>
                ))}

            </tbody>
         );
    }
}
 
export default TableBody;