
import Sectiontitle from '../../Component/Sectiontitle/Sectiontitle';
import Menu from '../../Shared/Menu/Menu';
import useMenu from '../../../Hook/Usemenu';

const MenuItem = () => {
    const [menu] = useMenu();
    const popular = menu.filter(singleData => singleData.category == "popular")


    return (
        <section>
            <Sectiontitle
                subtitle={"cheake it Out"}
                title={"From Our Menu"}

            >

            </Sectiontitle>

            <div className='grid lg:grid-cols-2  grid-cols-1 gap-8 my-12'>
                {
                    popular.map(singlemenu =>
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