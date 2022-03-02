import React, { useCallback, useState } from 'react';
import { changeName, exampleAction } from '../store/profile/actions';
import { FormGroup, FormControlLabel, Checkbox, TextField, Button } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


export default function Profile() {

  const { showName, name } = useSelector(state => state.profile);
  const dispatch = useDispatch();
  const [value, setValue] = useState(name);


  const toggleShowName = useCallback(() => {
    dispatch(exampleAction);

  }, [dispatch]);

  const handalInput = (event) => {
    setValue(event.target.value);
  };
  const handalButton = () => {
    dispatch(changeName(value));
    toast.success('Name has been change');
  }

  return (
    <div className='profile'>
    <ToastContainer />
      <h2>Profile</h2>
      <div>
        <FormGroup>
          <FormControlLabel control={<Checkbox checked={showName} onChange={toggleShowName} />
          } label="Toggle Name" />
        </FormGroup>
        {showName && <div>
          <TextField
            value={value}
            onChange={handalInput}
          />
          <Button
            variant="contained"
            sx={{ height: "55px" }}
            onClick={handalButton}> Change Name </Button>
        </div>}
      </div>
    </div>
  );
}
