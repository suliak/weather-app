import { makeStyles } from '@material-ui/core/styles';
import { cardSize } from 'styles/constants';

const useStyles = makeStyles((theme) => ({
  card: {
    height: cardSize.height,
    width: cardSize.width,
  },
  content: {
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  }
}));

export default useStyles;