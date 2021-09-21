import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Pets = (props) => {

    const [pets, setPets] = useState([]);

    useEffect(() => {
        axios
            .get("http://localhost:8000/api/pets")
            .then((res) => {
                console.log(res.data);
                setPets(res.data);
            })
            .catch((err) => {
                console.log(err.response);
            });
    }, []);

    const handleDelete = (delId) => {
        axios
            .delete("http://localhost:8000/api/pets/" + delId)
            .then((res) => {
                const filteredPets = pets.filter((pet) => {
                    return pet._id !== delId;
                })
                setPets(filteredPets);
            })
            .catch((err) => {
                console.log(err.response);
            });
    }
    function compare(a, b) {
        if (a.type < b.type) {
            return -1;
        }
        if (a.type > b.type) {
            return 1;
        }
        return 0;
    }
    pets.sort(compare);
    return (
        <div>
            <h1>Pet Shelter</h1>
            <h3> These pets are looking for a good home </h3>
            <div>
                <Link to={'/pets/new'}> Add new Pet </Link>
            </div>
            {pets.map((pet) => {
                return (
                    <div key={pet._id} className = "pet">
                        <table>
                            <tr>
                                <th>Name:</th>
                                <th>Type: </th>
                                <th>Actions</th>
                            </tr>
                            <tr>
                                <td>{pet.name}</td>
                                <td> {pet.type} </td>
                                <td>
                                    <Link to={`/pets/${pet._id}`}> Details </Link>
                                    <Link to={`/pets/${pet._id}/edit`}> Edit </Link>
                                </td>
                            </tr>
                        </table>
                    </div>
                )
            })}
        </div>
    )
}

export default Pets;