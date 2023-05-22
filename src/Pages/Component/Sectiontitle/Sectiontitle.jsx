import React from 'react';

const Sectiontitle = ({subtitle,title}) => {
    return (
        <div className='w-3/12 mx-auto text-center my-8'>
          <h3 className='text-yellow-500'>---{subtitle}---</h3>
            <h1 className='border-y-4 text-3xl uppercase py-3' >{title}</h1>
        </div>
    );
};

export default Sectiontitle;