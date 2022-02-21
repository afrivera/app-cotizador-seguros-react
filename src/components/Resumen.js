import styled from "@emotion/styled";
import { primerMayus } from "../helpers";

const ContenedorResumen = styled.div`
    padding: 1rem;
    text-align: center;
    background-color: #00838f;
    color: #fff;
    margin-top: 1rem;
`;

const Resumen = ( { datos:{ marca, year, plan} }) => {
  return (
    <ContenedorResumen>
        <h2>Resumen de Cotización</h2>
        <ul>
            <li>Marca: {primerMayus( marca ) }</li>
            <li>Plan: {primerMayus( plan ) }</li>
            <li>Año: { year }</li>
        </ul>
    </ContenedorResumen> 
  )
}

export default Resumen