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
  // eslint-disable-next-line prettier/prettier
  const UserDetailsPage: React.LazyExoticComponent<React.FunctionComponent<{}>
  > = React.lazy(() =>
    import('../pages/UserDetailsPage').then((module) => ({
      default: module.UserDetailsPage,
    })),
  );

  const PostsPage: React.LazyExoticComponent<React.FunctionComponent<{}>> =
    React.lazy(() =>
      import('../pages/PostsPage').then((module) => ({
        default: module.PostsPage,
      })),
    );

  const HomePage: React.LazyExoticComponent<React.FunctionComponent<{}>> =
    React.lazy(() =>
      import('../pages/HomePage').then((module) => ({
        default: module.HomePage,
      })),
    );

  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/posts" element={<PostsPage />} />
        <Route path="/users" element={<UsersPage />} />
        <Route path="/users/:userId" element={<UserDetailsPage />} />
        <Route path="/users/:userId/posts" element={<UserPostsPage />} />
      </Routes>
    </Suspense>
  );
};
export default BaseRouter;
