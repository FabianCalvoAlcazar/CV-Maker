import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

export default function EducationInformation() {
    const [inputs, setInputs] = useState([{ id: uuidv4(), school: '', title: '', date: '' }]);

    function handleAddClick(event) {
        event.preventDefault();
        setInputs([...inputs, { id: uuidv4(), school: '', title: '', date: '' }]);
    }

    function handleRemoveClick(id, event) {
        event.preventDefault();
        setInputs(inputs.filter((input) => input.id !== id));
    }

    function handleChange(id, event) {
        const newInputs = inputs.map((input) => {
            if (input.id === id) {
                return { ...input, [event.target.name]: event.target.value };
            }
            return input;
        });
        setInputs(newInputs);
    }

    function handleSubmit(event) {
        event.preventDefault();
        console.log("Data", inputs);
    }

    return (
        <div className="educationInformation">
            <form onSubmit={handleSubmit}>
                {inputs.map((input) => (
                    <div key={input.id} className="educationItem">
                        <input
                            type="text"
                            name="school"
                            className="school"
                            placeholder="Centro educativo"
                            value={input.school}
                            onChange={(event) => handleChange(input.id, event)}
                        />
                        <input
                            type="text"
                            name="title"
                            className="title"
                            placeholder="Titulo"
                            value={input.title}
                            onChange={(event) => handleChange(input.id, event)}
                        />
                        <input
                            type="date"
                            name="date"
                            className="date"
                            placeholder="Graduación"
                            value={input.date}
                            onChange={(event) => handleChange(input.id, event)}
                        />
                        <button onClick={(event) => handleRemoveClick(input.id, event)}>Eliminar</button>
                    </div>
                ))}
                <button id="addEducationInfo" onClick={handleAddClick}>
                    Agregar
                </button>
                <button type="submit">
                    Guardar
                </button>
            </form>
        </div>
    );
}