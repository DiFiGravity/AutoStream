import React from "react";
import { AppShell, ActionIcon, useMantineColorScheme } from "@mantine/core";
import RateForm from "./../src/pages/RateForm";
import ConnectWalletButton from "./components/ConnectWalletButton";
import { StateProvider } from "./store/store";
import NavBar from "./components/NavBar";
import HeaderComponent from "./components/HeaderComponent";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Orders from "./pages/Orders";

function App() {
  return (
    <StateProvider>
      <Router>
        <AppShell
          style={{ height: "100%" }}
          padding="md"
          navbar={<NavBar />}
          header={<HeaderComponent />}
          styles={(theme) => ({
            main: {
              backgroundColor:
                theme.colorScheme === "dark"
                  ? theme.colors.dark[8]
                  : theme.colors.gray[0],
            },
          })}
        >
          <Routes>
            <Route path="/" element={<RateForm />} />
            <Route path="/activity" element={<Orders />} />
          </Routes>
        </AppShell>
      </Router>
    </StateProvider>
  );
}

export default App;
