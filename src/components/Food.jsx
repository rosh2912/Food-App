import React, { useState } from "react";
import { data } from "../Data/data.js";

const Food = () => {
  const [foods, setfoods] = useState(data);

  // filter type burgers/pizza/etc
  const filterType = (category) => {
    setfoods(
      data.filter((item) => {
        return item.category === category;
      })
    );
  };

  //filter by price
  const filterPrice = (price) => {
    setfoods(
      data.filter((item) => {
        return item.price === price;
      })
    );
  };

  return (
    <div className="max-w-[1640px] m-auto px-4 py-12">
      <h1 className="text-orange-600 font-bold text-4xl text-center">
        Top Rated Menu Items
      </h1>
      {/* Filter Row */}
      <div className="flex flex-col lg:flex-row justify-between">
        {/* filter type */}
        <div>
          <p className="font-bold text-gray-700">Filter Type</p>
          <div className="flex justify-between flex-wrap">
            <button onClick={()=> setfoods(data)} className="text-orange-600 hover:bg-orange-600 hover:text-white rounded-full text-black m-1 border-orange-600">
              All
            </button>
            <button onClick={()=> filterType('burger')} className="text-orange-600 hover:bg-orange-600 hover:text-white rounded-full text-black m-1 border-orange-600">
              Burgers
            </button>
            <button onClick={()=> filterType('pizza')}  className="text-orange-600 hover:bg-orange-600 hover:text-white rounded-full text-black m-1 border-orange-600">
              Pizza
            </button>
            <button onClick={()=> filterType('maincourse')}  className="text-orange-600 hover:bg-orange-600 hover:text-white rounded-full text-black m-1 border-orange-600">
              Main Course
            </button>
            <button onClick={()=> filterType('dessert')} className="text-orange-600 hover:bg-orange-600 hover:text-white rounded-full text-black m-1 border-orange-600">
              Desserts
            </button>
          </div>
        </div>
        {/* filter price  */}
        <div>
          <p className="font-bold text-gray-700">Filter Price</p>
          <div className="flex justify-between max-w-[390px] w-full">
            <button onClick={()=> filterPrice('₹')} className="text-orange-600 hover:bg-orange-600 hover:text-white rounded-full text-black m-1 border-orange-600">
              ₹
            </button>
            <button onClick={()=> filterPrice('₹₹')} className="text-orange-600 hover:bg-orange-600 hover:text-white rounded-full text-black m-1 border-orange-600">
              ₹₹
            </button>
            <button onClick={()=> filterPrice('₹₹₹')} className="text-orange-600 hover:bg-orange-600 hover:text-white rounded-full text-black m-1 border-orange-600">
              ₹₹₹
            </button>
            <button onClick={()=> filterPrice('₹₹₹₹')} className="text-orange-600 hover:bg-orange-600 hover:text-white rounded-full text-black m-1 border-orange-600">
              ₹₹₹₹
            </button>
          </div>
        </div>
      </div>
      {/* Display foods */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4">
        {foods.map((item, index) => (
          <div
            key={index}
            className="border shadow-lg hover:scale-105 duration-300 border-none rounded-lg"
          >
            <img
              src={item.img}
              alt={item.name}
              className="w-full h-[200px] object-cover rounded-t-lg"
            />
            <div className="flex justify-between px-2 py-4">
              <p className="font-bold">{item.name}</p>
              <p>
                <span className="bg-orange-500 text-white p-1 rounded-full">
                  {item.price}
                </span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Food;
