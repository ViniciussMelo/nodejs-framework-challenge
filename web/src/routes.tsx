import { Routes, Route, BrowserRouter } from 'react-router-dom';


import GetNumberInfo from './pages/getNumberInfo';

const RouterApp = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<GetNumberInfo />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default RouterApp;