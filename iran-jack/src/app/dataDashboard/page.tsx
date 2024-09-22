import React from 'react'
import MobileView from '../../component/mobileView/MobileView';
import DeskTopView from '../../component/desktopView/DeskTopView'

function Page() {
    return(
        <div className='container justify-between  pb-3 bg-white rounded-[10px] leading-10 text-justify'>
            <div className='lg:hidden flex'>
                <MobileView />
            </div>
            <div className='lg:flex hidden'>
                <DeskTopView />
            </div>
            
        </div>
    )
}

export default Page;