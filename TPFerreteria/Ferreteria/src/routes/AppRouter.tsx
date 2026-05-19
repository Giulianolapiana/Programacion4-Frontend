import { BrowserRouter, Routes, Route } from "react-router-dom";

import Dashboard from "../pages/Dashboard/Dashboard";
import Products from "../pages/Products/Products";
import Clients from "../pages/Clients/Clients";
import Sales from "../pages/Sales/Sales";
import Stock from "../pages/Stock/Stock";
import Login from "../pages/Login/Login";
import Users from "../pages/Users/Users";

function AppRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/products" element={<Products />} />
                <Route path="/clients" element={<Clients />} />
                <Route path="/sales" element={<Sales />} />
                <Route path="/users" element={<Users />} />
                <Route path="/stock" element={<Stock />} />
                <Route path="/login" element={<Login />} />
            </Routes>
        </BrowserRouter>
    );
}

export default AppRouter;