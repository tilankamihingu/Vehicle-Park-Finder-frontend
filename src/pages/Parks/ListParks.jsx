import React, { Component } from 'react';
import ParkServices from '../../services/ParkServices';
import './List.css';

export default class ListParks extends Component {
    constructor(props){
        super(props)

        this.state = {
            parks: [],
            filtered: [],
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
            this.setState({parks: res.data, filtered: res.data});
        })
    }

    filterParks = (event) => {
        const search = event.target.value.toLowerCase();
        if(search.trim().length > 0){
            const filtered = this.state.parks.filter(park => {
                return park.name.toLowerCase().search(search) > 0
            });
            this.setState({
                filtered: filtered
            })
        }else{
            this.setState({
                filtered: this.state.parks
            })
        }
        
        
    }
    render() {
       
        return (
            <div className="park-full">
            <div className="park-container">
                <div className="search-box">
                    <input type="text"
                    placeholder="search by town name"
                    onChange={this.filterParks}
                    />
                    <button>search</button>
        </div>
            <div className="park-row">
                {
                    this.state.filtered.map(park =>(
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
