import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Button, Container} from 'react-bootstrap';
import './../style/carlist.css';
import LoadingSpiner from './helper/LoadingSpiner';

class CarList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            loading: true,
        };
    }

    componentDidMount() {
        const timer = setTimeout(() => {
            this.setState({loading: false})
        }, 2000);
    }

    render () {

        if (this.state.loading) {
            return (
              <LoadingSpiner />
            );
        }
        
        return (
            <div className='container container-list'>
                <div className="row car-lists">
                    {this.props.data.cars.map(o =>
                        <div className='col-md-3 col-card-list' key={o.id}>
                            <div className="card">
                                {o.image != null && <img className="card-img-top" src={o.image} alt="Card cap"></img>}
                                <div className="card-body">
                                    <h6 className="card-title">{o.name}</h6>
                                    <h5 className="card-title">Rp. {o.price} /hari</h5>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <Link to={`${o.id}`}>
                                        <div className="d-grid gap-2">
                                        <Button variant="flat">
                                            Pilih Mobil
                                        </Button>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>    
                    )}
                </div>
            </div>
        )
    }
}

export default CarList;
