import React from 'react';
import { useSelector } from 'react-redux';
import './Menu.css';

const Menu = () => {
    const menuItems = useSelector((state) => state.menu.items);

    return (
        <div className="menu-container">
            <h2>MENU</h2>
            <p>Food Full of Treaty Love</p>
            <div className="menu-grid">
                {menuItems.map((item) => (
                    <div className="menu-card" key={item.id}>
                        <img style={{width:"100%", height:"50%"}} src={item.image} alt={item.name} />
                        <div className="menu-card-content">
                            <h3>{item.name}</h3>
                            <p>{item.description}</p>
                            <p className="price">{item.price}</p>
                            <p className="rating">⭐ {item.rating}</p>
                            <button className="add-button">+</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Menu;
