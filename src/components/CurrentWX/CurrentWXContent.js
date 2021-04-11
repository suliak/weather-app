import Typography from '@material-ui/core/Typography';
import useStyles from './CurrentWXContent.style.js';

function CurrentWXContent({ data }) {
  const classes = useStyles();
  const { name, main , wind} = data;
  const { temp, feels_like, humidity, pressure } = main;
  const { speed, deg } = wind;

  return (
    <div data-testid={`currentwx-content-${data.name}`}> 
      <Typography variant='h6' gutterBottom>
        { name}
      </Typography>
      <Typography gutterBottom component='div' className={classes.row}>
        <div>Temperature (&deg;F)</div><div>{temp}</div>
      </Typography>
      <Typography gutterBottom component='div' className={classes.row}>
        <div>Feels like (&deg;F)</div><div>{feels_like}</div>
      </Typography>
      <Typography gutterBottom component='div' className={classes.row}>
        <div>Wind Speed (knots)</div><div>{speed}</div>
      </Typography>
      <Typography gutterBottom component='div' className={classes.row}>
        <div>Direction</div><div>{deg}&deg;</div>
      </Typography>
      <Typography gutterBottom component='div' className={classes.row}>
        <div>Humidity</div><div>{humidity}%</div>
      </Typography>
      <Typography gutterBottom component='div' className={classes.row}>
        <div>Pressure (mbar)</div><div>{pressure}</div>
      </Typography>
    </div>
  )
}

export default CurrentWXContent;