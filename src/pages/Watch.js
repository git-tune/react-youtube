import React from 'react';
import Layout from '../components/Layout/Layout';
import VideoDetail from '../components/VideoDetail/VideoDetail';
import SideList from '../components/SideList/SideList';

const Watch = () => {
  return (
    <div>
      <Layout>
        <VideoDetail />
        <SideList />
      </Layout>
    </div>
  );
};

export default Watch;
