import TextField from "@mui/material/TextField";
import DialogTitle from "@mui/material/DialogTitle";
import React from "react";
import Button from "@material-ui/core/Button";

const Produto = () => {
  return (    
      <form>
        <DialogTitle id="alert-dialog-title">
          {"Nova venda: Produtos"}
        </DialogTitle>
        <TextField
          id="outlined-basic"
          label="Pesquisa por nome do produto ou código"
          variant="outlined"
        />
        <thead>
          <tr>                       
            <th>Quantidade</th>
            <th>Total</th>
            <th></th>
          </tr>
        </thead>
        <Button variant="outlined">Próxima etapa</Button>
      </form>
    
  );
};

export default Produto;
