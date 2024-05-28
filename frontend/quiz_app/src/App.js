import {createBrowserRouter,RouterProvider} from 'react-router-dom';
import Quiz from './components/Quiz';
import Result from './components/Result';
import Main from './components/Main';
import { CheckIfUserLogged } from './components/Auth';

const router = createBrowserRouter([
  {
    path:'/',
    element: <Main></Main>
  },
  {
    path:'/quiz',
    element: <CheckIfUserLogged><Quiz/></CheckIfUserLogged>
  },
  {
    path:'/result',
    element:<CheckIfUserLogged><Result/></CheckIfUserLogged>
  }
])

function App() {
  return (
    <>
    <RouterProvider router={router}/>
    </>
  );
}

export default App;
