import React, { useState, useEffect } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faGoogle } from '@fortawesome/free-brands-svg-icons';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import CircularProgress from '@material-ui/core/CircularProgress';
import './LoginStyle.css';
// redux
import {
  loginwithfacebook,
  loginwithgoogle,
  login,
} from '../../action/user_actions';
import { useDispatch, useSelector } from 'react-redux';

const useStyles = makeStyles(theme => ({
  root: {
    marginTop: '80px',
    marginBottom: '40px',
    height: '80vh',
  },

  paper: {
    margin: theme.spacing(8, 4),
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

function Alert(props) {
  return <MuiAlert elevation={6} variant='filled' {...props} />;
}

const useSnackbarStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
}));

function LoginPageComponent() {
  const classes = useStyles();

  const user = useSelector(state => state.user);

  const [open, setOpen] = useState(false);
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');
  const [emailError, setemailError] = useState('');
  const [passwordError, setpasswordError] = useState('');
  const [altemail, setaltemail] = useState(false);
  const [altpassword, setaltpassword] = useState(false);
  const [disabledSubmit, setdisabledSubmit] = useState(true);

  useEffect(() => {
    if (user.error) {
      setOpen(true);
    }
  }, [user.error]);

  useEffect(() => {
    if (
      altemail &&
      !/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        email
      )
    )
      setemailError('Invalid Email Address');
    else setemailError('');
  }, [altemail, email]);

  useEffect(() => {
    if (altpassword && password.length < 6)
      setpasswordError('Password must have more than 5 characters');
    else setpasswordError('');
  }, [altpassword, password]);

  useEffect(() => {
    if (!emailError && !passwordError && email && password)
      setdisabledSubmit(false);
    else setdisabledSubmit(true);
  }, [passwordError, emailError, email, password]);

  const dispatch = useDispatch();

  const Login = e => {
    e.preventDefault();
    dispatch(login({ email: email, password: password }));
  };
  const loginWithGoogle = e => {
    e.preventDefault();
    dispatch(loginwithgoogle());
  };
  const loginWithFaceBook = e => {
    e.preventDefault();
    dispatch(loginwithfacebook());
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  if (user.isLoading)
    return (
      <CircularProgress
        style={{ marginTop: '25vw' }}
        color='secondary'
      ></CircularProgress>
    );
  return (
    <Grid container component='main' className='login-root'>
      {/* <CssBaseline /> */}
      <Grid item xs={false} sm={4} md={7} className='login-image' />
      <Grid item xs={12} sm={8} md={5}>
        <div className='login-paper'>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component='h1' variant='h5'>
            Sign in
          </Typography>
          <form className={classes.form} Validate>
            <TextField
              error={emailError}
              helperText={emailError}
              variant='outlined'
              margin='normal'
              required
              fullWidth
              id='email'
              label='Email Address'
              name='email'
              autoComplete='email'
              autoFocus
              value={email}
              onChange={e => {
                setemail(e.target.value);
                setaltemail(true);
              }}
              InputProps={{ className: 'voting_text' }}
              InputLabelProps={{
                className: 'voting_text',
              }}
            />
            <TextField
              error={passwordError}
              helperText={passwordError}
              variant='outlined'
              margin='normal'
              required
              fullWidth
              name='password'
              label='Password'
              type='password'
              id='password'
              autoComplete='current-password'
              value={password}
              onChange={e => {
                setpassword(e.target.value);
                setaltpassword(true);
              }}
              InputProps={{ className: 'voting_text' }}
              InputLabelProps={{
                className: 'voting_text',
              }}
            />
            <Button
              type='submit'
              fullWidth
              variant='contained'
              color='primary'
              className={classes.submit}
              onClick={Login}
              disabled={disabledSubmit}
            >
              Sign In
            </Button>
            {user.error ? (
              <Snackbar
                open={open}
                autoHideDuration={10000}
                onClose={handleClose}
              >
                <Alert onClose={handleClose} severity='error'>
                  {`${user.error}`}
                </Alert>
              </Snackbar>
            ) : (
              <div></div>
            )}
            <Grid container>
              <Grid item xs={12}>
                <Link to='/resetpassword' variant='body2'>
                  Forgot password?
                </Link>
              </Grid>
              <Grid item xs={12}>
                <Link to='/signup' variant='body2'>
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
            <Button
              style={{ marginTop: '25px', marginBottom: '25px' }}
              fullWidth
              variant='contained'
              color='secondary'
              startIcon={<FontAwesomeIcon icon={faGoogle} />}
              onClick={e => {
                loginWithGoogle(e);
              }}
            >
              Login with Google
            </Button>
            <Button
              fullWidth
              variant='contained'
              color='primary'
              startIcon={<FontAwesomeIcon icon={faFacebookF} />}
              onClick={e => {
                loginWithFaceBook(e);
              }}
            >
              Login with Facebook
            </Button>
          </form>
        </div>
      </Grid>
    </Grid>
  );
}

export default LoginPageComponent;
