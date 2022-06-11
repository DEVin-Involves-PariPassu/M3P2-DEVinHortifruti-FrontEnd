import React from "react";
import Logo from "../../assets/logo2_branca.png";
import { useNavigate } from "react-router-dom";
import { FiLogOut } from "react-icons/fi";
import Swal from "sweetalert2";

const Header = () => {
  const handleConfirm = () => {
    Swal.fire({
      title: "Tem certeza que deseja sair?",
      icon: "warning",
      width: "24rem",
      showCancelButton: true,
      confirmButtonColor: "#36a23f",
      cancelButtonColor: "#d33",
    }).then((result) => {
      if (result.isConfirmed) {
        navigate("/");
      }
    });
  };
  const navigate = useNavigate();
  return (
    <header>
      <nav className="nav-bar">
        <img
          className="white-logo"
          src={Logo}
          alt="logo"
          width="200"
          height="60"
          onClick={""}
        />
        <button className="btn-logout" title="Sair" onClick={handleConfirm}>
          <FiLogOut size="30" />
        </button>
      </nav>
    </header>
  );
};

export default Header;
