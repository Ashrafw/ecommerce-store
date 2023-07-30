import React from "react";
import { useQuery } from "@tanstack/react-query";
import { getProducts } from "../api/products";
const Home = () => {
  const { isLoading, isError, data, error } = useQuery({
    queryKey: ["first30products"],
    queryFn: getProducts,
  });
  console.log("query", data);
  return (
    <div>
      <div className=" flex flex-wrap gap-4 m-10">
        {data &&
          data.products.map((product) => <div className=" bg-slate-500 p-4 rounded-md">{product.title}</div>)}
      </div>
    </div>
  );
};

export default Home;
