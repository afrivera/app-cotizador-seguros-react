import styled from "@emotion/styled";

const ResultadoCotizacion = styled.div`
    text-align: center;
    padding: .5rem;
    border: 1px solid #26c6da;
    background-color: rgb(127, 224, 237);
    margin-top: 1rem;
    position: relative;
`;

const TextoCotizacion = styled.p`
    color: #00838f;
    padding: 1rem;
    text-transform: uppercase;
    font-weight: bold;
    margin: 0;
`;

const Resultado = ( { cotizacion }) => {
    
    return (
        <ResultadoCotizacion >
            <TextoCotizacion>El Total es $ { cotizacion } </TextoCotizacion>

        </ResultadoCotizacion>
    )
}

export default Resultado;