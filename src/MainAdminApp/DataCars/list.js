import React from 'react';
import {
    ShowButton,
    List,
    TextField,
    ImageField,
    ExportButton
} from 'react-admin';

import {
  Card,
  CardActions,
  CardContent,
  CardHeader
} from '@material-ui/core';

import {
  priceStyle,
  engineStyle,
  contextStyle,
  cardStyle
} from './styles';



const PostsGrid = ({ ids, data, basePath }) => (
    <div style={{ margin: '1em' }}>
    {ids.map(id =>
        <Card key={id} style={cardStyle}>

            <ImageField
              record={data[id]}
              source="image"
              title="title"
            />

            <CardHeader
                title={<TextField record={data[id]} variant='title' style={{fontЦeight: 'bold'}} source="title" />}
            />

            <CardContent style={contextStyle}>
              <TextField record={data[id]} variant='title' source="price" style={priceStyle}/>
              <TextField record={data[id]} source="engine" style={engineStyle}/>
            </CardContent>

            <CardContent>
              <TextField record={data[id]} source="describtion"/>
            </CardContent>

            <CardActions style={{ textAlign: 'right' }}>
                <ShowButton resource="Cars" basePath={basePath} record={data[id]} />
            </CardActions>

        </Card>
    )}
    </div>
);
PostsGrid.defaultProps = {
    data: {},
    ids: [],
};

export default  (props) => (
    <List title="All Cars" exporter={false} {...props}>
        <PostsGrid />
    </List>
);
