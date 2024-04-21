import React from 'react'
import './Materials.css'
import plastic from '../../assets/Plastic.jpg'
import glass from '../../assets/glass.jpg'
import metal from '../../assets/metal.jpg'
import electronic from '../../assets/electronic.jpg'



const Materials = () => {
  return (

    
    <div className='materials'>
        <h2>Recyclable Materials</h2>
        <div className='material'>
            <img src={plastic} alt="" />
            <div className="caption">
                <p><button className='btn'>Plastic Recycle</button></p>
            </div>
        </div>
        <div className='material'>
            <img src={glass} alt="" />
            <div className="caption">
                <p><button className='btn'>Glass Recycle</button></p>
            </div>
        </div>
        <div className='material'>
            <img src={metal} alt="" />
            <div className="caption">
                <p><button className='btn'>Metal Recycle</button></p>
            </div>
        </div>
        <div className='material'>
            <img src={electronic} alt="" />
            <div className="caption">
                <p><button className='btn'>Electronics Recycle</button></p>
            </div>
        </div>

    </div>
    
  )
}

export default Materials