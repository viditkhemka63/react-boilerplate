import { ConfigProvider } from "antd";
import "./App.css";
import Spinner from "./components/common/Spinner";
import { MainLayout } from "./components/layout";

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
        <MainLayout>
          <h1>Cockpit view</h1>
        </MainLayout>
      </div>
    </ConfigProvider>
  );
}

export default App;
