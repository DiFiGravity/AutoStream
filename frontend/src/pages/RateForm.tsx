import { TextInput, Checkbox, Button, Group, Box, Select, Image, Text } from "@mantine/core";
import { useForm } from "@mantine/form";
import path from "path";
import React from "react";
import { forwardRef } from "react";
import Icon from "react-crypto-icons";
import { pathToFileURL } from "url";

const tokens = [
  {image: "../resources/logos/btc.png", value: "BTC", label: "BTC"},
  {image: "../resources/logos/matic.png", value: "Matic", label: "Matic"},
  {image: "../resources/logos/usdc.png", value: "USDC", label: "USDC"},
]

interface ItemProps extends React.ComponentPropsWithoutRef<'div'> {
  image: string;
  value: string;
  label: string;
}

const selectItem = forwardRef<HTMLDivElement, ItemProps>(
  ({ image, value, label, ...others }: ItemProps, ref) => (
    <div ref={ref} {...others}>
      <Group noWrap>
        <Image src={image} />

        <div>
          <Text size="sm">{label}</Text>
        </div>
      </Group>
    </div>
  )
);

function RateForm() {
  const form = useForm({
    initialValues: {
      email: "",
      termsOfService: false,
    },

    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
    },
  });

  return (
    <Box sx={{ maxWidth: 300 }} mx="auto">
      <form onSubmit={form.onSubmit((values) => console.log(values))}>

        <Select
          label="Token"
          placeholder="Select a token"
          defaultChecked={true}
          itemComponent={selectItem}
          data={tokens}
          transition="pop-top-left"
          transitionDuration={80}
          transitionTimingFunction="ease"
        />

        <TextInput
          required
          label="Upper limit"
          placeholder="USD"
          type="number"
        />

        <TextInput
          required
          label="Lower limit"
          placeholder="USD"
          type="number"
        />

        <TextInput
          required
          label="Rate"
          placeholder="USD/day"
          type="number"
        />


        <Group position="center" mt="md">
          <Button>Approve</Button>
          <Button type="submit" disabled={false}>Submit</Button>
        </Group>
      </form>
    </Box>
  );
}

export default RateForm;
