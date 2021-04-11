import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2)
  },
  cardContainer: {
    borderTop: `2px solid ${theme.palette.primary.main}`,
    paddingTop: theme.spacing(2),
    display: 'flex',
    flexWrap: 'wrap',
    '& > div': {
      margin: theme.spacing(1)
    }
  }
}));

export default useStyles;
