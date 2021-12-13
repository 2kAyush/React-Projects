import React from "react";
import { useParams } from "react-router";
import { getItems } from "../dummy";
import AddOrRemoveButton from "../UI/AddRem";

export default function Items() {
  const { categoryId } = useParams();
  // console.log(categoryId);
  const items = getItems(Number(categoryId));
  // console.log(items);
  return (
    <div className="category-items">
      {items.map((item) => (
        <div className="category-item" key={item.id}>
          <img
            className="category-item-poster"
            src={item.poster}
            alt="poster"
          />
          <div className="category-item-title">{item.name}</div>
          <div className="category-item-price">{item.price}</div>
          <AddOrRemoveButton item={item} />
        </div>
      ))}
    </div>
  );
}
