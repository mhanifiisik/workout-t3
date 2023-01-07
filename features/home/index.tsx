import { Tabs } from 'antd';
import { useSession } from 'next-auth/react';
import React from 'react';
import Exercises from '../../src/components/exercises';
import { HomePageSection } from './styled';

const HomePage = () => {
  const { data: session } = useSession();
  return (
    <HomePageSection>
      <h1>Home Page </h1>
      <Tabs
        defaultActiveKey="1"
        onChange={() => null}
        items={[
          {
            label: `Dashboard`,
            key: '1',
            children: `Dashboard`
          },
          {
            label: `Exercises`,
            key: '2',
            children: <Exercises />
          },
          {
            label: `Meals`,
            key: '3',
            children: `Meals`
          },
          {
            label: `Workout Plans`,
            key: '4',
            children: `Workout Plans`
          }
        ]}
      />
    </HomePageSection>
  );
};

export default HomePage;
