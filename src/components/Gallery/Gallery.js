import { useState } from 'react'
import { AiOutlineClose } from "react-icons/ai";
import Data from './Data'
import Tada from 'react-reveal/Tada';
import Slide from 'react-reveal/Slide';

const Gallery = () => {

    const [model, setModel] = useState(false);
    const [tempimgSrc, setTempImgSrc] = useState('');
    const getImg = (imgSrc) => {
        setTempImgSrc(imgSrc);
        setModel(true);
    }

    return (
        <div id='gallery'>
            <Tada>
                <h1 className='centerText flex justify-center mt-5 text-7xl text-purple-600 ffLobsterTwo'>Gallery</h1>
            </Tada>
            <div className='mt-10 mb-10'>
                <div className={model ? "model open" : "model"}>
                    <img src={tempimgSrc} alt='' />
                    <AiOutlineClose onClick={() => setModel(false)} />
                </div>
                <div className='gallery'>
                    {Data.map((item, index) => {
                        return (

                            <div className='pics' key={index} onClick={() => getImg(item.imgSrc)}>
                                <Slide left>
                                    <img src={item.imgSrc} className='galleryImg' alt='' />
                                </Slide>

                            </div>

                        )
                    })
                    }
                </div>
            </div>
        </div>
    )
}

export default Gallery