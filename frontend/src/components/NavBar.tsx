import { Navbar } from "@mantine/core";
import { MainLinks } from "./MainLinks";

function NavBar() {
  return (
    <Navbar width={{ base: 300 }} height={500} p="xs">
      <Navbar.Section grow mt="xs">
        <MainLinks />
      </Navbar.Section>
    </Navbar>
  );
}

export default NavBar;
