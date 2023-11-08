import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import { Suspense, lazy } from "react";
import { ErrorBoundary } from "react-error-boundary";
import styled from "styled-components";

//lazy load
const Login = lazy(() => import("./components/Login"));
const About = lazy(() => import("./components/About"));
const Home = lazy(() => import("./components/Home"));
const Profile = lazy(() => import("./components/Profile"));

const isAuthenticated = true;

const App = () => {
  return (
    <div>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        {/* Actual components */}
        <BrowserRouter>
          <Routes>
            {isAuthenticated ? (
              <Route path="/*" element={<PrivateRoutes />} />
            ) : (
              <Route path="/*" element={<PublicRoutes />} />
            )}
          </Routes>
        </BrowserRouter>
      </ErrorBoundary>
    </div>
  );
};

export const PublicRoutes = () => {
  return (
    <Routes>
      <Route path="login" element={<Login />} />
      <Route
        path="login"
        element={
          <Suspense fallback={<>Loading...</>}>
            <Login />
          </Suspense>
        }
      />
      <Route path="/*" element={<Navigate to="/login" replace />} />
    </Routes>
  );
};

export const PrivateRoutes = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="profile" element={<Profile />} />
        <Route path="about" element={<About />} />
        <Route path="home" element={<Home />} />

        <Route path="/*" element={<Navigate to="/profile" replace />} />
      </Routes>
      <Footer>
        Contact us @
        <a href="mailto:hege@example.com">mpushparaja13@gmail.com</a>
      </Footer>
    </>
  );
};

const ErrorFallback = () => {
  return (
    <div role="alert">
      <p>Something went wrong:</p>
      {/* <pre style={{ color: "red" }}>{error.message}</pre> */}
    </div>
  );
};

export default App;

const Footer = styled.div`
  background-color: #1817dd;
  color: #fff;
  height: 30px;
  position: fixed;
  bottom: 0;
  width: 100%;
  text-align: center;
`;
