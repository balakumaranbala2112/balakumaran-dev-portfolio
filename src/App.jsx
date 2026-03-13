import { RouterProvider } from "react-router-dom";
import router from "./routes/router";
import { Suspense } from "react";
import PageLoader from "./components/PageLoader";

const App = () => {
  return (
    <Suspense fallback={<PageLoader />}>
      <RouterProvider router={router} />
    </Suspense>
  );
};

export default App;
