'use client'
import Image, { StaticImageData } from "next/image"
import { useState } from "react"
import { AiFillCaretLeft, AiFillCaretRight } from "react-icons/ai";
import styles from '@/styles/carousel.module.scss'

import {images} from '../data/images.js'

// interface CarouselProps {
//     images: StaticImageData[],
// }

export default function Carousel(){
    const [currentImg, setCurrentImg] = useState(0)

    function handlePrev(imageIndex:number){
        const currentImage = document.getElementById(`${imageIndex}`)
        const nextImage = document.getElementById(`${imageIndex - 1}`)
        // console.log("pre: current:" + currentImage!.style.zIndex)
        // console.log("pre: next:" + nextImage!.style.zIndex)
        currentImage!.style.zIndex = (parseInt(currentImage!.style.zIndex) - 1).toString()
        nextImage!.style.zIndex = (parseInt(currentImage!.style.zIndex) + 1).toString()
        // console.log("post: current:" + currentImage!.style.zIndex)
        // console.log("post: next:" + nextImage!.style.zIndex)
        setCurrentImg(prev => prev - 1);
    }

    function handleNext(imageIndex:number){
        const currentImage = document.getElementById(`${imageIndex}`)
        const nextImage = document.getElementById(`${imageIndex + 1}`)
        // console.log("pre: current:" + currentImage!.style.zIndex)
        // console.log("pre: next:" + nextImage!.style.zIndex)
        currentImage!.style.zIndex = (parseInt(currentImage!.style.zIndex) - 1).toString()
        nextImage!.style.zIndex = (parseInt(currentImage!.style.zIndex) + 1).toString()
        // console.log("post: current:" + currentImage!.style.zIndex)
        // console.log("post: next:" + nextImage!.style.zIndex)
        setCurrentImg(prev => prev + 1);
    }

    return(
        <>
            <div className={styles.imageContainer}>
                {images.map((image, index) => (
                    <Image
                        key={`${index}`}
                        id={`${index}`}
                        className={styles.carouselImage}
                        src={image}
                        alt={`${index}`}
                        fill
                        sizes="100%"
                        style={{
                            objectFit: 'contain',
                            objectPosition: 'center',
                            zIndex: (images.length - index).toString()
                        }}
                        placeholder="blur"
                    />
                ))}
            </div>

            <div className={styles.buttonContainer}>
                <button
                    disabled={currentImg == 0}
                    onClick={() => handlePrev(currentImg)}
                    className={styles.arrowButton}
                    aria-label="Prev Carousel Image button"
                >
                    <AiFillCaretLeft size={20}/>
                </button>

                <div className={styles.dotContainer}>
                    {images.map((_, index) => (
                        <span className={`${styles.dot}
                        ${index === currentImg ? styles.currentDot : ''}`}
                        key={index}
                        aria-label="Carousel Dot"
                        // onClick={() => () => handleDot(index, project)}
                        >
                        </span>
                    ))}
                </div>

                <button
                    disabled={currentImg == images.length - 1}
                    className={styles.arrowButton}
                    onClick={() => handleNext(currentImg)}
                    aria-label="Prev Carousel Image button"
                >
                    <AiFillCaretRight size={20}/>
                </button>
            </div>
        </>
    )
}