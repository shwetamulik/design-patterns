import axios from "axios";
import React, { ReactElement, useEffect, useState } from "react";

export const Container = ({ children }: any) => {
  const [userData, setUserData] = useState<any[]>([]);
  const fetchUserData = () => {
    axios
      .get("http://localhost:8080/users")
      .then((res) => setUserData(res.data));
  };
  useEffect(() => {
    fetchUserData();
  }, []);
  return (
    <>
    <nav>
        <a>Users</a>
        <a>Products</a>
    </nav>
    {React.Children.map(children, child => {
        if(React.isValidElement(child)){
            return React.cloneElement(child as ReactElement<any>, {userData})
        }
    })}
    </>
  )
};
