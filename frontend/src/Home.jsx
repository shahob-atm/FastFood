import {useDispatch, useSelector} from "react-redux";
import {getFoods} from "./redux/slices/foodSlice.js";
import{useEffect} from "react";
import {addToCart} from "./redux/slices/foodSlice.js";
import {Link} from "react-router-dom";
import "./components/Menu.css";

const Home = () => {

    const dispatch = useDispatch();
    const { foods, orders } = useSelector((state) => state.foods); // Redux state'ni o'qish

    useEffect(() => {
        dispatch(getFoods());
        localStorage.setItem("token", JSON.stringify("eyJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE3MzI3MDA3MTcsImV4cCI6MTczMjc4NzExNywiaWQiOiI0IiwidXNlcm5hbWUiOiJzaGFoYSIsInN1YiI6IjQifQ.mWff77QyDPe-gFv8Mpd9b72KGf3kR129KtIrpBYLNv4"));
    }, []);

    const isFoodInOrder = (foodId) => {
        return orders.some(order => order.foodId === foodId);
    };

    return (
        <>
            <div className={"p-3 d-flex align-items-center justify-content-start flex-column"}>
                {
                    foods.map((food) => (
                        <button
                            onClick={() => {
                                if (!isFoodInOrder(food.id)) {
                                    dispatch(addToCart(food)); // Buyurtmaga qo'shish
                                }
                            }}
                            key={food.id}
                            className={`btn mb-3 ${isFoodInOrder(food.id) ? "btn-secondary" : "btn-success"}`}>
                            {isFoodInOrder(food.id) ? "Added to Cart" : food.name}
                            <p className="rating">⭐ {food.rating}</p>
                        </button>
                    ))
                }
                <Link to={"/order"}>cart</Link>
            </div>
        </>
    )
};

export default Home;