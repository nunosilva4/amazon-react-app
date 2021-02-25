import React from 'react';
import classes from './ProductPreview.module.css';

export default function ProductPreview(props) {

    const currentHour = new Date().getHours() > 9 ? new Date().getHours() : '0' + new Date().getHours();
    const currentMinute = new Date().getMinutes() > 9 ? new Date().getMinutes() : '0' + new Date().getMinutes();

    return (
        <div className={classes.ProductPreview}>
            <img src={props.previewImage} alt="Product Preview" />
            {
                props.selectedFeature === 1 ?
                    <div className={classes.HeartBeatSection}>
                        <i className="fas fa-heartbeat"></i>
                        <p>120</p>
                    </div>
                    :
                    <div className={classes.TimeSection}>
                        <p>{`${currentHour}:${currentMinute}`}</p>
                    </div>
            }
        </div>
    )
}