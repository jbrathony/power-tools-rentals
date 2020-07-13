import React, { Component } from "react";
import { makeStyles } from '@material-ui/core/styles';
import { GetImagesListForTool } from "../../assets/Database/DatabaseUtils";
import { Divider } from "@material-ui/core";
import Slider from 'react-animated-slider';

const useStyles = makeStyles({
    SliderContainerStyle: {
        // maxHeight: '300px',
        height: 'auto',
    },
    SliderStyle: {
    },
    ImageStyle: {
        maxWidth: '100%',
        maxHeight: '100%',
    }
});

export default function ToolImagesSlider(props) {
    const classes = useStyles();

    function GetListOfImages() {
        let imagesList = [];
        GetImagesListForTool(props.data.currentTool.id).map((image) => {
            imagesList.push(<img src={image.source} className={classes.ImageStyle} key={image.title}></img>);
        });
        return imagesList;
    }

    return (
        <div className={classes.SliderContainerStyle}>
            <Slider classNames={classes.SliderStyle}>
                {GetListOfImages()}
            </Slider>
        </div>
    );
}