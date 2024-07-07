import React from 'react'
import Image1 from '../../src/asset/image/image1.jpg';
import Image2 from '../../src/asset/image/image2.jpg';
import Image3 from '../../src/asset/image/image3.jpg';
import Image4 from '../../src/asset/image/image4.jpg';
import Image5 from '../../src/asset/image/image5.jpg';

const AvatarGroup = () => {
    return (
        <div className='body'>
            <div className="avatar-group">
                <div className='avatar'>
                    <span className='avatar-name'>Someone 1</span>
                    <img src={Image1} alt='image' />
                </div>

                <div className='avatar'>
                    <span className='avatar-name'>Someone 1</span>
                    <img src={Image2} alt='image' />
                </div>

                <div className='avatar'>
                    <span className='avatar-name'>Someone 1</span>
                    <img src={Image3} alt='image' />
                </div>

                <div className='avatar'>
                    <span className='avatar-name'>Someone 1</span>
                    <img src={Image4} alt='image' />
                </div>
                <div className='avatar'>
                    <span className='avatar-name'>Someone 1</span>
                    <img src={Image4} alt='image' />
                </div>
            </div>
        </div>
    )
}

export default AvatarGroup