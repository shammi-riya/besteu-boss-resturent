import React from 'react';

const Foodcard = ({items}) => {
    const {name,image,price,recipe} = items;
    return (
        <div className="relative group w-full h-96 overflow-hidden bg-black m-auto mt-36">
        <img className="object-cover w-full h-full transform duration-700 backdrop-opacity-100" src={image} />
        <h4 className='absolute top-0 right-0 bg-black text-white p-3'>${price}</h4>
        <div className="absolute w-full h-full shadow-2xl opacity-20 transform duration-500 inset-y-full group-hover:-inset-y-0"></div>
       
        <div className="absolute bg-gradient-to-t from-black w-full h-full transform duration-500 inset-y-3/4 group-hover:-inset-y-0">
          <div className="absolute w-full flex place-content-center">
            <p className="capitalize font-serif font-bold text-2xl text-center shadow-2xl text-white mt-12">{name}</p>
          </div>
          <div className="absolute w-full flex place-content-center mt-20">
            <p className="font-sans text-center w-4/5 text-white mt-5">{recipe}</p>
          </div>
         
          <button className="absolute left-1/4 bottom-4 bg-white text-black font-bold rounded-lg h-10 w-48">Add To Curd</button>
        </div>
       
      </div>
    );
};

export default Foodcard;