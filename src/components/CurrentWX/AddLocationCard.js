import Card from '@material-ui/core/Card';
import AddIcon from '@material-ui/icons/AddCircleOutline';
import useStyles from './AddLocationCard.style';


function AddLocationCard({ handleClick }) {
  const classes = useStyles();
  return (
    <Card className={classes.card} onClick={handleClick} data-testid='addlocationcard'>
      <div className={classes.content}>
        <AddIcon />
      </div>
    </Card>
  )
}


export default AddLocationCard;