import React from "react";
import Button from "@mui/material/Button";

export default function FormButtons({ onClick }) {
  return (
    <div className="form-buttons">
      <Button
        variant="contained"
        color="info"
        size="medium"
        hover
        onClick={onClick}
        sx={{
          width: "170px",
          justifyContent: "space-around",
          fontFamily: "Exo",
          fontSize: "0.7rem",
          borderRadius: "10px",
          paddingTop: "15px",
          paddingBottom: "15px",
        }}
      >
        <h3>Cancelar</h3>
      </Button>

      <Button
        variant="contained"
        color="success"
        size="medium"
        hover
        onClick={onClick}
        sx={{
          width: "170px",
          justifyContent: "space-around",
          fontFamily: "Exo",
          fontSize: "0.7rem",
          borderRadius: "10px",
          paddingTop: "15px",
          paddingBottom: "15px",
        }}
      >
        <h3>Cadastrar</h3>
      </Button>
    </div>
  );
}
