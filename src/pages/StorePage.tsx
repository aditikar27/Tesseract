import { useNavigate } from "react-router-dom";

const StorePage = () => {
    const navigate = useNavigate();

    return (
        <div>
            <h1>Select a Food Area</h1>
            <div>
                <button onClick={() => navigate("/menu/milky-way")}>Milky Way</button>
                <button onClick={() => navigate("/menu/gymkhana")}>Gymkhana</button>
                <button onClick={() => navigate("/store/north-square")}>North Square</button>
                <button onClick={() => navigate("/store/gazebo")}>Gazebo</button>
            </div>
        </div>
    );
};

export default StorePage;
