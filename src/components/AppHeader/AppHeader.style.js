import { makeStyles } from '@material-ui/core/styles';
import { zIndex } from '../../styles/constants';

const useStyles = makeStyles((theme) => ({
  appBar: {
    [theme.breakpoints.up('sm')]: {
      position: 'relative',
      zIndex: zIndex.mainAppBar
    }
  },
  toolbar: theme.mixins.toolbar
}));

export default useStyles;
