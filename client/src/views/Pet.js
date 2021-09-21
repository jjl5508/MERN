import React, { useEffect, useState } from "react";
import axios from "axios";
import { useHistory, useParams } from "react-router-dom";

const Pet = (props) => {
    const [pet, setPet] = useState(null);
    const { id } = useParams();
    const history = useHistory();

    useEffect(() => {
        axios
            .get("http://localhost:8000/api/pets/" + id)
            .then((res) => {
                console.log(res.data);
                setPet(res.data);
            })
            .catch((err) => {
                console.log(err.response);
            });
    }, [id]);

    const handleDelete = () => {
        axios
            .delete("http://localhost:8000/api/pets/" + id)
            .then((res) => {
                history.push("/pets");
            })
            .catch((err) => {
                console.log(err.response);
            });
    };

    if (pet === null) {
        return "Loading...";
    }

    return (
        <div>
            <div style={{ padding: 15 }}>
                <h1> Pet Shelter </h1>
                <h3> Details about: {pet.name}</h3>
                <button onClick={(e) => {
                    history.goBack();
                }}> Go back home</button>
                <div>
                    <p> Pet Type: </p>
                    <p>{pet.type}</p>
                </div>
                <div>
                    <p> Description: </p>
                    <p>{pet.description}</p>
                </div>
                <div>
                    <p>Skills: </p>
                    <p>{pet.skill1}</p>
                    <p>{pet.skill2}</p>
                    <p>{pet.skill3}</p>
                </div>
            </div>
            <div>
                <button
                    onClick={(e) => {
                        handleDelete();
                    }}
                >Adopt {pet.name} </button>
            </div>
        </div>
    );
};

export default Pet;