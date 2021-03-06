import React from 'react';
import {
	translate,
	Datagrid,
	Edit,
	EditButton,
	NumberField,
	ReferenceManyField,
	SimpleForm,
	TextInput
} from 'react-admin';

import ThumbnailField from '../products/ThumbnailField';
import ProductRefField from '../products/ProductRefField';

const CategoryTitle = translate(({ record, translate }) => (
	<span>
		{translate('resources.categories.name', { smart_count: 1 })} &quot;
		{record.name}&quot;
	</span>
));

const CategoryEdit = (props) => (
	<Edit title={<CategoryTitle />} {...props}>
		<SimpleForm>
			<TextInput source="name" />
			<ReferenceManyField
				reference="products"
				target="vincode"
				label="resources.categories.fields.products"
				perPage={5}
			>
				<Datagrid>
					<ThumbnailField />
					<ProductRefField source="reference" />
					<NumberField source="price" />

					<EditButton />
				</Datagrid>
			</ReferenceManyField>
		</SimpleForm>
	</Edit>
);

export default CategoryEdit;
