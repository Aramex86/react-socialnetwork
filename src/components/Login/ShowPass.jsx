import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 25  + rand();
  const right = 15 + rand();

  return {
    top: `${top}%`,
    rigth: `${right}%`,
    transform: `translate(-${top}%, -${right}%)`,
  };
}



const useStyles = makeStyles((theme) => ({
  paper1:{
    position:'absolute',
    right:0,
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(2, 4, 3),
    width: 200

  },



  paper: {
    position: 'absolute',
    right:0,
    top:10,
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export default function SimpleModal() {
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const body = (
    <div style={modalStyle} className={window.innerWidth <= 400?classes.paper1:classes.paper}>
      <h2 id="simple-modal-title">LOGIN DATA</h2>
      <p id="simple-modal-description">
      login: aramexfrontend@mail.ru
      </p>
      <p id="simple-modal-description">
        pasword: 861786
      </p>
    </div>
  );

  return (
    <div className="showPass">
      <button type="button" onClick={handleOpen}>
        Hint
      </button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </div>
  );
}