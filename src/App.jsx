import {
  FormControl,
  FormLabel,
  Input,
  Select,
  Button,
} from "@chakra-ui/react";

function App() {
  function submitForm(e) {
    e.preventDefault();

    const formData = new FormData(e.target);

    console.log([...formData]);
  }

  return (
    <main>
      <form onSubmit={submitForm}>
        <FormControl>
          <FormLabel htmlFor="inputTest">Test Input</FormLabel>
          <Input name="inputTest" id="inputTest" type="text" />
        </FormControl>
        <FormControl>
          <FormLabel htmlFor="selectTest">Countries</FormLabel>
          <Select id="selectTest" name="selectTest">
            <option value=""></option>
            <option value="PL">Poland</option>
            <option value="US">United States</option>
          </Select>
        </FormControl>
        <Button colorScheme="green" type="submit">
          Submit
        </Button>
      </form>
    </main>
  );
}

export default App;
