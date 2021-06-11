import { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Switch from '@material-ui/core/Switch';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
    root: {
        margin: '0 auto',
        marginTop: theme.spacing(5),
        width: '960px',
    },
    cardContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: theme.spacing(5),
        marginBottom: theme.spacing(10),
    },
    card: {
        width: '300px'
    },
    cardTitle: {
        marginBottom: theme.spacing(2)
    }
})

class Dashboard extends Component {
    state = {
        online: true,
    };

    render() {
        const { classes } = this.props;

        return (
            <div className={classes.root}>
                <Typography variant="h2">
                    Welcome User!
                </Typography>

                <div className={classes.cardContainer}>

                    <Card className={classes.card}>
                        <CardContent>
                            <Typography
                                variant="h5"
                                className={classes.cardTitle}>
                                Online Mode
                            </Typography>
                            <Typography
                                variant="body1">
                                Is this application connected to the internet?
                            </Typography>
                        </CardContent>
                        <CardActions>
                            {/* connect state.online with Switch prop checked */}
                            <Switch />
                        </CardActions>
                    </Card>

                    <Card className={classes.card}>
                        <CardContent>
                            Card Content
                        </CardContent>
                        <CardActions>
                            Here goes the actions
                        </CardActions>
                    </Card>

                    <Card className={classes.card}>
                        <CardContent>
                            Card Content
                        </CardContent>
                        <CardActions>
                            Here goes the actions
                        </CardActions>
                    </Card>
                </div>

                <div>
                    <Typography variant="h3">
                        System Notifications:
                    </Typography>

                    {/* Read notification array */}
                </div>

            </div>
        );
    }
}

export default withStyles(styles)(Dashboard);