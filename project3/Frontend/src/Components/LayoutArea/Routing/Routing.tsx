import { Navigate, Route, Routes } from "react-router-dom";
import Login from "../../AuthArea/Login/Login";
import Register from "../../AuthArea/Register/Register";
import DataList from "../../DataArea/DataList/DataList";
import Insert from "../../DataArea/Insert/Insert";
import Home from "../../HomeArea/Home/Home";
import PageNotFound from "../PageNotFound/PageNotFound";


function Routing(): JSX.Element {
    return (
        <div className="Routing">
			<Routes>
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/home" element={<Home />} />
            <Route path="/list" element={<DataList />} />
            <Route path="/add" element={<Insert />} />
            <Route path="/" element={<Navigate to="/home" />} />
            <Route path="*" element={<PageNotFound />} />
           

        </Routes>

        </div>
    );
}

export default Routing;
