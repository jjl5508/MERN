import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import axios from "axios";

const EditPet = (props) => {
    const { id } = useParams();

    const [name, setName] = useState("");
    const [type, setType] = useState("");
    const [description, setDescription] = useState("");
    const [skill1, setSkill1] = useState("");
    const [skill2, setSkill2] = useState("");
    const [skill3, setSkill3] = useState("");


    const [errors, setErrors] = useState(null);

    const history = useHistory();

    useEffect(() => {
        axios
            .get("http://localhost:8000/api/pets/" + id)
            .then((res) => {
                console.log(res.data);
                setName(res.data.name);
                setType(res.data.type);
                setDescription(res.data.description);
                setSkill1(res.data.skill1);
                setSkill2(res.data.skill2);
                setSkill3(res.data.skill3);
            })
            .catch((err) => {
                console.log(err.response);
            });
    }, [id]);

    const handleEditPetSubmit = (e) => {
        e.preventDefault();

        const editedPet = {
            name: name,
            type: type,
            description: description,
            skill1: skill1,
            skill2: skill2,
            skill3: skill3,
        };

        axios
            .put("http://localhost:8000/api/pets/" + id, editedPet)
            .then((res) => {
                console.log(res.data);
                history.push(`/pets`);
            })
            .catch((err) => {
                setErrors(err.response.data.errors);
            });
    };
    return (
        <div>
            <h2>Edit Pet: {name}</h2>
            <button onClick={(e) => {
                    history.goBack();
                }}> Go back home</button>
            <form
                onSubmit={(e) => {
                    handleEditPetSubmit(e);
                }}
            >
                <div>
                    <label>Name: </label>
                    {errors?.name && (
                        <span style={{ color: "red" }}> {errors?.name?.message}</span>
                    )}
                    <input
                        onChange={(e) => {
                            setName(e.target.value);
                        }}
                        type="text"
                        value={name}
                    />
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
                    }} type="text" 
                        value = {type}/>
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
                    }} type="text"  value = {description}/>
                </div>

                <h1> Skills (optional): </h1>

                <div>
                    <label>Skill 1:</label>
                    <input onChange={(e) => {
                        setSkill1(e.target.value);
                    }} type="text" value = {skill1} />
                </div>

                <div>
                    <label>Skill 2:</label>
                    <input onChange={(e) => {
                        setSkill2(e.target.value);
                    }} type="text"  value = {skill2}/>
                </div>

                <div>
                    <label>Skill 3:</label>
                    <input onChange={(e) => {
                        setSkill3(e.target.value);
                    }} type="text"  value = {skill3}/>
                </div>
                <button>Update</button>
            </form>
        </div>
    );
};

export default EditPet;