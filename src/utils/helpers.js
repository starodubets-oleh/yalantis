import { monthsArray } from '../config/defaults';

export const getEmptyMonthMap = () => monthsArray.reduce(
    (map, month) => {
        map[month] = [];
        return map;
    },
    {},
);
