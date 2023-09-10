import './App.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { ALL_ROUTES } from './shared/routes';
import { ProtectedRoute } from './components/ProtectedRoute';
import {
  DashboardContainer,
  Dashboard,
  Login,
  NotFound,
  MyProfile,
  UploadDoc,
  DocList,
  Chat,
} from './pages';
import Register from './pages/Register';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path={ALL_ROUTES.LOGIN} element={<Login />} />
          <Route path={ALL_ROUTES.REGISTER} element={<Register />} />
          <Route path="*" element={<NotFound />} />
          <Route element={<ProtectedRoute />}>
            <Route path={ALL_ROUTES.HOME} element={<DashboardContainer />}>
              <Route
                path={ALL_ROUTES.UPLOAD_DOC}
                element={<UploadDoc />}
              ></Route>
              <Route path={ALL_ROUTES.DOC_LIST} element={<DocList />}></Route>
              <Route path={ALL_ROUTES.CHAT} element={<Chat />}></Route>
              <Route
                path={ALL_ROUTES.MY_PROFILE}
                element={<MyProfile />}
              ></Route>
              <Route index element={<Dashboard />}></Route>
            </Route>
          </Route>
          <Route />
          <Route />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
