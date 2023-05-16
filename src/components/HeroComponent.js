import React, { useState, useEffect, useRef, Fragment } from "react";
import styles from './HeroComponent.module.scss';
import Link from "next/dist/client/link";
import ProgressiveImage from "./ProgressiveImage";

export function HeroComponent ({ children, slides, overlayOpacity, placeholderSrc, mainSrc, ...props }) {
  const [currentSlide, setCurrentSlide] = useState(slides[0] || {image: '', title: '', URL: '' });
  const [nextSlideIndex, setNextSlideIndex] = useState(1);
  const [nextSlide, setNextSlide] = useState();
  const [isFading, setIsFading] = useState(false);
  // const randomIntFetchedRef = useRef(false);
  const overlayOpacityStyle = {
    width: "100%",
    height: "100%",
    display: "block",
    backgroundColor: "rgba(0,0,0," + overlayOpacity + ")",
    position: "absolute",
    zIndex: "0"
  };

  const changeSlides = () => {
    if (slides.length > 1 && nextSlide) {

      setCurrentSlide(nextSlide);

      const timer = setTimeout(() => {
        if (nextSlideIndex == (slides.length - 1)) {
          setNextSlide(slides[0]);
          setNextSlideIndex(0);
        } else {
          setNextSlide(slides[nextSlideIndex + 1]);
          setNextSlideIndex(nextSlideIndex + 1);
        }
      }, 1000);

    }
  }

  useEffect(() => { // Handles On Load
    if (slides.length > 1) {
      setNextSlideIndex(1);
      setNextSlide(slides[1]);
    }

    // if (randomIntFetchedRef.current) return;

    // randomIntFetchedRef.current = true;
    // let randomStartIndex = Math.floor(Math.random() * slides.length)

    // if (slides.length > 1) {
    //   setCurrentSlideIndex(randomStartIndex);
    //   setCurrentSlide(slides[randomStartIndex]);

    //   const timer = setTimeout(() => {
    //     if (randomStartIndex == (slides.length - 1)) {
    //       setNextSlideIndex(0);
    //       setNextSlide(slides[0]);
    //     } else {
    //       setNextSlideIndex(randomStartIndex + 1);
    //       setNextSlide(slides[randomStartIndex + 1]);
    //     }
    //   }, 300);

    // } else {
    //   setCurrentSlide(0);
    //   setCurrentSlide(slides[randomStartIndex]);
    // }

  }, []);

  useEffect(() => { // Handles Slideshow Timer
    if (slides.length > 1) {
      const interval = setInterval(() => {
        setIsFading(true);
        const timer = setTimeout(() => {
          changeSlides();
          setIsFading(false);
        }, 1000);
      }, 10000);
      return () => clearInterval(interval);
    }
  }, [changeSlides]);

  return (
    <div className={styles.heroContainer}>
      <div className={styles.imageHolder}>

        {
          overlayOpacity ?
            <div style={overlayOpacityStyle}>
            </div>
          :
            <div style={styles.overlayOpacity}></div>
        }

        {
           slides.length == 1 ?
            <ProgressiveImage src={currentSlide.image} alt={currentSlide.title ? currentSlide.title : ""} isCurrent={true} id={"frontImage"} />
          : slides.length > 1 ?
            <>
              {
                currentSlide && <ProgressiveImage src={currentSlide.image} alt={currentSlide.title ? currentSlide.title : ""} isCurrent={true} id={"frontImage"} isFading={isFading} />
              }

              {
                nextSlide && <ProgressiveImage src={nextSlide.image} alt={nextSlide.title ? nextSlide.title : ""} isCurrent={false} id={"backImage"} />
              }
            </>
          :
            null
        }

      </div>

      {
        slides.length > 0 && currentSlide.URL && currentSlide.title ?
          <Link href={currentSlide.URL} className={styles.caption}>
            {currentSlide.title}
          </Link>
        :
          null
      }

    </div>
  )
}

// Using this tutorial to make components:
// https://triveniglobalsoft.com/how-to-publish-a-custom-react-component-to-npm-using-create-react-library/
