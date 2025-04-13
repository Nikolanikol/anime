import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { routes } from './Router/index';
import Header from './Component/Header/Header';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />

        <Routes>
          {routes.map((item, i) => {
            return <Route key={i} path={item.path} element={item.component} />;
          })}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
