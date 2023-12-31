import { HashRouter, Routes, Route } from "react-router-dom";
import { Menu } from "./Menu";
import { HomePage } from "./HomePage";
import { BlogPage } from "./BlogPage";
import { ProfilePage } from "./ProfilePage";
import { BlogPost } from "./BlogPost.js";
import { LoginPage } from "./LoginPage";
import { LogoutPage } from "./LogoutPage";
import { AuthProvider, AuthRoute } from './auth';

const App = () => {
  return (
    <>
      <HashRouter>
        <AuthProvider>
        <Menu />

        <Routes>
          <Route path="/" element={<HomePage />} />
          
          <Route path="/blog" element={<BlogPage />} >
          <Route path=":slug" element={<BlogPost />} />
          </Route>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/profile" 
               element={
              <AuthRoute>
                <ProfilePage />  
              </AuthRoute>} 
        />
        <Route path="/logout" 
               element={
              <AuthRoute>
                <LogoutPage />  
              </AuthRoute>} 
        />

        <Route path="*" element={<p> Not found </p>} />

        </Routes>
        </AuthProvider>
      </HashRouter>
    </>
  );
}

export default App;
