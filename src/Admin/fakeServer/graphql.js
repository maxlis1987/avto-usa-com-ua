import JsonGraphqlServer from 'json-graphql-server';
import generateData from 'data-generator-retail';
import fetchMock from 'fetch-mock';

export default () => {
    const data = generateData({ serializeDate: false });
    const restServer = JsonGraphqlServer({ data });
    const handler = restServer.getHandler();

    fetchMock.mock('http://localhost:8080', handler);
    return () => fetchMock.restore();
};
