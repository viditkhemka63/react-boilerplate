import { ConfigProvider } from "antd";
import "./App.css";
import Spinner from "./components/common/Spinner";
import { TableComponent } from "./components/common/table";
import { MainLayout } from "./components/layout";
import Router from "./routes/routes";

function App() {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorBgContainer: "#1c1c1e",
          colorBgElevated: "#eeeeee",
        },
      }}
    >
      <div>
        <Router />
      </div>
    </ConfigProvider>
  );
}

export default App;
