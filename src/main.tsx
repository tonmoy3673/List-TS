
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import RootLayout from "./Components/layout/RootLayout";
import Item from "./Components/Select/Item";
import './index.css';


const root = document.getElementById("root") as HTMLElement;

ReactDOM.createRoot(root).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<RootLayout />}>
      <Route index element={<Item/>}/>
      </Route>
    </Routes>
  </BrowserRouter>
);

