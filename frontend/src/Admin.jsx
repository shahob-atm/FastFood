import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {getFoods, getCategory} from "./redux/slices/adminSlice.js";
import {useEffect} from "react";
import {updateState} from "./redux/slices/adminSlice.js";
import Rodal from "rodal";
import "rodal/lib/rodal.css";


const Admin = () => {

    const dispatch = useDispatch();
    const { foods, isModalVisible, name, description, price, categoryId, categories } = useSelector((state) => state.admin); // Redux state'ni o'qish

    useEffect(() => {
        dispatch(getFoods());
        dispatch(getCategory());
    }, [dispatch]);

    return (
        <>
            <Rodal
                className={"rounded"}
                animation="zoom" // Animatsiya turi
                duration={500}
                height={400}
                visible={isModalVisible} onClose={() => dispatch(updateState({ stateName: "isModalVisible", value: false }))}>
                <div className={"p-3"}>
                    <input value={name} className={"form-control my-3"} placeholder={"Name..."} onChange={(e) => dispatch(updateState({stateName: "name", value: e.target.value}))}/>
                    <input value={description} className={"form-control mb-3"} placeholder={"Description..."} onChange={(e) => dispatch(updateState({stateName: "description", value: e.target.value}))}/>
                    <input value={price} className={"form-control mb-3"} placeholder={"Price..."} type="number" onChange={(e) => dispatch(updateState({stateName: "price", value: e.target.value}))}/>
                    <input className={"form-control mb-3"} type={"file"} onChange={(e) => dispatch(updateState({stateName: "file", value: e.target.files[0]}))}/>
                    <select className={"form-select mb-3"} defaultValue={categoryId} onChange={(e) => dispatch(updateState({stateName: "categoryId", value: e.target.value}))}>
                        <option value={""} disabled={true}>Category</option>
                        {
                            categories.map(category => (
                                <option key={category.id} value={category.id}>{category.name}</option>
                            ))
                        }
                    </select>
                    <button className={"btn btn-primary w-100"}>save</button>
                </div>
            </Rodal>
            <div className={"container-xxl rounded shadow-sm p-3 text-start mb-1"}>
                <Link className={"text-decoration-none"} to={"/home"}>Home</Link>
                <Link className={"mx-3 text-decoration-none"} to={"/login"}>Login</Link>
            </div>
            <div className={"container-xxl"}>
                <div className={"row p-3 d-flex align-items-center justify-content-end"}>
                    <button className={"btn btn-primary"} style={{width: "10%"}} onClick={() => dispatch(updateState({ stateName: "isModalVisible", value: true }))}>Add Food</button>
                </div>
                <div className={"col-12 p-2"}>
                <table className={"table table-hover table-secondary"}>
                        <thead>
                        <tr>
                            <th>Id</th>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Description</th>
                            <th>Price</th>
                            <th className={"text-center"}>Action</th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            foods.map((food)=>(
                                <tr key={food.id}>
                                    <td>{food.id}</td>
                                    <td>
                                        <img src={`/api/file/${food.imageUrl}`} className={"rounded-circle"} alt={food.name} width={50} height={50} />
                                    </td>
                                    <td>{food.name}</td>
                                    <td>{food.description}</td>
                                    <td>{food.price} {" $"}</td>
                                    <td className={"text-center"}>
                                        <button className={"btn btn-success mx-1"}>edit</button>
                                        <button className={"btn btn-danger mx-1"}>delete</button>
                                    </td>
                                </tr>
                            ))
                        }
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
};

export default Admin;