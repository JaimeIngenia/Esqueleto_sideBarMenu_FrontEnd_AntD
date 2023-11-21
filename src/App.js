import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

// Nuevas importaciones
import { Layout } from 'antd';
import {Logo} from './components/Logo.jsx';
import MenuList from './components/MenuList.jsx';

const { Header, Sider }  = Layout;



const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello world Home Page!</div>,
  },
  {
    path: "/pagina1",
    element: <div>Hello world Pagina 1!</div>,
  },
  {
    path: "/pagina2",
    element: <div>Hello world!  Pagina 2</div>,
  },
  {
    path: "/pagina3",
    element: <div>Hello world!  Pagina 3</div>,
  },



]);
function App() {
  return (
    <>

      <Layout>
        <Sider className='sidebar' >

          <Logo/>
          <MenuList/>

        </Sider>
      </Layout>

    </>
  );
}

export default App;
