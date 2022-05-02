import React, { FunctionComponent, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Loader } from '../components/Loader';

const BaseRouter: FunctionComponent = () => {
  const UsersPage: React.LazyExoticComponent<React.FunctionComponent<{}>> =
    React.lazy(() =>
      import('../pages/UsersPage').then((module) => ({
        default: module.UsersPage,
      })),
    );

  const UserPostsPage: React.LazyExoticComponent<React.FunctionComponent<{}>> =
    React.lazy(() =>
      import('../pages/UserPostsPage').then((module) => ({
        default: module.UserPostsPage,
      })),
    );

  const PostsPage: React.LazyExoticComponent<React.FunctionComponent<{}>> =
    React.lazy(() =>
      import('../pages/PostsPage').then((module) => ({
        default: module.PostsPage,
      })),
    );

  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/posts" element={<PostsPage />} />
        <Route path="/users" element={<UsersPage />} />
        <Route path="/users/:userId/posts" element={<UserPostsPage />} />
      </Routes>
    </Suspense>
  );
};
export default BaseRouter;
