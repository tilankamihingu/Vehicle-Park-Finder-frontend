import React, { Component } from 'react'
import ParkServices from '../../services/ParkServices';
import Left from '../../images/car.jpg';
import './UpdatePark.css';

class UpdatePark extends Component {
    constructor(props){
        super(props)

        this.state = {
            id: this.props.match.params.id,
            name: '',
            address: '',
            slots: '',
            type: '',
            price: '',
            phone: '',
            imageUrl: ''
        }
        this.changeNameHandler = this.changeNameHandler.bind(this);
        this.changeAddressHandler = this.changeAddressHandler.bind(this);
        this.changeSlotHandler = this.changeSlotHandler.bind(this);
        this.changeTypeHandler = this.changeTypeHandler.bind(this);
        this.changePriceHandler = this.changePriceHandler.bind(this);
        this.changePhoneHandler = this.changePhoneHandler.bind(this);
        this.changeImageHandler = this.changeImageHandler.bind(this);
        this.updatePark = this.updatePark.bind(this);
    }

    componentDidMount(){
        ParkServices.getParkById(this.state.id).then((res) =>{
            let park = res.data
            this.setState({
                name: park.name,
                address: park.address,
                slots: park.slots,
                type: park.type,
                price: park.price,
                phone: park.phone,
                imageUrl: park.imageUrl
            })
        });
    }

    updatePark = (e) =>{
        e.preventDefault();
        let park = {name: this.state.name, address: this.state.address, slots: this.state.slots, type: this.state.type, price: this.state.price, phone: this.state.phone, imageUrl: this.state.imageUrl};
        console.log('park =' + JSON.stringify(park));

       ParkServices.updatePark(park, this.state.id).then(res =>{
           this.props.history.push('/');
       });

    }

    changeNameHandler = (event) =>{
        this.setState({name: event.target.value})
    }
    
    changeAddressHandler = (event) =>{
        this.setState({address: event.target.value})
    }

    changeSlotHandler = (event) =>{
        this.setState({slots: event.target.value})
    }

    changeTypeHandler = (event) =>{
        this.setState({type: event.target.value})
    }

    changePriceHandler = (event) =>{
        this.setState({price: event.target.value})
    }

    changePhoneHandler = (event) =>{
        this.setState({phone: event.target.value})
    }

    changeImageHandler = (event) =>{
        this.setState({imageUrl: event.target.value})
    }

    render() {
        return (
            <div className="add-content">
                <div className="left-box">
                    <img src={Left} alt="" />
                </div>
            <div className="add-park">
                <h1>Add Park</h1>
                    <form>
                        <h2>Name</h2>
                        <input type="text" required placeholder="name" value={this.state.name} onChange={this.changeNameHandler} />
                        <h2>Address</h2>
                        <input type="text" required placeholder="address" value={this.state.address} onChange={this.changeAddressHandler} />
                        <h2>Number of Slots</h2>
                        <input type="text" required placeholder="number of slots" value={this.state.slots} onChange={this.changeSlotHandler} />
                        <h2>Park Type</h2>
                        <input type="text" required placeholder="park type" value={this.state.type} onChange={this.changeTypeHandler} />
                        <h2>Price</h2>
                        <input type="text" required placeholder="price" value={this.state.price} onChange={this.changePriceHandler} />
                        <h2>Phone Number</h2>
                        <input type="text" required placeholder="phone number" value={this.state.phone} onChange={this.changePhoneHandler} />
                        <h2>Image Url</h2>
                        <input type="text" required placeholder="image url" value={this.state.imageUrl} onChange={this.changeImageHandler} />
                        <button onClick={this.updatePark} className="send">Save</button>
                    </form>
            </div>
        </div>
        )
    }
}

export default UpdatePark;
