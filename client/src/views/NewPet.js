import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom'

const NewPet = (props) => {
    const [errors, setErrors] = useState(null);

    const [name, setName] = useState("");
    const [type, setType] = useState("");
    const [description, setDescription] = useState("");
    const [skill1, setSkill1] = useState("");
    const [skill2, setSkill2] = useState("");
    const [skill3, setSkill3] = useState("");
    

    const history = useHistory();

    const handleNewPetSubmit = (e) => {
        e.preventDefault();

        const NewPet = {
            name: name,
            type: type,
            description: description,
            skill1: skill1,
            skill2: skill2,
            skill3: skill3,

        };

        axios
            .post("http://localhost:8000/api/pets", NewPet)
            .then((res) => {
                console.log(res.data);
                history.push('/pets');
            })
            .catch((err) => {
                setErrors(err.response.data.errors);
                console.log(err.response.data);
            })
    }

    return (
        <div>
            <h1> Pet Shelter </h1>
            <button onClick={(e) => {
                    history.goBack();
                }}> Go back home</button>
            <form onSubmit={(e) => { handleNewPetSubmit(e) }}>
                <div>
                    <label>Pet Name:</label>
                    <div>
                        {errors?.name && (
                            <span style={{ color: "red " }}> {errors?.name?.message} </span>
                        )}
                    </div>
                    <input onChange={(e) => {
                        setName(e.target.value);
                    }} type="text" />
                </div>

                <div>
                    <label>Pet Type:</label>
                    <div>
                        {errors?.type && (
                            <span style={{ color: "red " }}> {errors?.type?.message} </span>
                        )}
                    </div>
                    <input onChange={(e) => {
                        setType(e.target.value);
                    }} type="text" />
                </div>
                
                <div>
                    <label>Pet description:</label>
                    <div>
                        {errors?.description && (
                            <span style={{ color: "red " }}> {errors?.description?.message} </span>
                        )}
                    </div>
                    <input onChange={(e) => {
                        setDescription(e.target.value);
                    }} type="text" />
                </div>
                <h1> Skills (optional): </h1>
                <div>
                    <label>Skill 1:</label>
                    <input onChange={(e) => {
                        setSkill1(e.target.value);
                    }} type="text" />
                </div>

                <div>
                    <label>Skill 2:</label>
                    <input onChange={(e) => {
                        setSkill2(e.target.value);
                    }} type="text" />
                </div>

                <div>
                    <label>Skill 3:</label>
                    <input onChange={(e) => {
                        setSkill3(e.target.value);
                    }} type="text" />
                </div>
                <button>Add Pet</button>
            </form>
        </div>
    )
}

export default NewPet;