import './feature.css'
import Sectiontitle from '../../Component/Sectiontitle/Sectiontitle';
import feature from '../../../assets/home/featured.jpg'

const Feature = () => {
    return (
        <section className='feture bg-fixed '>
           <div className='pt-6'>
           <Sectiontitle
                subtitle={"cheake it Out"}
                title={"From Our Menu"}

            >

            </Sectiontitle>
           </div>

            <div className='lg:flex justify-between items-center gap-7 p-24'>
               <div>
               <img src={feature} alt="" />
               </div>
                <div className='space-y-2 text-white bg-black py-16 opacity-30 p-4'>
                    <div className=' z-10'>
                    <h4>March 20, 2023</h4>
                    <h3>WHERE CAN I GET SOME?</h3>
                    <p>

                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.</p>

                       <button className="btn-outline btn border-0 border-b-4">READ MORE</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Feature;