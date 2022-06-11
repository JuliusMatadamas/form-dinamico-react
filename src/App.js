import React, { useState, useRef } from "react";
import './App.css';
import { v4 as uuidv4 } from 'uuid';

function App() {
    const [elements, setElements] = useState([
        {
            label : "Nombre: ",
            type : "text",
            name : "nombre",
            id : uuidv4()
        },
        {
            label : "Email: ",
            type : "email",
            name : "email",
            id : uuidv4()
        },
        {
            label : "Opción: ",
            type : "checkbox",
            name : "opcion",
            id : uuidv4()
        }
    ]);

    const refLabel = useRef(null);
    const refName = useRef(null);
    const refType = useRef(null);

    const handleRemoveElement = index => {
        const els = [...elements];
        els.splice(index, 1);
        setElements(els);
    }

    const handleAddElement = () => {
        let label = refLabel.current.value.trim();
        if (label.length == 0)
        {
            refLabel.current.focus();
            return;
        }

        let name = refName.current.value.trim();
        if (name.length == 0)
        {
            refName.current.focus();
            return;
        }

        let type = refType.current.value;

        let nuevoElemento = {"label":label,"type":type,"name":name,"id":uuidv4()};

        setElements([...elements, nuevoElemento]);
    }

    return (
        <div className="App">
            <div className={`border border-b-indigo-500 p-5 text-center w-100`}>
                <h1 className={`text-2xl`}>Form dinámico</h1>
                <p>Elaborado por: Julio Cesar Matadamas</p>
            </div>
            <div className={`grid grid-cols-2`}>
                <div className={`text-center w-50`}>
                    <h2 className={`text-2xl`}>Elementos a agregar</h2>
                    <div className={`mt-5 px-10 text-left`}>
                        <label htmlFor="">Ingrese el texto de la etiqueta</label>
                        <div>
                            <input ref={refLabel} type="text" className={`border h-10 order-gray-200 w-full`} />
                        </div>
                    </div>
                    <div className={`mt-5 px-10 text-left`}>
                        <label htmlFor="">Ingrese el nombre del input</label>
                        <div>
                            <input ref={refName} type="text" className={`border h-10 order-gray-200 w-full`} />
                        </div>
                    </div>
                    <div className={`mt-5 px-10 text-left`}>
                        <label htmlFor="">Seleccione el tipo de input</label>
                        <div>
                            <select ref={refType} className={`border h-10 order-gray-200 w-full`}>
                                <option value="text">text</option>
                                <option value="email">email</option>
                                <option value="checkbox">checkbox</option>
                            </select>
                        </div>
                    </div>
                    <div className={`mt-5`}>
                        <button className={`bg-gray-200 hover:bg-gray-300 border border-gray-300 px-5 py-2 rounded`} onClick={handleAddElement}>Agregar</button>
                    </div>
                </div>

                <div className={`p-5 text-center w-50`}>
                    <h2 className={`text-2xl`}>Formulario</h2>
                    { elements.map((e,i)=>{
                        return(
                            <div key={i} className={`border border-gray-200 mb-5 mx-auto p-5 rounded text-left w-50`}>
                                <label htmlFor={e.id}>{e.label}</label>
                                <div className={`grid grid-cols-2`}>
                                    <input type={e.type} className={`border border-gray-200 h-10 mr-10 rounded`} name={e.name} id={e.id}/>
                                    <button className={`border border-gray-500 rounded`} onClick={() => handleRemoveElement(i)}>Remover</button>
                                </div>
                            </div>
                        )
                    }) }
                </div>
            </div>
        </div>
    );
}

export default App;
