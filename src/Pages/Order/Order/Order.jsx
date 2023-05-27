;
import BgMenu from '../../Shared/BgMenu';
import img from '../../../assets/shop/banner2.jpg'
import { useState } from 'react';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useMenu from '../../../Hook/Usemenu';

import Ordertab from '../OrderTab/Ordertab';
import { useParams } from 'react-router-dom';

const Order = () => {
  const catogoris = ["salad","drinks","popular","dessert","shup"]
  const {catogory} = useParams()
  const inithialIndex = catogoris.indexOf(catogory)
  console.log(catogory);
    const [menu] = useMenu();
    const salad = menu.filter(item=>item.category=="salad")
    const drinks = menu.filter(item=>item.category=="drinks")
    const popular = menu.filter(item=>item.category=="popular")
    const dessert = menu.filter(item=>item.category=="dessert")
    const shup = menu.filter(item=>item.category=="soup")
   

    const [tabIndex, setTabIndex] = useState(inithialIndex);
    return (
        <div >
            <BgMenu
            image={img}
            title={"Our Shop"}
            subTitle={"would you like to try a Dish"}
           
            ></BgMenu>

<div className='my-12'>
<Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
      <TabList>
        <Tab>Salads</Tab>
        <Tab>drinks</Tab>
        <Tab>Popular</Tab>   
        <Tab>desurts</Tab>
        <Tab>Suop</Tab>       
       
       
       
      </TabList>
      <TabPanel>
       <Ordertab items={salad}></Ordertab>

      </TabPanel>
      <TabPanel>
      <Ordertab items={drinks}></Ordertab>
      </TabPanel>
      <TabPanel>
      <Ordertab items={popular}></Ordertab>
      </TabPanel>
     
      <TabPanel>
      <Ordertab items={dessert}></Ordertab>
      </TabPanel>
      <TabPanel>
      <Ordertab items={shup}></Ordertab>
      </TabPanel>
     
     
     
    </Tabs>
</div>
        </div>
    );
};

export default Order;