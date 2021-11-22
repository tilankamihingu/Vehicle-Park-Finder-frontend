import React, { Component } from 'react';
import ParkServices from '../../services/ParkServices';
import './List.css';

export default class ListParks extends Component {
    constructor(props){
        super(props)

        this.state = {
            parks: []
        }
    }
    componentDidMount(){
        ParkServices.getParks().then((res) =>{
            this.setState({parks: res.data});
        })
    }
    render() {
        return (
            <div className="park-full">
            <div className="park-container">
            <div className="park-row">
                {
                    this.state.parks.map(park =>(
                        <div className="park-card" key={park.id}>
                            <img src={park.imageUrl} alt="" />
                            <div className="card-details">
                                <h2>{park.name}</h2>
                                <p>Email: {park.address}</p>
                                <p>Job Title: {park.slots}</p>
                                <p>Job Title: {park.type}</p>
                                <p>{park.price}</p>
                                <h3>Phone Number: {park.phone}</h3>
                                {/*<div className="button-group">
                                    <button onClick={ () => this.editEmployee(employee.id) } className="card-btn" >Edit</button>
                                    <button onClick={ () => this.deleteEmployee(employee.id) } className="card-btn" >delete</button>
                    </div>*/}
                                
                            </div>
                        </div>
                    ))
                }
            </div>
            </div>
            </div>
        )
    }
}
