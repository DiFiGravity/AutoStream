import {
  Header,
  Group,
} from '@mantine/core'
import ConnectWalletButton from './ConnectWalletButton'
import { Logo } from './_logo'

function HeaderComponent() {
  return (
        <Header height={60}>
          <Group sx={{ height: "100%" }} px={20} position="apart">
            <Logo />
            <ConnectWalletButton />
          </Group>
        </Header>
  )
}

export default HeaderComponent