import Products from "@/components/products/Products";
import { useFetch } from "@/hooks/useFetch";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Pagination } from "antd";
import Header from "@/components/Header/Header";

const Home = () => {
  const [skip, setSkip] = useState(0);
  const [count, setCount] = useState(4);
  const { data, loading } = useFetch(
    "/products",
    { limit: count, skip: skip * 4 },
    [skip, count]
  );
  const onShowSizeChange = (current, pageSize) => {
    console.log(current);
    setSkip(current);
    setCount(pageSize);
  };
  return (
    <div className="container mx-auto">
      <Products data={data?.products} loading={loading} />
      <div className="flex items-center justify-center my-8">
        <Pagination
          defaultCurrent={1}
          total={data?.total}
          defaultPageSize={4}
          onChange={onShowSizeChange}
        />
      </div>
    </div>
  );
};

export default Home;
