import React, { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Loader from "./Loader";
const Home = lazy(() => import("./components/home/Home"));
const CreateAccount = lazy(() =>
  import("./components/create_account/CreateAccount")
);
const ForgotPassword = lazy(() =>
  import("./components/forgot_password/ForgotPassword")
);
const Instructions = lazy(() =>
  import("./components/dashboard/instructions/Instructions")
);
const ApplicationForm = lazy(() =>
  import("./components/dashboard/application_form/ApplicationForm")
);
const HomeDashboard = lazy(() =>
  import("./components/dashboard/home_dashboard/HomeDashboard")
);

const App = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create-account" element={<CreateAccount />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/dashboard/instructions" element={<Instructions />} />
        <Route
          path="/dashboard/application-form"
          element={<ApplicationForm />}
        />
        <Route path="/dashboard/home" element={<HomeDashboard />} />
      </Routes>
    </Suspense>
  );
};

export default App;
