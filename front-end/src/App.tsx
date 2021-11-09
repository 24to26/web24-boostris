import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './App.scss';
import LobbyPage from './pages/LobbyPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import ProfilePage from './pages/ProfilePage';
import Tetris from './components/Tetris';
import OauthCallbackRouter from './routes/OauthCallbackRouter';
import RequireAuth from './routes/RequireAuth';
import RankPage from './pages/RankPage';

import { useEffect } from 'react';
import { useAppDispatch } from './app/hooks';
import { checkAuth } from './features/user/userSlice';
import useAuth from './hooks/use-auth';

function App() {
  let { auth } = useAuth();
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(checkAuth());
  }, [dispatch]);

  if (auth.status === 'loading') {
    return <div className="App">loading...</div>;
  }

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <RequireAuth>
                <LobbyPage />
              </RequireAuth>
            }
          />
          <Route
            path="/tetris"
            element={
              <RequireAuth>
                <Tetris />
              </RequireAuth>
            }
          />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/oauth/*" element={<OauthCallbackRouter />} />
          <Route path="rank" element={<RankPage />} />
          <Route path="/profile" element={<ProfilePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
