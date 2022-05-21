import React from 'react';
import ImageGallery from 'react-image-gallery';
import img1 from '../../images/1.jpg';
import img6 from '../../images/6.jpg';
import img8 from '../../images/8.jpg';
import img9 from '../../images/9.jpg';
import img10 from '../../images/10.jpg';
import img11 from '../../images/11.jpg';
import img13 from '../../images/13.jpg';
import img17 from '../../images/17.jpg';
import img18 from '../../images/18.jpg';
import img19 from '../../images/19.jpg';
import img21 from '../../images/21.jpg';
import img22 from '../../images/22.jpg';
import img23 from '../../images/23.jpg';
import img24 from '../../images/24.jpg';
import img25 from '../../images/25.jpg';
import img26 from '../../images/26.jpg';
import img27 from '../../images/27.jpg';
import img28 from '../../images/28.jpg';
import img29 from '../../images/29.jpg';
import img30 from '../../images/30.jpg';
import img31 from '../../images/31.jpg';
import "react-image-gallery/styles/css/image-gallery.css";
import { GalleryStyled } from './GalleryStyled';

const images = [
    {
        original: img1,
        loading: "lazy",
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1
    },
    {
        original: img6,
        loading: "lazy",
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1
    },
    {
        original: img8,
        loading: "lazy",
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1
    },
    {
        original: img9,
        loading: "lazy",
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1
    },
    {
        original: img10,
        loading: "lazy",
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1
    },
    {
        original: img11,
        loading: "lazy",
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1
    },
    {
        original: img13,
        loading: "lazy",
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1
    },
    {
        original: img17,
        loading: "lazy",
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1
    },
    {
        original: img18,
        loading: "lazy",
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1
    },
    {
        original: img19,
        loading: "lazy",
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1
    },
    {
        original: img21,
        loading: "lazy",
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1
    },
    {
        original: img22,
        loading: "lazy",
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1
    },
    {
        original: img23,
        loading: "lazy",
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1
    },
    {
        original: img24,
        loading: "lazy",
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1
    },
    {
        original: img25,
        loading: "lazy",
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1
    },
    {
        original: img26,
        loading: "lazy",
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1
    },
    {
        original: img27,
        loading: "lazy",
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1
    },
    {
        original: img28,
        loading: "lazy",
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1
    },
    {
        original: img29,
        loading: "lazy",
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1
    },
    {
        original: img30,
        loading: "lazy",
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1
    },
    {
        original: img31,
        loading: "lazy",
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1
    },
]
const Gallery = () => {
    return (
        <>
        <GalleryStyled id="gallery">
        <h2 className="gallery-title">Галерея</h2>
            <ImageGallery items={images} />
        </GalleryStyled>
        </>
    );
}

export default Gallery;
