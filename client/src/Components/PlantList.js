import React from 'react'
import Plant from "./Plant"

function PlantList() {
    const plantList = [
        {
            id: 1,
            name: "pea"
        },
        {
            id: 2,
            name: "sunflower"
        }
    ]

    const [plants, setPlants] = React.useState(plantList)
    const [name, setName] = React.useState('')

    const ids = plantList.map(obj => {
        return obj.id
    })
    const [id, setId] = React.useState(Math.max(...ids))

    function handleChange(e) {
        setName(e.target.value)
    }

    function addPlant() {
        let newId = id + 1
        setId(newId)
        const newPlantsList = plants.concat({id: newId, name})
        setPlants(newPlantsList)
        setName('')
    }

    return (
    <div className="PlantList">
        {/* <Plant id={plantList[1].id} /> */}
        <input type="text" value={name} onChange={handleChange}></input>
        <button type="button" onClick={addPlant}>Add</button>
        {plants.map((plant) => (
            <Plant key={plant.id} id={plant.id} name={plant.name} />
        ))}
    </div>
    )
}

export default PlantList;
