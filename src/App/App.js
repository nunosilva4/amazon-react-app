import React, { useState } from 'react';
import classes from './App.module.css';
import TopBar from '../Components/TopBar/TopBar.js';
import ProductPreview from '../Components/ProductPreview/ProductPreview.js';
import ProductDetails from '../Components/ProductDetails/ProductDetails.js';
import ProductData from '../Utils/ProductData.js';

export default function App() {

  const [productData, setProductData] = useState(ProductData);
  const [previewImageIndex, setPreviewImageIndex] = useState(0);
  const [selectedFeature, setSelectedFeature] = useState(0);

  return (
    <div>
      <TopBar />
      <div className={classes.MainContainer}>
        <div className={classes.ProductPreviewDiv}>
          <ProductPreview previewImage={productData.colorOptions[previewImageIndex].imageUrl} selectedFeature={selectedFeature} />
        </div>
        <ProductDetails onFeatureItemClick={setSelectedFeature} selectedFeature={selectedFeature} 
        data={productData} onColorOptionClick={setPreviewImageIndex} previewImageIndex={previewImageIndex} />
      </div>
    </div>
  );
}