
import { Helmet } from 'react-helmet-async';
import BgMenu from '../Shared/BgMenu';
import image from '../../assets/menu/banner3.jpg'
import image2 from '../../assets/home/chef-service.jpg'
import image3 from '../../assets/menu/dessert-bg.jpeg'
import image4 from '../../assets/menu/pizza-bg.jpg'
import image5 from '../../assets/menu/salad-bg.jpg'
import image6 from '../../assets/menu/soup-bg.jpg'

import useMenu from '../../Hook/Usemenu';
import Sectiontitle from '../Component/Sectiontitle/Sectiontitle';
import MenuCatogory from './MenuCatogory/MenuCatogory';
import Favoritefood from '../Shared/Favoritefood/Favoritefood';

const Menu = () => {
    const [menu] = useMenu();
    const salad = menu.filter(item=>item.category=="salad")
    const drinks = menu.filter(item=>item.category=="drinks")
    const popular = menu.filter(item=>item.category=="popular")
    const pizza = menu.filter(item=>item.category=="dessert")
    const offerd = menu.filter(item=>item.category=="offered")

    return (
        <div>
            <Helmet>
                <title>Home|Menu</title>
               
            </Helmet>




            <BgMenu
            image = {image}
            title={"Our Menu"}
            subTitle = {"Would You Like To Try A Dish"}
            ></BgMenu>



            <Sectiontitle
            subtitle={"Dont Miss"}
            title={"Todays Offerd"}
            >

            </Sectiontitle>




          <MenuCatogory
          items={offerd}
          title={"desutrs"}
          image={image}
          subtitle={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}
          >
          </MenuCatogory>


          <MenuCatogory
          items={salad}
          title={"salad"}
          image={image5}
          subtitle={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}
          >
          </MenuCatogory>


          <MenuCatogory
          items={popular}
          title={"Popular"}
          image={image4}
          subtitle={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}
          >
          </MenuCatogory>

          <MenuCatogory
          items={pizza}
          title={"pizza"}
          image={image3}
          subtitle={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}
          >
          </MenuCatogory>
          <MenuCatogory
          items={drinks}
          title={"Shup"}
          image={image6}
          subtitle={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}
          >
          </MenuCatogory>


          
         
         
          
        </div>
    );
};

export default Menu;