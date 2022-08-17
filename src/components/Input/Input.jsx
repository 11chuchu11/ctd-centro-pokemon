import React,{useState, useRef, useEffect, useContext} from "react";
import { DataContext } from "../../context/ContextoFormulario";

const Input = ({ name, label, type = "text" }) => {
  // Aqui deberíamos acceder al estado global para poder obtener los datos
  // del formulario y una manera de actualizar los mismos.

  // También, utilizaremos un estado local para manejar el estado del input.
  const input = useRef(null)
  const [value, setValue] = useState("")
  const {dataPokemon, setDataPokemon} = useContext(DataContext)



  useEffect(()=>{
    console.log("valor: ",value)
    console.log("dataPokemon: ", dataPokemon )
  },[value])



  const onChange = (e) => {
    // Aquí deberíamos actualizar el estado local del input. 
    setValue(input.current.value)


  };

  const onBlur = (e) => {
    e.preventDefault();

    // Aqui deberíamos actualizar el estado global con los datos de
    // cada input.
    // TIP: Podemos utilizar el nombre de cada input para guardar
    // los datos en el estado global usando una notación de { clave: valor }
    setDataPokemon(prev => {return {
      ...prev, [name]:value
    }})
  };

  return (
    <div className="input-contenedor">
      <label htmlFor={name}>{label}</label>
      <input
        type={type}
        id={name}
        onChange={onChange}
        onBlur={onBlur}
        ref={input}
      />
    </div>
  );
};

export default Input;
