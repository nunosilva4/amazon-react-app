import React from 'react';
import classes from './ProductDetails.module.css';

export default function ProductDetail(props) {

    const colorOptions = props.data.colorOptions.map((item, i) => {
        const classArr = [classes.ProductImage];
        if (i === props.previewImageIndex) {
            classArr.push(classes.SelectedProductImage);
        }
        return (
            <img key={i} onClick={() => props.onColorOptionClick(i)} className={classArr.join(' ')} src={item.imageUrl} alt={item.styleName} />
        )
    })

    const featureList = props.data.featureList.map((item, i) => {
        const classArr = [classes.FeatureItem];
        if (i === props.selectedFeature) {
            classArr.push(classes.SelectedFeatureItem);
        } 
        return (
            <button onClick={() => props.onFeatureItemClick(i)} key={i} className={classArr.join(' ')}>{item}</button>
        )
    })

    return (
        <div className={classes.ProductData}>
            <h1 className={classes.ProductTitle}>{props.data.title}</h1>
            <p className={classes.ProductDescription}>{props.data.description}</p>
            <h3 className={classes.SectionHeading}>Select Color</h3>
            <div>
                {colorOptions}
            </div>
            <h3 className={classes.SectionHeading}>Features</h3>
            <div>
                {featureList}
            </div>
            <button className={classes.PrimaryButton} onClick={() => alert('Thank you for checking out my adaptation :)')}>Buy Now</button>
        </div>
    )
}