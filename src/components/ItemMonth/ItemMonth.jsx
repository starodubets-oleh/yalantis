import React from 'react'

import classNames from 'classnames';

import { mothsNamesMap } from '../../config/defaults';

import './styles.css';

const ItemMonths = ( {monthNumber, count, users, className} ) => {

    let colorClassName = 'grey';

    if (count > 2 && count <= 6) {
        colorClassName = 'blue';
    } else if (count >= 7 && count <= 10) {
        colorClassName = 'green';
    } else if (count >= 11) {
        colorClassName = 'red';
    }


    return (
        <div className={classNames('item', colorClassName, className)}>
            {mothsNamesMap[monthNumber]}
            <div className="users">
                {users.map(({firstName, lastName}, index) => {
                    return <div key={index} > {`${firstName} ${lastName}`} </div>
                })}
            </div>
        </div>
    )
}

export default ItemMonths;