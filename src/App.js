import React, { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Loader from "./Loader";
const Home = lazy(() => import("./components/home/Home"));
const CreateAccount = lazy(() =>
  import("./components/create_account/CreateAccount")
);

const App = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create-account" element={<CreateAccount />} />
      </Routes>
    </Suspense>
  );
};

export default App;
