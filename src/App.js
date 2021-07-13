import React from "react";
import "./App.css";
import RideShare from "./components/RideShare";
import { AuthProvider } from "./contexts/AuthContext";

function App() {
  return (
    <AuthProvider>
      <RideShare />
    </AuthProvider>
  );
}

export default App;
