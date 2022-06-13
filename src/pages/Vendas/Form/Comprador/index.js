import React from 'react';
import ModalNewComprador from 'components/ModalNewComprador';

// import { Container } from './styles';

function Comprador() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <ModalNewComprador
      open={open}
      handleClickOpen={handleClickOpen}
      handleClose={handleClose}
    />
  )
}

export default Comprador;