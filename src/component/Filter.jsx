import React from 'react'
import ParkServices from '../services/ParkServices';
import './Filter.css';

function Filter() {
         
    return (
        <div className="search-box">
            <input type="text" 
            placeholder="search by town name"
            onChange={async (event) =>{
                const value = event.target.value;
                try {
                    const data = await ParkServices.search(value);
                    console.log(data);
                } catch (error) {
                    console.error(error);
                }
            }}
            />
            <button>search</button>
        </div>
        
    )
}

export default Filter
