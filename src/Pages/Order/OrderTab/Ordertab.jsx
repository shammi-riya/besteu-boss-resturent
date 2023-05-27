
import Foodcard from '../../Component/Foodcard/Foodcard';

const Ordertab = ({items}) => {
    return (
        <div className='grid grid-cols-4 gap-4'>
        {
             items.map(item=><Foodcard
             key={item._id}
             items={item}
             ></Foodcard>)
         }
 
        </div>
    );
};

export default Ordertab;