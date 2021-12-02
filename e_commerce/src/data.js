export const navbar = [
  {
    id: 1,
    label: "Dogs",
    name: "dogs",
  },
  {
    id: 2,
    label: "Cats",
    name: "cats",
  },
  {
    id: 3,
    label: "Horses",
    name: "horses",
  },
];

// with different pages you want to render cards of that specific category
// We have an array of pets -> which has all the categories
// the problem statement  is

// howshould I render different categories
// as we can create gloabal state using Context
// save out active tab in the global scope and then we'll know which category i am on
//
// filter out the categories from our pets array
export const pets = [
  {
    id: 1,
    name: "Buddy",
    available: true,
    price: 70000,
    poster:
      "https://images.unsplash.com/photo-1530281700549-e82e7bf110d6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2788&q=80",
    category: "dogs",
  },
  {
    id: 2,
    name: "Max",
    available: true,
    price: 60000,
    poster:
      "https://images.unsplash.com/photo-1552053831-71594a27632d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=724&q=80",
    category: "dogs",
  },
  {
    id: 3,
    name: "Thor",
    available: true,
    price: 60000,
    poster:
      "https://images.unsplash.com/photo-1543466835-00a7907e9de1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80",
    category: "dogs",
  },
  {
    id: 4,
    name: "Leo",
    available: true,
    price: 60000,
    poster:
      "https://images.unsplash.com/photo-1560807707-8cc77767d783?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1035&q=80",
    category: "dogs",
  },
  {
    id: 5,
    name: "Loki",
    available: true,
    price: 60000,
    poster:
      "https://images.unsplash.com/photo-1511044568932-338cba0ad803?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
    category: "cats",
  },
  {
    id: 6,
    name: "Oliver",
    available: true,
    price: 60000,
    poster:
      "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1743&q=80",
    category: "cats",
  },
  {
    id: 7,
    name: "Hulk",
    available: true,
    price: 160000,
    poster:
      "https://images.unsplash.com/photo-1598974357801-cbca100e65d3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
    category: "horses",
  },
  {
    id: 8,
    name: "Strange",
    available: true,
    price: 260000,
    poster:
      "https://images.unsplash.com/photo-1593179449458-e0d43d512551?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
    category: "horses",
  },
];

export const kailash = [{ name: "kailash" }];
