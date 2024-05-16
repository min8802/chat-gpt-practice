import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./componenets/Layout";
import Home from "./pages/home";
import ChatList from "./pages/chatList";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout/>}>
          <Route path="/" element={<Home/>}/>
          <Route path="chat-list" element={<ChatList/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;