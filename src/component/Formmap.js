import React from 'react'
import { Formtitle } from '../component/Formtitle'

export const Formmap = (props) => {
    const {Data,AddtoBasket ,HandleBasket}=props
    return (
        <div className='wrap'>
            {Data.map((value)=>{
                return(
                    <Formtitle HandleBasket={HandleBasket} key={value.id} AddtoBasket={AddtoBasket} {...value} />
                )
            })}
            
        </div>
    )
}
