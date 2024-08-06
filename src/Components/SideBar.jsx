import React from "react";
import { Stack } from "@mui/material";
import { categories } from "../utils/constant";
function SideBar({selectedCategory,setSelectedCategory}) {
console.log(selectedCategory)
  return (
    <Stack
      direction={"row"}
      sx={{
        overflowY: "auto",
        height: { sm: "auto", md: "95%" },
        flexDirection: { md: "column" },
      }}
    >
      {categories.map((category) => (
        <button
        key ={category.name}
          className="category-btn"
          onClick={()=>{setSelectedCategory(category.name)}}
          style={{
            background: category.name === selectedCategory && "#fc1503",
            color: "white",
          }}
        >
          <span
            style={{
              color: category.name === selectedCategory ? "white" : "red",
              marginRight: "15px",
            }}
          >
            {category.icon}
          </span>
          <span>{category.name}</span>
        </button>
      ))}
    </Stack>
  );
}

export default SideBar;
