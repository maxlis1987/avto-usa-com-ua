import React from 'react';
import { Link } from 'react-router-dom';

const ProductRefField = ({ record }) => (
    <Link to={`cars/${record.id}`}>{record.reference}</Link>
);

ProductRefField.defaultProps = {
    source: 'id',
    label: 'Reference',
};

export default ProductRefField;
