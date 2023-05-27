

const Favoritefood = ({title,image,subtitle}) => {
    return (
        <div className='relative'>
            <img src={image} alt="" />
            <div className='text-white bg-black opacity-50 p-8 text-center text-3xl absolute top-56 left-80 w-1/2 mx-auto'>
            <h6 className='uppercase'>{title}</h6>
            <p className='text-sm'>{subtitle}</p>
            </div>
        </div>
    );
};

export default Favoritefood;