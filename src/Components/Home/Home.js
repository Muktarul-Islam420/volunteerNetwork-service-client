import React, {useEffect, useState} from 'react';
import './Home.css';
import NavBar from '../NavBar/NavBar';
import {Button, Form, FormControl} from 'react-bootstrap';
import {Link} from 'react-router-dom';

const Home = () => {
    const [organizations, setOrganizations] = useState([]);

    useEffect(() => {
        fetch('https://agile-sierra-24479.herokuapp.com/products')
        .then(res => res.json())
        .then(data => setOrganizations(data))
    }, [])
   
    return (
        <>
        <NavBar />

        <div className="topbar">
            <h1 className="text-center mb-4">I grow by helping people in need.</h1>
            <Form inline className="justify-content-center">
                <FormControl style={{width:'350px', marginRight:'0'}} type="text" placeholder="Search" className="mr-sm-2" />
                <Button variant="primary">Search</Button>
            </Form> 
        </div>

        <div className="container">
            <div className="row">
                {
                        organizations.map(work =>
                        <div key={work.id} className="col-md-3 col-sm-6 col-xs-12 mb-3">
                            <Link to={`/vregistration/${work.id}`}>
                                <div className="img">
                                    <img src={work.photo} alt="" />
                                </div>
                                <div className="text-box">
                                <h2 className="title">{work.title}</h2>
                                </div>
                            </Link>
                        </div>
                    )
                }
            </div>
        </div>
        </>
    );
};

export default Home;