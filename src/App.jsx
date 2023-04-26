import { FormControl, FormLabel, Input, Select } from "@chakra-ui/react";

function App() {
  return (
    <main>
      <form>
        <FormControl>
          <FormLabel htmlFor="inputTest">Test Input</FormLabel>
          <Input name="inputTest" id="inputTest" type="text" />
        </FormControl>
        <FormControl>
          <FormLabel htmlFor="selectTest">Countries</FormLabel>
          <Select id="selectTest">
            <option value=""></option>
            <option value="PL">Poland</option>
            <option value="US">United States</option>
          </Select>
        </FormControl>
      </form>
    </main>
  );
}

export default App;
