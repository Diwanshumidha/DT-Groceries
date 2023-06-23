import { useState } from 'react';
import { Dialog, DialogTitle, DialogContent } from '@mui/material';
import Login from './Login';
import Register from './Register';

const Authentication = () => {
  const [open, setOpen] = useState(false);
  const [atlogin, setAtLogin] = useState(true);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <button onClick={handleClickOpen}>Open Popup</button>
      <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
        <DialogTitle>
          <div className="flex gap-4">
            <h6
              onClick={() => {
                setAtLogin(true);
              }}
              className={`${atlogin ? 'text-primary-green underline' : ''} cursor-pointer`}
            >
              Login
            </h6>
            <h6
              onClick={() => {
                setAtLogin(false);
              }}
              className={`${!atlogin ? 'text-primary-green underline' : ''} cursor-pointer`}
            >
              Sign Up
            </h6>
          </div>
        </DialogTitle>
        <DialogContent>
          {atlogin ? <Login /> : <Register />}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Authentication;
