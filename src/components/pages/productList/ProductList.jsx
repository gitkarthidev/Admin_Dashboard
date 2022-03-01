import React, { useState } from "react";
import "./productList.css";
import { DataGrid } from "@material-ui/data-grid";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
import { productRows } from "../../../dummyData";
import { Link } from "react-router-dom";

const ProductList = () => {
  const [data, setData] = useState(productRows);

  const handleClick = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const columns = [
    { field: "id", headerName: "ID", width: 100 },
    {
      field: "product",
      headerName: "Product",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="productListItem">
            <img className="productListImg" src={params.row.img} alt="" />
            {params.row.name}
          </div>
        );
      },
    },
    {
      field: "stock",
      headerName: "Stock",
      width: 130,
    },
    {
      field: "status",
      headerName: "Status",
      width: 120,
    },
    {
      field: "price",
      headerName: "Price",
      width: 160,
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/product/" + params.row.id}>
              <button className="productListEdit">Edit</button>
            </Link>
            <DeleteOutlineIcon
              onClick={() => handleClick(params.row.id)}
              className="productListDelete"
            />
          </>
        );
      },
    },
  ];

  return (
    <div className="productList">
      <DataGrid
        rows={data}
        columns={columns}
        pageSize={8}
        checkboxSelection
        disableSelectionOnClick
      />
    </div>
  );
};

export default ProductList;
