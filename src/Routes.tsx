import { Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/Home";
import { DefaultLayout } from "./layouts/DefaultLayout";
import { OrderConfirmedPage } from "./pages/OrderCompleted";
import { CompleteOrderPage } from "./pages/CompleteOrder";

export function Router() {
    return (
        <Routes>
            <Route path="/" element={<DefaultLayout />}>
                <Route path="/home" element={<HomePage />} />
                <Route path="/completeOrder" element={<CompleteOrderPage />} />
                <Route path="/orderConfirmed" element={<OrderConfirmedPage />} />
            </Route>             
        </Routes>
    )
}