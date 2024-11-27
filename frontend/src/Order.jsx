import "react-toastify/dist/ReactToastify.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { plusCount, minusCount, getOrder } from "./redux/slices/orderSlice.js";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const Order = () => {
    const dispatch = useDispatch();
    const { orders } = useSelector((state) => state.orders); // Redux state'ni o'qish

    // Tokenni localStorage'ga saqlash
    useEffect(() => {
    }, [dispatch]);

    // Buyurtma yuborish funksiyasi
    const handleOrder = async () => {
        try {
            // Thunk orqali buyurtmani yuborish
            await dispatch(getOrder({ orderFoodDto: orders })).unwrap();
            // Muvaffaqiyatli xabar
            toast.success("Buyurtma muvaffaqiyatli yuborildi!");
        } catch (error) {
            // Xato xabar
            toast.error(`Buyurtma yuborishda xatolik: ${error}`);
        }
    };

    return (
        <>
            <ToastContainer position="top-right"/> {/* Toaster komponent */}
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
                                        src={`http://localhost:8080/api/file/${order.imageUrl}`}
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
                        <button className={"btn btn-success w-25 fs-5"} onClick={handleOrder}>
                            order
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Order;
