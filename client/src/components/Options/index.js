import React, { useEffect } from 'react';
import { useStoreContext } from '../../utils/GlobalState';
import { UPDATE_OPTIONS } from '../../utils/actions';
import { useQuery } from '@apollo/client';
import { QUERY_OPTIONS } from '../../utils/queries';
import { idbPromise } from '../../utils/helpers';
// import spinner from '../../assets/spinner.gif';
import Spinner from 'react-bootstrap/Spinner';
import Cart from '../Cart';

function Options() {
  const [state, dispatch] = useStoreContext();

  const { loading, data } = useQuery(QUERY_OPTIONS);

  useEffect(() => {
    if (data) {
      dispatch({
        type: UPDATE_OPTIONS,
        options: data.options,
      });
      data.options.forEach((option) => {
        idbPromise('option', 'put', option);
      });
    } else if (!loading) {
      idbPromise('products', 'get').then((options) => {
        dispatch({
          type: UPDATE_OPTIONS,
          options: options,
        });
      });
    }
  }, [data, loading, dispatch]);
  return (
    <div>
      {/* <div>{state.categories[1].options}</div> */}
      {/* <div>{state.options[0].name}</div> */}
      <div>{Object.keys(state).join(' ')}</div>
    </div>
  );
}

export default Options;
