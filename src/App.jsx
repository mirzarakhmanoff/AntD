import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Auth from "./components/auth/Auth";
import WishList from "./components/wishlist/WishList";
import Layout from "./components/layout/Layout";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Auth />}>
            <Route path="" element={<Home />} />
            <Route path="/wishlist" element={<WishList />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
