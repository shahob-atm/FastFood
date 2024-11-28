import {useDispatch, useSelector} from "react-redux";
import {getFoods, postRating} from "../redux/slices/foodSlice.js";
import React, {useEffect} from "react";
import {addToCart} from "../redux/slices/orderSlice.js";
import ReactStars from "react-stars";
import "./FoodCard.css";
import "./Menu.css";

const Menu = () => {

    const dispatch = useDispatch();
    const { foods } = useSelector((state) => state.foods);
    const { orders } = useSelector((state) => state.orders);

    useEffect(() => {
        dispatch(getFoods());
    }, []);

    const isFoodInOrder = (foodId) => {
        return orders.some(order => order.foodId === foodId);
    };

    const handleRatingChange = (newRating, foodId) => {
        const roundedRating = Math.round(newRating);
        const data = {quantity: roundedRating, foodId: foodId}
        dispatch(postRating(data));
    };

    return (
        <>
            <div className="menu-container">
                <div className={"fs-6"} style={{color: "orange"}}>MENU</div>
                <p className={"fs-4"} style={{fontWeight: "bold", fontFamily: "Philosopher"}}>Food Full of Treaty Love</p>
                <span>
                    There are many things are needed to start the Fast Food Business. You need not only Just Food Stalls
                </span>
                <p>with Persons but also equipment make your marketing plane Effective.</p>
                <div className={"menu-grid"}>
                    {
                        foods.map((food) => (
                            <div className={"food-card my-3 mx-3"} key={food.id}>
                                <img
                                    src={`http://localhost:8080/api/file/${food.imageUrl}`}
                                    alt="Vegie Muffen"
                                    className={"food-image"}
                                />
                                <div className={"food-content"}>
                                    <div className={"food-div-title"}>
                                        <p className={"food-title"}>{food.name}</p>
                                        <p className={"food-price"}>{food.price}$</p>
                                    </div>
                                    <p className={"food-description"}>
                                        {food.description}
                                    </p>
                                    <div className={"food-actions"}>
                                        <button
                                            onClick={() => {
                                                if (!isFoodInOrder(food.id)) {
                                                    dispatch(addToCart(food));
                                                }
                                            }}
                                            className={`${isFoodInOrder(food.id) ? "add-button-2" : "add-button"}`}>
                                            +
                                        </button>
                                        <ReactStars
                                            count={5}
                                            value={food.rating}
                                            onChange={(newRating) => handleRatingChange(newRating, food.id)}
                                            size={30}
                                            activeColor={"#ffd700"}
                                        />
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    )
};

export default Menu;