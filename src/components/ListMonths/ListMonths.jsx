import React from 'react'

import {monthsArray} from '../../config/defaults';
import ItemMonth from '../ItemMonth/ItemMonth';

import './styles.css';

const ListMonths = ( {usersByMonthMap} ) => {
    
    return (
        <div className="months">
            {monthsArray.map((month) => {
                const users = usersByMonthMap[month];

                return (
                    <ItemMonth 
                        key={month}
                        count={users.length}
                        users={users}
                        monthNumber={month}
                        className="month-item"
                    />
                )
            })}
        </div>
    )
}

export default ListMonths;