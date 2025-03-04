import { useRef, useState } from "react";

const Form = () => {
    const [person, setPerson] = useState({
        name: "",
        age: 0,
    });

    // const nameRef = useRef(null);
    // const ageRef = useRef(null);

    // const person = { name: "", age: 0 };

    const handleSubmit = (event) => {
        event.preventDefault();

        // if (nameRef.current !== null) person.name = nameRef.current.value;
        // if (ageRef.current !== null) person.age = parseInt(ageRef.current.value);

        console.log(person);
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="mb-3">
                <label htmlFor="name" className="form-label">
                    Name
                </label>
                <input
                    onChange={(event) => setPerson({ ...person, name: event.target.value })}
                    value={person.name}
                    id="name"
                    type="text"
                    className="form-control"
                />
            </div>
            <div className="mb-3">
                <label htmlFor="age" className="form-label">
                    Age
                </label>
                <input
                    onChange={(event) => setPerson({ ...person, age: parseInt(event.target.value) })}
                    value={person.age}
                    id="age"
                    type="number"
                    className="form-control"
                />
            </div>
            <button className="btn btn-primary" type="submit">
                Submit
            </button>
        </form>
    );
};

export default Form;
