import "react-toastify/dist/ReactToastify.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { plusCount, minusCount, getOrder } from "./redux/slices/orderSlice.js";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {useNavigate} from "react-router-dom";


const Order = () => {
    const dispatch = useDispatch();
    const { orders } = useSelector((state) => state.orders);
    const navigate = useNavigate();

    useEffect(() => {
    }, [dispatch]);

    const handleOrder = async () => {
        try {
            await dispatch(getOrder({ orderFoodDto: orders })).unwrap();
            toast.success("Buyurtma muvaffaqiyatli yuborildi!");
            setTimeout(() => navigate("/home"), 2000);
        } catch (error) {
            toast.error(`Buyurtma yuborishda xatolik`);
            console.log(error);
        }
    };

    return (
        <>
            <ToastContainer position="top-left"/>
            <div className={"container-xxl"}>
                <div className={"row"}>
                    <div className={"col-12"}>
                        <ul className={"list-group p-1"}>
                            {orders.map((order, index) => (
                                <li
                                    key={order.id}
                                    className={"list-group-item mb-3 rounded shadow-sm d-flex align-items-center justify-content-between p-2"}
                                >
                                    <img
                                        className={"rounded-circle"}
                                        src={`/api/file/${order.imageUrl}`}
                                        alt={order.name}
                                        width={80}
                                        height={80}
                                    />
                                    <div className={"fs-5 "} style={{ width: "250px" }}>
                                        {order.name}
                                    </div>
                                    <div className={"fs-6"} style={{ width: "100px" }}>
                                        {order.price} &nbsp; $
                                    </div>
                                    <div className={"d-flex align-items-center justify-content-between"}>
                                        <button
                                            className={"btn btn-toolbar fs-5"}
                                            onClick={() => dispatch(plusCount(index))}
                                        >
                                            +
                                        </button>
                                        <button className={"btn btn-toolbar fs-6"}>{order.count}</button>
                                        <button
                                            className={"btn btn-toolbar fs-5"}
                                            onClick={() => dispatch(minusCount(index))}
                                        >
                                            -
                                        </button>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className={"row"}>
                    <div className={"col-12 d-flex align-items-center justify-content-end p-3"}>
                        <button className={"btn btn-toolbar fs-5 mx-3"}>
                            Total:{" "}
                            {orders.reduce((acc, curr) => {
                                return acc + curr.price * curr.count;
                            }, 0)}{" "}
                            $
                        </button>
                        <button className={"btn btn-success fs-6 mx-3"} onClick={handleOrder} style={{width: "200px"}}>
                            order
                        </button>
                        <button className={"btn btn-warning fs-6"} style={{width: "200px"}} onClick={() => navigate("/home")}>go to home</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Order;
