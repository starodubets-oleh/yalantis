import React, { useEffect }from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { getData } from "./store/actions/action";
import { getUsersByMonthMap } from './store/selectors/selector'
import ListMonths from './components/ListMonths/ListMonths.jsx'

function App() {

  const dispatch = useDispatch();
  const monthsMap = useSelector(getUsersByMonthMap);
  
  useEffect(
    () => {
      dispatch(getData);
    },
    [dispatch],
  );

  return (
    <ListMonths
      usersByMonthMap={monthsMap}
    />

  );
}

export default App;
