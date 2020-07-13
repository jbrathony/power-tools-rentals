import React from 'react';
import Slider from "react-slick";
import { makeStyles } from '@material-ui/core/styles';
import "react-slick"

const useStyles = makeStyles((theme) => ({
    ImageSliderDivStyle: {
        width: '100%',
        height: 'auto',
        maxHeight: '300px',
        overflow: 'hidden'
    },
    ImageStyle: {
        maxWidth: '100%',
    }
}));

function CustomSlider(props) {
    const classes = useStyles();

    // const settings = {
    //     // adaptiveHeight: true,
    //     dots: true,
    //     // infinite: true,
    //     speed: 500,
    //     slidesToShow: 1,
    // };
    return (
        <div >
            <div className={classes.ImageSliderDivStyle}>
                <img alt="השכרת כלי עבודה" className={classes.ImageStyle} src={require('../../assets/images/ToolsForRent/tools-and-equipment-rentals.jpg')} />
            </div>
            {/* <div className={classes.ImageSliderDivStyle}>
                <img className={classes.ImageStyle} src={require('../../assets/BoschGSH5E-At-Work2.jpg')} />
            </div> */}
        </div>

        // <Slider {...settings} >
        //     <div className={classes.ImageSliderDivStyle}>
        //         <img className={classes.ImageStyle} src={require('../../assets/BoschGSH5E-At-Work2.jpg')} />
        //     </div>
        //     <div className={classes.ImageSliderDivStyle}>
        //         <img className={classes.ImageStyle} src={require('../../assets/BoschGSH5E-At-Work2.jpg')} />
        //     </div>
        // </Slider>
    );

}

export default CustomSlider;