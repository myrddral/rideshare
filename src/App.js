import React from "react";
import "./App.css";
import RideShare from "./components/RideShare";
import { AuthProvider } from "./contexts/AuthContext";
import { ConfigProvider } from 'antd';
import huHU from 'antd/lib/locale/hu_HU';

function App() {
  return (
    <AuthProvider>
      <ConfigProvider locale={huHU}>
      <RideShare />
      </ConfigProvider>
    </AuthProvider>
  );
}

export default App;
