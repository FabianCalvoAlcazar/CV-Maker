import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

export default function PracticalInformation(){
    const [practicalInputs, setPracticalInputs] = useState([{ 
        id: uuidv4(), 
        companyName: '', 
        companyTitle: '', 
        responsabilities: [{ id: uuidv4(), text: "" }], 
        startDate: '', 
        endDate: '' 
    }]);

    const [newResponsabilityText, setNewResponsabilityText] = useState("");

    function handleAddResponsability(inputId, event){
        event.preventDefault();
        const newResponsability = { id: uuidv4(), text: newResponsabilityText };
        const newInputs = practicalInputs.map(input => {
            if (input.id === inputId) {
                return { ...input, responsabilities: [...input.responsabilities, newResponsability] };
            }
            return input;
        });
        setPracticalInputs(newInputs);
        setNewResponsabilityText(""); // Clear the input field after adding
    }

    function handleChange(inputId, event) {
        const { name, value } = event.target;
        const newInputs = practicalInputs.map(input => {
            if (input.id === inputId) {
                return { ...input, [name]: value };
            }
            return input;
        });
        setPracticalInputs(newInputs);
    }

    function handleChangeResponsability(inputId, responsabilityId, event) {
        const { value } = event.target;
        const newInputs = practicalInputs.map(input => {
            if (input.id === inputId) {
                const newResponsabilities = input.responsabilities.map(responsability => {
                    if (responsability.id === responsabilityId) {
                        return { ...responsability, text: value };
                    }
                    return responsability;
                });
                return { ...input, responsabilities: newResponsabilities };
            }
            return input;
        });
        setPracticalInputs(newInputs);
    }

    function handleRemoveResponsability(inputId, responsabilityId, event) {
        event.preventDefault();
        const newInputs = practicalInputs.map(input => {
            if (input.id === inputId) {
                const newResponsabilities = input.responsabilities.filter(responsability => responsability.id !== responsabilityId);
                return { ...input, responsabilities: newResponsabilities };
            }
            return input;
        });
        setPracticalInputs(newInputs);
    }

    function handleAddNewPrancticalInformation(event) {
        event.preventDefault()
        setPracticalInputs([...practicalInputs, { 
            id: uuidv4(), 
            companyName: '', 
            companyTitle: '', 
            responsabilities: [{ id: uuidv4(), text: "" }], 
            startDate: '', 
            endDate: '' 
        }])
    }

    function handleDeletePracticalInformation(id, event) {
        event.preventDefault()
        const newInputs = practicalInputs.filter(item => item.id !== id)
        
        setPracticalInputs(newInputs)
    }

    return (
        <div className="practicalInformation">
            <form method="post">
                {practicalInputs.map((input) => (
                    <div key={input.id} className="practicalItem">
                        {practicalInputs.length > 1 && <button onClick={(event) => handleDeletePracticalInformation(input.id, event)}>Eliminar informacion</button>}
                        <input 
                            type="text" 
                            name="companyName"
                            className="companyName"
                            placeholder="Nombre de la empresa"
                            value={input.companyName}
                            onChange={(event) => handleChange(input.id, event)}
                        />

                        <input  
                            type="text" 
                            name="companyTitle" 
                            className="companyTitle"
                            placeholder="Titulo en la empresa"
                            value={input.companyTitle}
                            onChange={(event) => handleChange(input.id, event)}
                        />

                        <div className="responsabilityList">
                            {input.responsabilities.map((responsability) => (
                                <div key={responsability.id} className="responsabilityItem">
                                    <input
                                        type="text"
                                        name="responsability"
                                        className="responsability"
                                        value={responsability.text}
                                        onChange={(event) => handleChangeResponsability(input.id, responsability.id, event)}
                                    />
                                    <button onClick={(event) => handleRemoveResponsability(input.id, responsability.id, event)}>Eliminar</button>
                                </div>
                            ))}
                            <div>
                                <input 
                                    type="text" 
                                    name="responsabilityInput" 
                                    className="responsabilityInput"
                                    placeholder="Ingrese la responsabilidad"
                                    value={newResponsabilityText}
                                    onChange={(e) => setNewResponsabilityText(e.target.value)}
                                />
                                <button onClick={(event) => handleAddResponsability(input.id, event)}>Agregar</button>
                            </div>
                        </div>

                        <input
                            type="date"
                            name="startDate"
                            className="date"
                            placeholder="Fecha de ingreso"
                            value={input.startDate}
                            onChange={(event) => handleChange(input.id, event)}
                        />

                        <input
                            type="date"
                            name="endDate"
                            className="date"
                            placeholder="Fecha de salida"
                            value={input.endDate}
                            onChange={(event) => handleChange(input.id, event)}
                        />
                    </div>
                ))}
                <button onClick={handleAddNewPrancticalInformation}>Agregar informacion</button>
            </form>
        </div>
    )
}