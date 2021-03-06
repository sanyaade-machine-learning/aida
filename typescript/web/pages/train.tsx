import * as React from 'react';
import DefaultHeader from '../components/DefaultHeader';
import Layout from '../components/Layout';
import TrainExample from '../components/TrainExample';

export default ({ location }: any) => {
    return (
        <Layout location={location} style={{ minHeight: '95vh' }}>
            <DefaultHeader />
            <TrainExample />
        </Layout>
    );
};
