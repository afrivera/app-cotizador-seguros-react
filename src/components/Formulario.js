import Opciones from "./Opciones";
import styled from "@emotion/styled";
import { useState } from "react";
import { calcularPlan, calculcarMarca, obtenerDiferenciaYear } from "../helpers";

const Campo = styled.div`
    display: flex;
    margin-bottom: 1rem;
    align-items: center;
`;

const Label = styled.label`
    flex: 0 0 80px;
`;

const Select = styled.select`
    display: block;
    width: 100%;
    padding: 1rem;
    border: 1px solid #e1e1e1;
    -webkit-appearance: none;
`;

const InputRadio = styled.input`
    margin: 0 1rem;
`;

const Boton = styled.button`
    background-color: #00838f;
    font-size: 16px;
    width: 100%;
    padding: 1rem;
    color: #fff;
    text-transform: uppercase;
    font-weight: bold;
    border: none;
    transition: background-color .3s ease;
    margin-top: 2rem;

    &:hover {
        background-color: #26c6da;
        cursor: pointer;
    }
`;

const Error = styled.div`
    background-color: red;
    color: white;
    padding: 1rem;
    width: 100%;
    text-align: center;
    margin-bottom: 2rem;
`;

const initialState = {
    marca:'',
    year: '',
    plan: ''
}

const Formulario = () => {
    const marcas = ['americano', 'europeo', 'asiatico']
    const anios = ['2022', '2021','2020', '2019', '2018', '2017', '2016', '2015','2014', '2013', '2012'];

    // states creados
    const [datos, setDatos] = useState(initialState);
    const [error, setError] = useState(false);

    // extrar los valores del state
    const { marca, year, plan} = datos;

    // leer los datos del formulario y colocarlos en el state
    const handleChange = e => {
        setDatos( {
            ...datos,
            [e.target.name]: e.target.value
        })
    }

    // cuando se hace submit
    const handleSubmit = e => {
        e.preventDefault();
        if( marca.trim() === '' || year.trim() === '' || plan.trim() === ''){
            setError( true );
            return;
        }

        // modificar el error a false
        setError( false );

        // se empieza con una base de 2k
        let resultado = 2000;

        // Obtener la diferencia de años
        const diferencia = obtenerDiferenciaYear( year );

        // por cada año se resta el 3%
        resultado -= ((diferencia * 3) * resultado) /100;

        // americano 15% ---> Incremento
        // asiatico 5%
        // europeo 30%
        resultado =  calculcarMarca( marca ) * resultado;

        // basico aumenta 20%
        // completo 50%
        const incrementoPlan = calcularPlan( plan );
        resultado = parseFloat( incrementoPlan * resultado).toFixed(2);
        console.log(resultado);

        // total
    }

  return (
    <form
        onSubmit={handleSubmit}
    >
        {
            error && 
                <Error>Todos Los Campos son obligatorios</Error>
        }
        <Campo>
            <Label>Marca</Label>
            <Select 
                name= 'marca'
                value={marca}
                onChange = { handleChange}
            >
                <option value='' disabled={ true } defaultValue>-- Seleccione --</option>
                {
                    marcas.map( (opcion, i) => (
                        <Opciones opcion= {opcion} key={i} />
                    ))
                }
            

            </Select>
        </Campo>
        <Campo>
            <Label>Año</Label>
            <Select 
                name="year"
                value={year}
                onChange = { handleChange}
            >
                <option value='' disabled={ true } defaultValue>-- Seleccione --</option>
                {
                    anios.map( (opcion, i) => (
                        <Opciones opcion= {opcion} key={i} />
                    ))
                }
               

            </Select>
        </Campo>
        <Campo>
            <Label>Plan</Label>
            <InputRadio 
                type='radio'
                name='plan'
                value='basico'
                checked= { plan === 'basico'}
                onChange = { handleChange}
            />Básico
            <InputRadio 
                type='radio'
                name='plan'
                value='completo'
                checked= { plan === 'completo'}
                onChange = { handleChange}
            />Completo
        </Campo>
        <Boton type="submit">Cotizar</Boton>
    </form>
  )
}

export default Formulario