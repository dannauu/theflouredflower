import { useState } from 'react'
import Navigation from '../Navigation/Navigation'
import { AiOutlineClose } from "react-icons/ai";
import Data from './Data'
import Footer from '../Footer/Footer'

const Gallery = () => {

    const [model, setModel] = useState(false);
    const [tempimgSrc, setTempImgSrc] = useState('');
    const getImg = (imgSrc) => {
        setTempImgSrc(imgSrc);
        setModel(true);
    }

    return (
        <div>
            <Navigation />
            <h1 className='flex justify-center mt-10 text-5xl text-purple-600 ffLobsterTwo'>Check out my past work!</h1>
            <div className='mt-10 mb-10'>
                <div className={model ? "model open" : "model"}>
                    <img src={tempimgSrc} alt='' />
                    <AiOutlineClose onClick={() => setModel(false)} />
                </div>
                <div className='gallery'>
                    {Data.map((item, index) => {
                        return (
                            <div className='pics' key={index} onClick={() => getImg(item.imgSrc)}>
                                <img src={item.imgSrc} className='galleryImg' alt='' />
                            </div>
                        )
                    })
                    }
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Gallery