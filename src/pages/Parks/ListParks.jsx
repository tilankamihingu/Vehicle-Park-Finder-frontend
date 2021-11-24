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

    deletePark(id){
        ParkServices.deletePark(id).then(res => {
            this.setState({parks: this.state.parks.filter(park => park.id !== id)});
        });
    }

    editPark(id){
        this.props.history.push(`/update/${id}`);
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
                                <p>Address: {park.address}</p>
                                <p>Number of Slots: {park.slots}</p>
                                <p>Park Type: {park.type}</p>
                                <p>Rs.{park.price}</p>
                                <h3>Phone Number: {park.phone}</h3>
                                <div className="button-group">
                                    <button onClick={ () => this.editPark(park.id) } className="card-btn" >Edit</button>
                                    <button onClick={ () => this.deletePark(park.id) } className="card-btn" >delete</button>
                                </div>
                                
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
