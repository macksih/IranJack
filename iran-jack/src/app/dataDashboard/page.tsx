import React from 'react'
import MobileView from '../../component/mobileView/MobileView';

function Page() {
    return(
        <div className='container lg:mx-auto lg:px-16 px-3 justify-between  pb-3 bg-white rounded-[10px] leading-10 text-justify'>
            <div className='lg:hidden flex'>
                <MobileView />
            </div>
            
        </div>
    )
}

export default Page;