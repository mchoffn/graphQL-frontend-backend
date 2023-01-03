import { useMutation } from "@apollo/client";
import { useState } from "react";
import { FaDragon } from "react-icons/fa";
import { ADD_DRAGON } from "../mutations/dragonMutations";
import { GET_DRAGONS } from "../queries/dragonQueries";

export default function AddDragonModal() {
    const [name, setName] = useState('');
    const [family, setFamily] = useState('');
    const [fish, setFish] = useState('');
    const [wood, setWood] = useState('');
    const [iron, setIron] = useState('');
    const [gatheringTime, setGatheringTime] = useState('');

    const [addDragon] = useMutation(ADD_DRAGON, {
        variables: {name, family, fish, wood, iron, gatheringTime},
        update(cache, { data: { addDragon} }) {
            const { dragons } = cache.readQuery({
                query: GET_DRAGONS });

                cache.writeQuery({
                    query: GET_DRAGONS,
                    data: { dragons: [...dragons, addDragon] }
                });
        }
    })

    const onSubmit = (e) => { 
        e.preventDefault();
        if(name === '' || family === '' || fish === '' || wood === '' || iron === '' || gatheringTime === '') {
            return alert('Please fill in all the fields')
        }

        addDragon(name, family, fish, wood, iron, gatheringTime);

        setName('');
        setFamily('');
        setFish('');
        setWood('');
        setIron('');
        setGatheringTime('');

        console.log(name, family, fish, wood, iron, gatheringTime);
    }

    return (
        <>
            <button style={{backgroundColor: "#FFAE5E"}} type="button" className="btn addDragonBtn" data-bs-toggle="modal" data-bs-target="#addDragonModal">
            <div className="d-flex align-items-center">
                <FaDragon className="icon" />
                <div>Add Dragon</div>
            </div>
            </button>
    
            <div className="modal fade" id="addDragonModal" aria-labelledby="addDragonModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="addDragonModalLabel">Add Dragon</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                    <form onSubmit={onSubmit}>
                        <div className="mb-3">
                            <label className="form-label">
                                Name
                            </label>
                            <input type="text" className="form-control" id="name" value={name} onChange={ (e) => setName(e.target.value)} />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">
                                Dragon Family
                            </label>
                            <input type="text" className="form-control" id="family" value={family} onChange={ (e) => setFamily(e.target.value)} />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">
                                Fish
                            </label>
                            <input type="text" className="form-control" id="fish" value={fish} onChange={ (e) => setFish(e.target.value)} />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">
                                Wood
                            </label>
                            <input type="text" className="form-control" id="wood" value={wood} onChange={ (e) => setWood(e.target.value)} />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">
                                Iron
                            </label>
                            <input type="text" className="form-control" id="iron" value={iron} onChange={ (e) => setIron(e.target.value)} />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">
                                Gathering Time
                            </label>
                            <input type="text" className="form-control" id="gatheringTime" value={gatheringTime} onChange={ (e) => setGatheringTime(e.target.value)} />
                        </div>
    
                        <button data-bs-dismiss="modal" className="btn" style={{backgroundColor: "#FFAE5E"}} type="submit">Submit</button>
    
                    </form>
                </div>
                </div>
            </div>
            </div>
        </>
      )
}