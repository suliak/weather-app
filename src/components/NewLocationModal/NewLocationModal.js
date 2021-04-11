import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

function NewLocationModal({ open, addLocation, handleClose }) {
  const [ newZipCode, setnewZipCode ] = useState('');

  const handleChange = evt => {
    setnewZipCode(evt.target.value);
  }
  

  const handleAddLocation = () => {
    const zip = parseInt(newZipCode);
    addLocation(zip);
    handleClose();
  }

  const addDisabled = !/^\d{5}$/.test(newZipCode);

  return (
    <Dialog open={open} onClose={handleClose} data-testid='newlocationmodal'>
      <DialogTitle>Add weather location</DialogTitle>
      <DialogContent data-testid='newlocationmodal-content'>
        <DialogContentText>
          Enter a US zip code
        </DialogContentText>
        <TextField
          autoFocus
          margin='dense'
          label='US Zip code'
          onChange={handleChange}
          fullWidth
          inputProps={{ 'data-testid': 'uszipcode-input' }}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color='primary'>
          Cancel
        </Button>
        <Button data-testid='addlocation' onClick={handleAddLocation} color='primary' disabled={addDisabled}>
          Add Location
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default NewLocationModal;