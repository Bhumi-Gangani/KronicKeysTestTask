import Router from "./components/router/Router"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <>
      <Router />
      <ToastContainer autoClose={1000}/>
    </>
  )
}

export default App