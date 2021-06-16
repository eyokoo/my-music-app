import { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import Slider from '@material-ui/core/Slider';
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
    },
    FormControl: {
        minWidth: 120,
    }
})

class Dashboard extends Component {
    marks = [
        {
            value: 0,
            label: '0'
        },
        {
            value: 20,
            label: '20'
        },
        {
            value: 40,
            label: '40'
        },
        {
            value: 60,
            label: '60'
        },
        {
            value: 80,
            label: '80'
        },
        {
            value: 100,
            label: '100'
        }
    ];

    state = {
        online: true,
        volume: 20,
        quality: 2, //normal
        notifications: [
            {
                display: false,
                text: 'Your application is offline. You won\'t be able to share or stream music to other devices.'
            },
            {
                display: false,
                text: 'Listening to music at a high volume could cause long-term hearing loss.'
            },
            {
                display: false,
                text: 'Music quality is degraded. Increase quality if your connection allows it.'
            },
        ]
    };

    onOnlineChange = (online) => {
        const { notifications } = this.state;
        notifications[0].display = !online;

        this.setState( {
            online,
            notifications
        });
    }

    onVolumeChange = (volume) => {
        const { notifications } = this.state;
        notifications[1].display = volume > 80;

        this.setState( {
            volume,
            notifications
        });
    }

    onQualityChange = (quality) => {
        const { notifications } = this.state;
        notifications[2].display = quality === 1; //low
        
        this.setState( {
            quality,
            notifications
        });
    }

    render() {
        const { classes } = this.props;
        const { online, volume, quality, notifications } = this.state;

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
                            <Switch
                                checked={online}
                                onChange={(event) => this.onOnlineChange(event.target.checked)}/>
                        </CardActions>
                    </Card>

                    <Card className={classes.card}>
                        <CardContent>
                            <Typography
                                variant="h5"
                                className={classes.cardTitle}>
                                Master Volume
                            </Typography>
                            <Typography
                                variant="body1">
                                Overrides all other sounds settings in the application
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Slider
                                step={10}
                                marks={this.marks}
                                min={0}
                                max={100}
                                value={volume}
                                onChange={(_, value) => this.onVolumeChange(value)}
                                aria-labelledby="continuous-slider" />
                        </CardActions>
                    </Card>
                    <Card className={classes.card}>
                        <CardContent>
                            <Typography
                                variant="h5"
                                className={classes.cardTitle}>
                                Sound Quality
                            </Typography>
                            <Typography
                                variant="body1">
                                Manually control the music quality in event of poor connection
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <FormControl className={classes.FormControl}>
                                <InputLabel id="sound-quality-select-label">
                                    Sound Quality
                                </InputLabel>
                                <Select
                                    labelId="sound-quality-select-label"
                                    value={quality}
                                    onChange={(event) => this.onQualityChange(event.target.value)}>
                                    <MenuItem value={1}>Low</MenuItem>
                                    <MenuItem value={2}>Normal</MenuItem>
                                    <MenuItem value={3}>High</MenuItem>
                                </Select>
                            </FormControl>
                        </CardActions>
                    </Card>
                </div>
                <div>
                    <Typography variant="h3">
                        System Notifications:
                    </Typography>
                    {
                        notifications.map((notification, index) => {
                            if (notification.display) {
                                return (
                                    <p key={index}>
                                        {notification.text}
                                    </p>
                                );
                            }
                            return null;
                        })
                    }
                </div>

            </div>
        );
    }
}

export default withStyles(styles)(Dashboard);