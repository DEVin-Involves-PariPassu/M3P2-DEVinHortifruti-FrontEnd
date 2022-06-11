import { React, useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import { registerLocale, setDefaultLocale } from  "react-datepicker";
import ptBR from 'date-fns/locale/pt-BR';
import "react-datepicker/dist/react-datepicker.css";
import "./styles.css";

// import { Container } from './styles';

function DadosEntrega() {
  const [CEP, setCEP] = useState([]);
  const [UF, setUF] = useState([]);
  const [cidade, setCidade] = useState([]);
  const [logradouro, setLogradouro] = useState([]);
  const [numero, setNumero] = useState([]);
  const [bairro, setBairro] = useState([]);
  const [complemento, setComplemento] = useState([]);
  const [startDate, setStartDate] = useState(null);

  registerLocale('pt', ptBR)
  setDefaultLocale('pt');

  const handleChangeCEP = (event) => {
    const { value } = event.target;
    setCEP(value);
  };

  const handleChangeNumero = (event) => {
    const { value } = event.target;
    setNumero(value);
  };

  const handleChangeComplemento = (event) => {
    const { value } = event.target;
    setComplemento(value);
  };

  async function handleDataCEP() {
    if (CEP.length !== 8) {
      return;
    }
    try {
      const result = await fetch(`https://viacep.com.br/ws/${CEP}/json/`);
      const dados = await result.json();
      setLogradouro(dados.logradouro);
      setComplemento(dados.complemento);
      setBairro(dados.bairro);
      setCidade(dados.localidade);
      setUF(dados.uf);
    }
    catch {

    }    
  }

  const handleSubmit = async (event) => {
    try {
      event.preventDefault();
      event.target.checkValidity();

      console.log(startDate)
      if (!CEP) {
        alert("CEP é obrigatório");
        return;
      }

      if (CEP.length !== 8) {
        alert("CEP inválido");
        return;
      }

      if (!numero) {
        alert("Número é obrigatório");
        return;
      }
    } catch {}
  };
  return (
    <>
    <div className="containerLog">
      <form className="formLog" onSubmit={handleSubmit}>
        <label>CEP:</label>
        <input
          type="number"
          name="CEP"
          value={CEP}
          onChange={handleChangeCEP}
          onBlur={handleDataCEP}
          placeholder="Digite o CEP"
          required
        ></input>

        <label>Estado:</label>
        <input type="text" name="UF" value={UF} disabled required></input>

        <label>Cidade:</label>
        <input
          type="text"
          name="cidade"
          value={cidade}
          disabled
          required
        ></input>
        <label>Logradouro:</label>
        <input
          type="text"
          name="logradouro"
          value={logradouro}
          disabled
          required
        ></input>
        <label>Número:</label>
        <input
          type="number"
          name="numero"
          value={numero}
          onChange={handleChangeNumero}
          required
        ></input>
        <label>Bairro:</label>
        <input
          type="text"
          name="bairro"
          value={bairro}
          disabled
          required
        ></input>
        <label>Complemento:</label>
        <input
          type="text"
          name="complemento"
          value={complemento}
          onChange={handleChangeComplemento}
        ></input>
        <label>Data de entrega:</label>
        <DatePicker id="dataEntrega" locale={"pt"} placeholderText="Data de Entrega" selected={startDate} onChange={(date) => setStartDate(date)} dateFormat="dd/MM/yyyy" />
        
        <input className="sendLog" type="submit" value="Enviar" />
      </form>
      </div>
    </>
  );
}

export default DadosEntrega;
