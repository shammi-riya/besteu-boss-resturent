// import React from 'react';
import Menu from '../../Shared/Menu/Menu';
import { Link } from 'react-router-dom';
// import BgMenu from '../../Shared/BgMenu';
import Favoritefood from '../../Shared/Favoritefood/Favoritefood';


const MenuCatogory = ({title,items,image,subtitle}) => {
    console.log(items);
    return (
        <div>
          {
            title &&  <Favoritefood
           
            title={title}
            image={image}  
            subtitle={subtitle}
                 
            >

            </Favoritefood>
          }
            
            <div className='grid lg:grid-cols-2  grid-cols-1 gap-8 my-12'>
                {
                    items.map(singlemenu =>
                        <Menu
                            singlemenu={singlemenu}
                            key={singlemenu._id}
                        ></Menu>)
                }
            </div>

           <div className='text-center my-10'>
          <Link to={`/order/${title}`}> <button className='py-2 px-3 border-b-2 bg-slate-200 hover:bg-slate-500 rounded-md border-[#1F2937]'>Order Your Favorite Food</button></Link>
           </div>
        </div>
    );
};

export default MenuCatogory;