import { Component } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';
import './style.css';

const styles = theme => ({
    textField: {
        marginBottom: theme.spacing(2)
    }
});

class Login extends Component {
    render() {
       const { onLoginFunction, classes } = this.props;

        return (
            <div className="login-container {}">
                <TextField
                    className={classes.textField}
                    label="Username"
                    variant="outlined"
                />
                <TextField
                    className={classes.textField}
                    label="Password"
                    variant="outlined"
                />
                <Button variant="contained" color="primary"
                    onClick={() => onLoginFunction(true)}>
                    Login
                </Button>
            </div>
        );
    }
}

export default withStyles(styles)(Login)