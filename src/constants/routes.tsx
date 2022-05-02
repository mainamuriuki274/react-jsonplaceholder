import React, { FunctionComponent, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Loader } from '../components/Loader';

const BaseRouter: FunctionComponent = () => {
  const HomePage: React.LazyExoticComponent<React.FunctionComponent<{}>> =
    React.lazy(() =>
      import('../pages/Home').then((module) => ({
        default: module.Home,
      })),
    );

  const UserPosts: React.LazyExoticComponent<React.FunctionComponent<{}>> =
    React.lazy(() =>
      import('../pages/UserPosts').then((module) => ({
        default: module.UserPosts,
      })),
    );

  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/users" element={<HomePage />} />
        <Route path="/users/:userId/posts" element={<UserPosts />} />
      </Routes>
    </Suspense>
  );
};
export default BaseRouter;
