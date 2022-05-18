import { Header, Group } from "@mantine/core";
import ConnectWalletButton from "./ConnectWalletButton";

function HeaderComponent() {
  return (
    <Header height={60}>
      <Group sx={{ height: "100%" }} px={20} position="apart">
        <span style={{ fontSize: "30px" }}>AutoStream</span>
        <ConnectWalletButton />
      </Group>
    </Header>
  );
}

export default HeaderComponent;
