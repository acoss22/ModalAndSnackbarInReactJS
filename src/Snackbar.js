import React from 'react';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles';
import './Snackbar.css';

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        '& > * + *': {
            marginTop: theme.spacing(2),
        },
    },
}));

export default function CustomizedSnackbars() {

    const [openSucess, setOpen] = React.useState(false);
    const [openFail, setOpenFail] = React.useState(false);

    const handleClickSuccess = () => {
        setOpen(true);
       
    };

    const handleClickFail = () => {
   
        setOpenFail(true);
    };

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };

    return (
        <div className='container'>
            <Button className='item' variant="outlined" onClick={handleClickSuccess}>
                Open success snackbar
      </Button>
            <Button className='item' variant="outlined" onClick={handleClickFail}>
                Open Fail snackbar
      </Button>

            <Snackbar className='item' open={openSucess} autoHideDuration={2000} onClose={handleClose} anchorOrigin={{ vertical: "top", horizontal: "right" }}>

                <Alert onClose={handleClose} severity="success">
                    This is a success message!
                            </Alert>
            </Snackbar>

            <Snackbar className='item' open={openFail} autoHideDuration={2000} onClose={handleClose} anchorOrigin={{ vertical: "top", horizontal: "right" }}>

                <Alert onClose={handleClose} severity="error">
                    This is a error message!
                </Alert>
            </Snackbar>


        </div>
    );
}