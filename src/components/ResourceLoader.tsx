import axios from "axios";
import React, { ReactElement, ReactNode, useEffect, useState } from "react";

export interface ResourceLoader {
  resourceURL: string;
  resourceName: string;
  children: ReactNode;
}

export const ResourceLoader = ({
  resourceURL,
  resourceName,
  children,
}: ResourceLoader) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      return await axios.get(resourceURL).then((res) => {
        if (res.data) {
          setIsLoading(false);
          setData(res.data);
        }
      });
    };
    fetchData();
  }, [resourceURL]);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (!data) {
    return <p>"Error: No data"</p>;
  }

  return (
    <>
      {React.Children.map(children, (child: any) => {
        if (React.isValidElement(child)) {
          console.log("resourceName", resourceName);
          console.log("data", data);

          return React.cloneElement(child as ReactElement, {
            [resourceName]: data,
          });
        }
      })}
    </>
  );
};
