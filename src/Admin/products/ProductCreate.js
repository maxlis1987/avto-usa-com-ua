import React from 'react';
import {
    Create,
    FormTab,
    NumberInput,
    ReferenceInput,
    SelectInput,
    TabbedForm,
    TextInput,
    required,
} from 'react-admin';
import withStyles from '@material-ui/core/styles/withStyles';
import RichTextInput from 'ra-input-rich-text';

export const styles = {
    stock: { width: '5em' },
    price: { width: '5em' },
    width: { width: '5em' },
    widthFormGroup: { display: 'inline-block' },
    height: { width: '5em' },
    heightFormGroup: { display: 'inline-block', marginLeft: 32 },
};

const ProductCreate = ({ classes, ...props }) => (
    <Create {...props}>
        <TabbedForm>
            <FormTab label="resources.products.tabs.image">
                <TextInput
                    autoFocus
                    source="image"
                    options={{ fullWidth: true }}
                    validate={required()}
                />
                <TextInput
                    source="title"
                    options={{ fullWidth: true }}
                    validate={required()}
                />
            </FormTab>
            <FormTab label="resources.products.tabs.details" path="details">
                <TextInput source="reference" validate={required()} />
                <NumberInput
                    source="price"
                    validate={required()}
                    className={classes.price}
                />
                <NumberInput
                    source="vincode"
                    validate={required()}
                    className={classes.width}
                    formClassName={classes.widthFormGroup}
                />
                <NumberInput
                    source="link"
                    validate={required()}
                    className={classes.height}
                    formClassName={classes.heightFormGroup}
                />
                <ReferenceInput
                    source="userId"
                    reference="posts"
                    allowEmpty
                >
                    <SelectInput source="name" />
                </ReferenceInput>
                <NumberInput
                    source="createdAt"
                    validate={required()}
                    className={classes.stock}
                />
            </FormTab>
            <FormTab
                label="resources.products.tabs.description"
                path="description"
            >
                <RichTextInput source="description" addLabel={false} />
            </FormTab>
        </TabbedForm>
    </Create>
);

export default withStyles(styles)(ProductCreate);
