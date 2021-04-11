import { useState } from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import CurrentWXCard from './CurrentWXCard';
import AddLocationCard from './AddLocationCard';
import NewLocationModal  from 'components/NewLocationModal/NewLocationModal';
import useStyles from './CurrentWX.style';


function CurrentWX() {
  const classes = useStyles();
  const [ usZipCodes, setUsZipCodes ] = useState([96813]);
  const [ newLocationModalOpen, setNewLocationModalOpen ] = useState(false);

  const addLocation = newZipCode => {
    if (usZipCodes.indexOf(newZipCode) !== -1) { return; }
    setUsZipCodes([...usZipCodes, newZipCode]);
  }

  return (
    <div data-testid='currentwx-container'>
      <Container maxWidth='md'>
        <Paper className={classes.paper}>
          <Typography variant={'h5'}>Current Weather</Typography>
          <div className={classes.cardContainer}>
          { usZipCodes.map(usZipCode => (
            <CurrentWXCard
              key={usZipCode}
              usZipCode={usZipCode}
            />
          ))}
          <AddLocationCard handleClick={() => setNewLocationModalOpen(true)} />
          </div>
        </Paper>
      </Container>
      <NewLocationModal
        open={newLocationModalOpen}
        handleClose={() => setNewLocationModalOpen(false)}
        addLocation={addLocation}
      />
    </div>
  )
}

export default CurrentWX;