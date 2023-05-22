import React from 'react';

const Menu = ({singlemenu}) => {

    const {image,recipe,name,price} = singlemenu;
    return (
        <div className='flex gap-3 space-y-3'>
           <img style={{borderRadius:"0px 200px 200px 200px"}} className='w-28' src={image} alt="" />
           <div>
            <h2 className='uppercase font-semibold text-lg'>{name}--------------</h2>
            <p>{recipe}</p>

           </div>
           <div>
            <p className='text-yellow-500'>${price}</p>
           </div>
        </div>
    );
};

export default Menu;