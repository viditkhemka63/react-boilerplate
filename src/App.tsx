import { ConfigProvider } from "antd";
import "./App.css";
import Spinner from "./components/common/Spinner";
import { TableComponent } from "./components/common/table";
import { MainLayout } from "./components/layout";

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
        <MainLayout>
          <h1>Cockpit view</h1>
          <TableComponent />
        </MainLayout>
      </div>
    </ConfigProvider>
  );
}

export default App;
