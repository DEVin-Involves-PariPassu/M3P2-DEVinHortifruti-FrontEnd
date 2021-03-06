import React from "react";
import Sidebar from "components/Sidebar";
import { useNavigate } from "react-router-dom";
import { FiLogOut } from "react-icons/fi";
import Swal from "sweetalert2";
import { useSetRecoilState } from "recoil";
import { signed } from "store/modules/auth/recoil";

const Header = () => {

  const setLogado = useSetRecoilState(signed);

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
        setLogado(false);
        navigate("/");
      }
    });
  };

  const navigate = useNavigate();
  return (
    <header>
      <nav className="nav-bar">
        <div className="white-logo">
          <Sidebar />
        </div>
        <button className="btn-logout" title="Sair" onClick={handleConfirm}>
          <FiLogOut size="30" />
        </button>
      </nav>
    </header>
  );
};

export default Header;
