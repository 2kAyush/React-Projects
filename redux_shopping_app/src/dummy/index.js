import data from "./data.json";

export const getCategories = () => {
  return Array.from(data.categories);
};

export const getItems = (categoryId) => {
  return Array.from(
    data.items.filter((item) => item.categoryId === categoryId)
  );
};
