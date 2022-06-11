import {React, useEffect, useState} from 'react';

// import { Container } from './styles';

function DadosEntrega() {

  const [CEP, setCEP] = useState([]);
  const [UF, setUF] = useState([]);
  const [cidade, setCidade] = useState([]);
  const [logradouro, setLogradouro] = useState([]);
  const [numero, setNumero] = useState([]);
  const [bairro, setBairro] = useState([]);
  const [complemento, setComplemento] = useState([]);
  const [dataEntrega, setDataEntrega] = useState([]);

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

  const handleChangeDataEntrega = (event) => {
    const { value } = event.target;
    setDataEntrega(value);
  };

  return (<>
  <form className="formCreate" onSubmit={handleSubmit}>
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
          <input
            type="text"
            name="UF"
            value={UF}
            disabled
            required
          ></input>

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
            required
          ></input>
          <label>Data de entrega:</label>
          <input
            type="text"
            name="dataentrega"
            value={dataEntrega}
            onChange={handleChangeDataEntrega}
            required
          ></input>
          <input className="sendLog" type="submit" value="Enviar" />
          </form>
  </>);
}

export default DadosEntrega;