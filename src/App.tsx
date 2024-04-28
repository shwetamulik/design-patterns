import React, { Suspense, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
import { Container } from "./components/Container";
import UserInfo from "./components/user/UserList";
import { ResourceLoader } from "./components/ResourceLoader";
import UserList from "./components/user/UserList";
import { ProductList } from "./components/products/ProductList";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { OrderSummary } from "./components/products/OrderSummary";
import { PageNotFound } from "./components/PageNotFound";
import { Featured } from "./components/products/Featured";
import { New } from "./components/products/New";
import UserDetails from "./components/user/UserDetails";
import About from "./components/About";
import Profile from "./components/Profile";
const LazyAbout = React.lazy(()=> import('./components/About'))
const BASE_URL = "http://localhost:8080";

const Navigation = () => {
  return (
      <Routes>
        <Route path="/" Component={UserListContainer} />
        <Route path="user/:userId" Component={UserDetails}/>
        <Route path="products" Component={ProductListContainer} >
            <Route index Component={Featured}/>
           <Route path="featured" Component={Featured}/>
           <Route path="new" Component={New}/>
        </Route>
        <Route path="order-summary" Component={OrderSummary} />
        <Route path="about" element={
          <Suspense fallback="Loading....">
            <LazyAbout/>
          </Suspense>
        }/>
        <Route path="profile" Component={Profile}/>
        <Route path="*" Component={PageNotFound}/>
      </Routes>
  );
};

const UserListContainer = () => {
  return (
    <ResourceLoader resourceURL={`${BASE_URL}/users`} resourceName="userData">
      <UserList />
    </ResourceLoader>
  );
};
const ProductListContainer = () => {
  return (
    <ResourceLoader
      resourceURL={`${BASE_URL}/products`}
      resourceName="products"
    >
      <ProductList />
    </ResourceLoader>
  );
};

function App() {
  return (
    <>
    <BrowserRouter>
      <Navbar/>
      <Navigation />
    </BrowserRouter>
    
    </>
  );
}

export default App;
