

const BgMenu = ({image,title,subTitle}) => {
    return (
        <div>
            <div className="hero h-[750px]" style={{ backgroundImage: `url("${image}")` }}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 uppercase text-6xl font-bold">{title}</h1>
      <p className="mb-5 uppercase">{subTitle}</p>
     
    </div>
  </div>
</div>
        </div>
    );
};

export default BgMenu;