import { getEmptyMonthMap } from '../../utils/helpers';
import { createSelector } from 'reselect';

export const getDataUsers = (state) => state.reducer.data;

export const getUsersByMonthMap = createSelector(
    getDataUsers,
    (users) => {
        return users.reduce(
            (map, user) => {
                const month = new Date(user.dob).getMonth();
                
                map[month].push(user);
    
                return map;
            },
            getEmptyMonthMap(),
        );
    }
);
