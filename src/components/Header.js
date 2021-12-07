import React, { useState } from "react";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

const Header = () => {
  const [value, setValue] = useState(0);

  const handleChange = (e, newValue) => {
    setValue(newValue);
  };
  return (
    <div className="mt-4 mx-5 py-2 px-3 shadow bg-white">
      <div className="d-flex justify-content-between">
        <div className="p-2 text-gray">
          {" "}
          <select style={{ borderColor: "transparent", color: "#747474" }}>
            <option value="all">ALL TYPES</option>
            <option value="TYPE1">TYPE1</option>
            <option value="TYPE2">TYPE2</option>
            <option value="TYPE3">TYPE3</option>
          </select>
        </div>

        <div className="d-flex justify-content-center">
          <Box sx={{ width: "100%" }}>
            <Tabs value={value} onChange={handleChange} centered>
              <Tab style={{ fontWeight: "bold" }} label="Popular Products" />
              <Tab style={{ fontWeight: "bold" }} label="Low Price" />
              <Tab style={{ fontWeight: "bold" }} label="High Price" />
            </Tabs>
          </Box>
          {/* <div className="p-2 me-4">Popular Products</div>
          <div className="p-2">Low Prive</div>
          <div className="p-2 ms-4">High Price</div> */}
        </div>

        <div className="p-2">
          {" "}
          <select style={{ borderColor: "transparent", color: "#747474" }}>
            <option value="all">PRICE</option>
            <option value="PRICE1">PRICE1</option>
            <option value="PRICE2">PRICE2</option>
            <option value="PRICE3">PRICE3</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Header;
