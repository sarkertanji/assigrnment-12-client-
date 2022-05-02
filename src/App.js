import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import AddProductsAdmin from "./PAGES/ADMIN_Components/Add_Products_admin/AddProductsAdmin";
import AdminAllOrders from "./PAGES/ADMIN_Components/ALL_Orders/AdminAllOrders";
import MakeAdmin from "./PAGES/ADMIN_Components/Make_Admin/MakeAdmin";
import ManageProductsAdmin from "./PAGES/ADMIN_Components/Manage_Products/ManageProductsAdmin";
import AuthProvider from "./PAGES/Context/AuthProvider";
import Dashboard from "./PAGES/DASHBOARD/Dashboard";
import MyOrder from "./PAGES/DASHBOARD_COMPONENT/My_order/MyOrder";
import MyReviews from "./PAGES/DASHBOARD_COMPONENT/MY_REVIEWS/MyReviews";
import Payment from "./PAGES/DASHBOARD_COMPONENT/Payment_system/Payment";
import Explor from "./PAGES/EXPLOR/Explor";
import Home from "./PAGES/HOME/home/Home";
import Login from "./PAGES/LOGIN/login/Login";
import Register from "./PAGES/LOGIN/login/Register";
import PlaceOrder from "./PAGES/PLACE_ORDER/PlaceOrder";
import PrivateRoute from "./PAGES/PRIVATEROUTE/PrivateRoute";
import AdminRoute from "./PAGES/ADMIN_ROUTE/AdninRoute";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home></Home>} />
            <Route path="/home" element={<Home></Home>} />
            <Route path="/login" element={<Login></Login>} />
            <Route path="/register" element={<Register></Register>} />
            <Route path="/explor" element={<Explor></Explor>} />
            <Route
              path="dashboard"
              element={
                <PrivateRoute>
                  <Dashboard />
                </PrivateRoute>
              }
            >
              <Route path="myorder" element={<MyOrder></MyOrder>} />
              <Route path="review" element={<MyReviews></MyReviews>} />
              <Route path="payment" element={<Payment></Payment>} />
              <Route
                path="makeadmin"
                element={
                  <AdminRoute>
                    <MakeAdmin />
                  </AdminRoute>
                }
              />
              <Route
                path="addproduct"
                element={
                  <AdminRoute>
                    <AddProductsAdmin />
                  </AdminRoute>
                }
              />
              <Route
                path="manageproduct"
                element={
                  <AdminRoute>
                    <ManageProductsAdmin />
                  </AdminRoute>
                }
              />
              <Route
                path="allorders"
                element={
                  <AdminRoute>
                    <AdminAllOrders />
                  </AdminRoute>
                }
              />
            </Route>
            <Route
              path="/placeorder/:id"
              element={
                <PrivateRoute>
                  <PlaceOrder />
                </PrivateRoute>
              }
            />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
