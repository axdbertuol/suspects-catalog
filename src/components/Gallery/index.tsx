import React, { useCallback, useEffect, useRef } from 'react';
import LightGallery from 'lightgallery/react';

import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';

import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';

interface IGalleryProps {
  pictures?: Array<string>;
  withPlugins?: boolean;
}

const Gallery: React.FC<IGalleryProps> = ({
  pictures,
  withPlugins = false
}) => {
  // TODO make Picture component and type
  const lightGallery = useRef<any>(null);
  const onInit = useCallback((detail) => {
    if (detail) {
      lightGallery.current = detail.instance;
    }
  }, []);

  const getItems = useCallback(() => {
    return pictures?.map((item, index) => {
      return (
        <a href={`Picture_${index}`} key={`Picture_${index}`}>
          <img
            alt={`Picture ${index}`}
            src={item}
            height={'250'}
            width={'250'}
          />
        </a>
      );
    });
  }, [pictures]);

  useEffect(() => {
    lightGallery.current.refresh();
  }, [pictures]);

  return (
    <LightGallery
      elementClassNames="custom-wrapper-class"
      speed={500}
      onInit={onInit}
      plugins={withPlugins ? [lgThumbnail, lgZoom] : []}
      mode={'lg-slide-circular'}
      download={false}
    >
      {getItems()}
    </LightGallery>
  );
};

export default Gallery;
