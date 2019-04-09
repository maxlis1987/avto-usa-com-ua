import React from 'react';
import { ReferenceField, TextField } from 'react-admin';

const ProductReferenceField = props => (
    <ReferenceField
        label="Cars"
        source="userId"
        reference="products"
        {...props}
    >
        <TextField source="reference" />
    </ReferenceField>
);

ProductReferenceField.defaultProps = {
    source: 'id',
    addLabel: true,
};

export default ProductReferenceField;
