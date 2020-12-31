import React from "react";
import "./collection-preview.styles.scss";
import CollectionItem from '../collection-item/collection-item.component';

const CollectionPreview = ({ title, items }) => {
  return (
    <div className="collection-preview">
      <h1 className="title">{title.toUpperCase()}</h1>
      <div className="preview">
        {items.filter((item, ix) => ix < 4).map(({id, ...otherCollectionProps}) => (
          <CollectionItem key={id} {...otherCollectionProps}></CollectionItem>
        ))}
      </div>
    </div>
  );
};

export default CollectionPreview;
