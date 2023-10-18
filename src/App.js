import { useContext } from "react";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { BrowserRouter,Routes,Route,Navigate } from "react-router-dom";
import { AuthContext } from "./context/AuthContext";


function App() {
  const {currentUser}=useContext(AuthContext);
  const ProtectedRoute=({children})=>{
    if(!currentUser){
      return <Navigate to="/react-chat-app/login"/>
    }
    return children;
  }
  return (
    <BrowserRouter>
     <Routes>
       <Route path="/react-chat-app">
        <Route index element={
          <ProtectedRoute>
            <Home/>
          </ProtectedRoute>
        }/>
        <Route path="/react-chat-app/login" element={<Login/>}/>
        <Route path="/react-chat-app/register" element={<Register/>}/>
       </Route>
     </Routes>
    </BrowserRouter>
  
  );
}

export default App;
