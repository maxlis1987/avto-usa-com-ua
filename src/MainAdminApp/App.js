import React from 'react';
import {Admin, Resource , Layout, Sidebar } from 'react-admin';

import Dashboard from './Dashboard';
import { PostList, PostShow } from './DataCars';
import dataProvider from './dataProvider';



export default () => (
    <Admin

      dataProvider={dataProvider}
      dashboard={() => <Dashboard />}

    >
      <Resource name={"Cars"} list={PostList} show={PostShow}/>
    </Admin>
)