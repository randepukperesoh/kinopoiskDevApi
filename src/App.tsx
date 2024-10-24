import "./App.css";
import { Provider } from "react-redux";
import { store } from "./Api/Store";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage } from "./Pages/HomePage/HomePage";
import { Layout } from "./components/Layout/Layout";
import { TitlePage } from "./Pages/TitlePage/TitlePage";
import { TypePage } from "./Pages/TypePage/TypePage";
import { LoginPage } from "./Pages/LoginPage/LoginPage";
import { RegisterPage } from "./Pages/RegisterPage/RegisterPage";

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="title/:id" element={<TitlePage />} />
            <Route path="page/:type" element={<TypePage />} />
            <Route path="login" element={<LoginPage />} />
            <Route path="register" element={<RegisterPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
