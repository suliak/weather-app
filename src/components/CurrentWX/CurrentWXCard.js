import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CircularProgress from '@material-ui/core/CircularProgress';
import useWeatherAPI from 'hooks/useWeatherAPI';
import CurrentWXContent from './CurrentWXContent';
import useStyles from './CurrentWXCard.style';


function CurrentWXCard({ usZipCode }) {
  const classes = useStyles();
  const { loading, error, data } = useWeatherAPI(usZipCode);

  return (
    <Card className={classes.card} data-testid={`card-${usZipCode}`}>
      <CardContent className={classes.cardContent} >
        { loading && (
          <div className={classes.loading} data-testid={`cardloading-${usZipCode}`}>
            <CircularProgress color='secondary' className={classes.loading} /> 
          </div>
        )}
        { data  && (
          <CurrentWXContent data={data} />
        )}
        { error && <div data-testid='weather-fetch-error'>Weather fetch error</div> }
      </CardContent>
    </Card>
  )
}

export default CurrentWXCard;