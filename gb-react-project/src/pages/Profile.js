import React, { useCallback } from 'react';
import store from '../store';
import { exampleAction } from '../store/profile/actions';
import { FormGroup, FormControlLabel, Checkbox } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';


export default function Profile() {

  const { showName, name } = useSelector(state => state);
  const dispatch = useDispatch();


  const toggleShowName = useCallback(() => {
    dispatch(exampleAction);

  }, [dispatch]);


  return (
    <div className='profile'>
      <h2>Profile</h2>
      <div>
      <FormGroup>
        <FormControlLabel control={<Checkbox checked={showName} onChange={toggleShowName} />
        } label="Toggle Name" />
      </FormGroup>
      Name: {showName ? name : "Not Name"}
      </div>
    </div>
  );
}
