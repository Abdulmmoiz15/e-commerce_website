import React, { useState } from 'react';

const Main = () => {
    const [selected, setSelected] = useState('Automobiles');

    const handleSelect = (option) => {
      setSelected(option);
    };

    return (
        <div className="container d-flex flex-column flex-md-row justify-content-center align-items-start gap-3 my-4">
            {/* Sidebar */}
            <div className="d-none d-md-block">
                <ul className="list-group">
                    {[ 
                        'Automobiles', 
                        'Clothes and wear', 
                        'Home interiors', 
                        'Computer and tech', 
                        'Tools, equipments', 
                        'Sports and outdoor', 
                        'Animal and pets', 
                        'Machinery tools', 
                        'More category' 
                    ].map((option) => (
                        <li 
                            key={option} 
                            className={`list-group-item ${selected === option ? 'active' : ''}`} 
                            onClick={() => handleSelect(option)} 
                            style={{ cursor: 'pointer' }}
                        >
                            {option}
                        </li>
                    ))}
                </ul>
            </div>

            {/* Main Content */}
            <div className="position-relative flex-grow-1">
                <img 
                    src="src/Main.png" 
                    alt="Electronics" 
                    className="img-fluid rounded"
                />
                <div className="position-absolute top-50 start-50 translate-middle text-white text-center">
                    <h2 className="display-6 fw-light">Latest trending</h2>
                    <h1 className="display-4 fw-bold">Electronic items</h1>
                    <button className="btn btn-primary mt-3">Learn more</button>
                </div>
            </div>

            {/* Actions */}
            <div className="d-none d-md-flex flex-column gap-3">
                <div className="card p-3">
                    <p className="text-secondary">Hi, user</p>
                    <p className="text-muted">Let’s get started</p>
                    <button className="btn btn-primary w-100 mb-2">Join now</button>
                    <button className="btn btn-outline-secondary w-100">Log in</button>
                </div>
                <div className="bg-warning text-white p-3 rounded shadow">
                    <p className="mb-0">Get US $10 off <br /> with a new <br /> supplier</p>
                </div>
                <div className="bg-primary text-white p-3 rounded shadow">
                    <p className="mb-0">Send quotes with <br /> supplier <br /> preferences</p>
                </div>
            </div>
        </div>
    );
};

export default Main;
