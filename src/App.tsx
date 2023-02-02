import { Button, ConfigProvider } from "antd";
import "./App.css";
import Sidebar from "./components/layout/sidebar/sidebar";

function App() {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorBgContainer: "#1c1c1e",
          colorBgElevated: "#eeeeee",

          //           colorPrimary: "#1c1c1e",
        },
      }}
    >
      <div>
        <Sidebar>
          <h1>Cockpit view</h1>
        </Sidebar>
      </div>
    </ConfigProvider>
  );
}

export default App;
