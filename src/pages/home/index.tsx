import { type GetServerSidePropsContext, type NextPage } from 'next';
import { getSession } from 'next-auth/react';

import React from 'react';
import HomePage from '../../../features/home';

const Home: NextPage = () => {
  return <HomePage />;
};

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const session = await getSession(context);
  if (!session) {
    return {
      redirect: {
        destination: '/',
        permanent: false
      }
    };
  }
  return {
    props: {}
  };
}

export default Home;
