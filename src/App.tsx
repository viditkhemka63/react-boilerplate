import { ConfigProvider } from "antd";
import "./App.css";
import Router from "./routes/routes";
import { QueryClient, QueryClientProvider } from "react-query";

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
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
    </QueryClientProvider>
  );
}

export default App;
