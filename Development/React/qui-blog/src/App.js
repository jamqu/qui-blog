
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import ErrorPage from './pages/Error';

import HomePage from './pages/Home';
import RootLayout from './pages/Root';
import PostsPage from './pages/Posts/Posts';
import PostsRootLayout from './pages/Posts/PostsRoot';


const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: 'posts',
        element: <PostsRootLayout />,
        children: [
          {
            index: true,
            element: <PostsPage />,
            //loader here
          }
        ]
      }
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
