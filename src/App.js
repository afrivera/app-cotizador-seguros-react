import Header from "./components/Header";
import styled from "@emotion/styled";
import Formulario from "./components/Formulario";
import { useState } from "react";
import Resumen from "./components/Resumen";
import Resultado from "./components/Resultado";

const Contenedor = styled.div`
  max-width: 600px;
  margin: 0 auto;
`;

const ContenedorFormulario = styled.div`
  background-color: #fff;
  padding: 3rem;
`;

const Mensaje = styled.p`
  background-color: rgb(127, 224, 237);
  margin-top: 2rem;
  padding: 1rem;
  text-align: center;
`;

const  App= ()=> {

  const [resumen, setResumen] = useState({})

  const { datos = null, cotizacion } = resumen;
  
  return (
    <Contenedor>
      <Header 
        titulo = { 'Cotizador de Seguros'}
      />

      <ContenedorFormulario>
        <Formulario 
          setResumen = { setResumen }
        />
        {
          datos && 
            <Resumen 
              datos = { datos }
            />
        }
        {
          cotizacion ?
                      <Resultado 
                        cotizacion = { cotizacion }
                      />
                      :
                      <Mensaje>Elige marca, año y tipo de seguro</Mensaje>

        }
      </ContenedorFormulario>

    </Contenedor>
  );
}

export default App;
