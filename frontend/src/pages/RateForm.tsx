import { TextInput, Checkbox, Button, Group, Box, Select } from "@mantine/core";
import { useForm } from "@mantine/form";
import path from "path";
import Icon from "react-crypto-icons";

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
          defaultChecked={true}
          data={[
            { value: "BTC", label: "BTC" },
            { value: "Matic", label: "Matic" },
            { value: "USDC", label: "USDC" },
          ]}
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
          <Button type="submit">Submit</Button>
        </Group>
      </form>
    </Box>
  );
}

export default RateForm;
