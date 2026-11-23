import React, { useEffect, useState } from "react";
import { Routes, Route, Navigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";

import AuthRoutes from "./routes/AuthRoutes";
import StoreRoutes from "./routes/StoreRoutes";
import BranchManagerRoutes from "./routes/BranchManagerRoutes";
import CashierRoutes from "./routes/CashierRoutes";
import SuperAdminRoutes from "./routes/SuperAdminRoutes";

import Landing from "./pages/common/Landing/Landing";
import Onboarding from "./pages/onboarding/Onboarding";
import PageNotFound from "./pages/common/PageNotFound";

import { getUserProfile } from "./Redux Toolkit/features/user/userThunks";
import { getStoreByAdmin } from "./Redux Toolkit/features/store/storeThunks";

const App = () => {
  const dispatch = useDispatch();

  const { userProfile, loading: userLoading } = useSelector(
    (state) => state.user
  );
  const { store } = useSelector((state) => state.store);

  const [authChecked, setAuthChecked] = useState(false);

  // 🔐 AUTH CHECK (ONCE)
  useEffect(() => {
    const jwt = localStorage.getItem("jwt");

    if (!jwt) {
      setAuthChecked(true);
      return;
    }

    dispatch(getUserProfile(jwt)).finally(() => {
      setAuthChecked(true);
    });
  }, [dispatch]);

  // 🏬 LOAD STORE ONLY AFTER USER READY
  useEffect(() => {
    if (userProfile?.role === "ROLE_STORE_ADMIN") {
      dispatch(getStoreByAdmin(userProfile.jwt));
    }
  }, [dispatch, userProfile]);

  // ⏳ GLOBAL LOADER (NO ROUTES YET)
  if (!authChecked || userLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="h-14 w-14 border-4 border-primary border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  // ================= ROUTES =================

  if (!userProfile?.role) {
    return (
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/auth/*" element={<AuthRoutes />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    );
  }

  switch (userProfile.role) {
    case "ROLE_ADMIN":
      return (
        <Routes>
          <Route path="/" element={<Navigate to="/super-admin" replace />} />
          <Route path="/super-admin/*" element={<SuperAdminRoutes />} />
          <Route path="*" element={<Navigate to="/super-admin" replace />} />
        </Routes>
      );

    case "ROLE_BRANCH_CASHIER":
      return (
        <Routes>
          <Route path="/" element={<Navigate to="/cashier" replace />} />
          <Route path="/cashier/*" element={<CashierRoutes />} />
          <Route path="*" element={<Navigate to="/cashier" replace />} />
        </Routes>
      );

    case "ROLE_STORE_ADMIN":
    case "ROLE_STORE_MANAGER":
      if (!store) {
        return (
          <Routes>
            <Route path="/auth/onboarding" element={<Onboarding />} />
            <Route path="*" element={<Navigate to="/auth/onboarding" replace />} />
          </Routes>
        );
      }

      return (
        <Routes>
          <Route path="/" element={<Navigate to="/store" replace />} />
          <Route path="/store/*" element={<StoreRoutes />} />
          <Route path="*" element={<Navigate to="/store" replace />} />
        </Routes>
      );

    case "ROLE_BRANCH_MANAGER":
    case "ROLE_BRANCH_ADMIN":
      return (
        <Routes>
          <Route path="/" element={<Navigate to="/branch" replace />} />
          <Route path="/branch/*" element={<BranchManagerRoutes />} />
          <Route path="*" element={<Navigate to="/branch" replace />} />
        </Routes>
      );

    default:
      return (
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      );
  }
};

export default App;


// import React, { useEffect } from "react";
// import { Routes, Route, Navigate } from "react-router";
// import { useDispatch, useSelector } from "react-redux";

// // Auth and Store Routes
// import AuthRoutes from "./routes/AuthRoutes";
// import StoreRoutes from "./routes/StoreRoutes";
// import BranchManagerRoutes from "./routes/BranchManagerRoutes";
// import { getUserProfile } from "./Redux Toolkit/features/user/userThunks";
// import Landing from "./pages/common/Landing/Landing";
// import CashierRoutes from "./routes/CashierRoutes";
// import Onboarding from "./pages/onboarding/Onboarding";
// import { getStoreByAdmin } from "./Redux Toolkit/features/store/storeThunks";
// import SuperAdminRoutes from "./routes/SuperAdminRoutes";
// import PageNotFound from "./pages/common/PageNotFound";

// const App = () => {
//   const dispatch = useDispatch();
//   const { userProfile } = useSelector((state) => state.user);
//   const { store } = useSelector((state) => state.store);

//   useEffect(() => {
//     const jwt = localStorage.getItem("jwt");
//     if (jwt) {
//       dispatch(getUserProfile(jwt));
//     }
//   }, [dispatch]);

//   useEffect(() => {
//     if (userProfile && userProfile.role === "ROLE_STORE_ADMIN") {
//       dispatch(getStoreByAdmin(userProfile.jwt));
//     }
//   }, [dispatch, userProfile]);

//   let content;

//   // console.log("state ", user)

//   if (userProfile && userProfile.role) {
//     // User is logged in
//     if (userProfile.role === "ROLE_ADMIN") {
//       content = (
//         <Routes>
//           <Route path="/" element={<Navigate to="/super-admin" replace />} />
//           <Route path="/super-admin/*" element={<SuperAdminRoutes />} />

//           {/* chatgpt recomm */}
//           {/* <Route path="/auth/*" element={<Navigate to="/super-admin" replace />} /> */}
//           <Route path="*" element={<Navigate to="/super-admin" replace />} />

//           {/* <Route
//             path="*"
//             element={<PageNotFound/>}
//           /> */}
//         </Routes>
//       );
//     } else if (userProfile.role === "ROLE_BRANCH_CASHIER") {
//       content = (
//         <Routes>
//           <Route path="/" element={<Navigate to="/cashier" replace />} />
//           <Route path="/cashier/*" element={<CashierRoutes />} />
//           <Route path="*" element={<Navigate to="/cashier" replace />} />
//           {/* <Route
//             path="*"
//             element={<PageNotFound/>}
//           /> */}
//         </Routes>
//       );
//     } else if (
//       userProfile.role === "ROLE_STORE_ADMIN" ||
//       userProfile.role === "ROLE_STORE_MANAGER"
//     ) {
//       // console.log("get inside", store);
//       if (!store) {
//         // console.log("get inside 1");
//         content = (
//           <Routes>
//             <Route path="/auth/onboarding" element={<Onboarding />} />
//             <Route
//               path="*"
//               element={<PageNotFound/>}
//             />
//           </Routes>
//         );
//         return content;
//       } else {
//         // console.log("get inside 2");
//         content = (
//           <Routes>
//             <Route path="/" element={<Navigate to="/store" replace />} />
//             <Route path="/store/*" element={<StoreRoutes />} />
//             <Route path="*" element={<Navigate to="/store" replace />} />
//             {/* <Route
//               path="*"
//               element={<PageNotFound/>}
//             /> */}
//           </Routes>
//         );
//       }
//     } else if (
//       userProfile.role === "ROLE_BRANCH_MANAGER" ||
//       userProfile.role === "ROLE_BRANCH_ADMIN"
//     ) {
//       content = (
//         <Routes>
//           <Route path="/" element={<Navigate to="/branch" replace />} />
//           <Route path="/branch/*" element={<BranchManagerRoutes />} />
//           <Route path="*" element={<Navigate to="/branch" replace />} />
//           {/* <Route
//             path="*"
//             element={<PageNotFound/>}
//           /> */}
//         </Routes>
//       );
//     } else {
//       // Unknown role, redirect to landing or error page
//       content = (
//         <Routes>
//           <Route path="/" element={<Landing />} />
//            <Route path="*" element={<Navigate to="/" replace />} />
//           {/* <Route
//             path="*"
//             element={ <PageNotFound/>}
//           /> */}
//         </Routes>
//       );
//     }
//   } else {
//     // User is not logged in, show landing page and auth routes
//     content = (
//       <Routes>
//         <Route path="/" element={<Landing />} />
//         <Route path="/auth/*" element={<AuthRoutes />} />
//         <Route
//           path="*"
//           element={
//           <PageNotFound/>
//           }
//         />
//       </Routes>
//     );
//   }

//   return content;
// };

// export default App;
