import React from "react";
import {Wallet} from "tabler-icons-react";
import {
  AppShell,
  Navbar,
  Header,
  Group,
  ActionIcon,
  useMantineColorScheme,
  Button,
} from "@mantine/core";
import { MainLinks } from "./../src/components/_mainLinks";
// import { User } from './_user';
import { Logo } from "./../src/components/_logo";
import RateForm from "./../src/pages/RateForm";

function App() {
  return (
    <AppShell
      style={{height: '100%'}}
      padding="md"
      navbar={
        <Navbar width={{ base: 300 }} height={500} p="xs">
          <Navbar.Section grow mt="xs">
            <MainLinks />
          </Navbar.Section>
          <Navbar.Section>
            {/* <User /> */}
            USER
          </Navbar.Section>
        </Navbar>
      }
      header={
        <Header height={60}>
          <Group sx={{ height: "100%" }} px={20} position="apart">
            <Logo />
            <Button leftIcon={<Wallet />}>
              Connect to wallet
            </Button>
          </Group>
        </Header>
      }
      styles={(theme) => ({
        main: {
          backgroundColor:
            theme.colorScheme === "dark"
              ? theme.colors.dark[8]
              : theme.colors.gray[0],
        },
      })}
    >
      <RateForm />
    </AppShell>
  );
}

export default App;
