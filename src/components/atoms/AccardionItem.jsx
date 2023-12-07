import React from 'react'
import icon from "../../../public/img/accardion-icon.png"

function AccardionItem({ index }) {
    return (
        <div className='group cursor-pointer'>
            <div className='flex-between px-[60px]  py-[10px] border-b  text-[#000] '>
                <h3>{index + 1}. Veb saytımın hazırlanması və dizaynı üçün neçəyə başa gələr?</h3>
                <img className='h-[40px] w-[40px] shrink-0  rounded-full group-hover:rotate-[180deg] transition-all' src={icon} alt="icon" />
            </div>
            <div className='dropdown-body box-shadow group-hover:py-[20px] h-0  group-hover:h-max transition-all overflow-hidden group-hover:border border-t-[0] rounded-b-[20px]  text-[#000]   px-[60px]'>
                <p>{index + 1}.1 Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit, voluptatibus facere nobis ea veritatis nostrum necessitatibus eligendi eveniet consequuntur illo laboriosam hic cumque dolore magni. Fuga labore voluptates voluptate aliquam.</p>
            </div>
        </div>
    )
}

export default AccardionItem