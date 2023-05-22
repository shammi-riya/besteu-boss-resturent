import React, { useEffect, useState } from 'react';
import Sectiontitle from '../../Component/Sectiontitle/Sectiontitle';
import Menu from '../../Shared/Menu/Menu';

const MenuItem = () => {
    const [menu, setMenu] = useState([])


    useEffect(() => {
        fetch("/menu.json")
            .then(res => res.json())
            .then(data => {
                const remaining = data.filter(singleData => singleData.category == "salad");
                setMenu(remaining);
            })
    }, [])







    return (
        <section>
            <Sectiontitle
                subtitle={"cheake it Out"}
                title={"From Our Menu"}

            >

            </Sectiontitle>

           <div className='grid lg:grid-cols-2  grid-cols-1 gap-8'>
           {
                menu.map(singlemenu=>
                <Menu
                singlemenu={singlemenu}
                key={singlemenu._id}
                ></Menu>)
            }
           </div>
        </section>
    );
};

export default MenuItem;