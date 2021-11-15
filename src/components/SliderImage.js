import React, { useState, useEffect } from 'react'
import * as s from './Slider.style'
import {ImageItems } from './ImageItems'

const SliderImage = () => {

   //states =============
    const [currentImage, setCurrentImage] = useState(0)

    //updating current image in sliding
    useEffect(()=>{
        const interval = setInterval(handleNext,3000)

        return () =>{
            clearInterval(interval)
        }
    },[currentImage])


    //functions =============
    function handlePrev(){
        setCurrentImage(currentImage === 0 ? ImageItems.length - 1  : currentImage - 1)
    }

    function handleNext () {
        setCurrentImage(currentImage === ImageItems.length - 1 ? 0 : currentImage + 1)
    }

    //Image Items Data ==================
    const ImageItemsJSX = ImageItems.map((item, index)=>{
        return(
            <s.ItemContainer key = {index} className={ currentImage === index ? 'slideItem active':'slideItem'}>
              {
                  currentImage === index &&
                  <s.Icon src={item.image} alt="image sliding"/>}
            </s.ItemContainer>
        )
    })

    return (
        <s.SliderContainer>
            <s.PrevContainer onClick={() =>handlePrev()}>prev</s.PrevContainer>
            <s.NextContainer onClick={() =>handleNext()}>next</s.NextContainer>
            {ImageItemsJSX}
        </s.SliderContainer>
    )
}

export default SliderImage
