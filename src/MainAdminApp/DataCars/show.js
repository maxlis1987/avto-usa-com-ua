import React from 'react';
import { Show, SimpleShowLayout, TextField, ImageField, RichTextField } from 'react-admin';

export default (props) => (
    <Show {...props}>
        <SimpleShowLayout>
            <ImageField source="image" />
            <TextField source="title" />
            <TextField source="price" />
            <TextField source="engine" />
            <RichTextField source="body" />
            <TextField label="Publication date" source="link" />
        </SimpleShowLayout>
    </Show>
);