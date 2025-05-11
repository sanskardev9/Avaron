import { Input, InputGroup } from "rsuite";
import SearchIcon from "@rsuite/icons/Search";

const SearchBar = () => {
  return (
    <div style={{ color: "white" }}>
      <InputGroup
        className="bg-light"
        style={{ border: "white", borderRadius: "100px", border: "none" }}
      >
        <Input
          className="bg-light"
          placeholder="Search individual driver"
          style={{
            height: "57px",
            borderTopLeftRadius: "100px",
            borderBottomLeftRadius: "100px",
            border: "none",
            backgroundColor: "#",
          }}
        />
        <InputGroup.Button
          style={{
            borderRadius: "50px",
            width: "55px",
            height: "55px",
            border: "none",
            backgroundColor: "#fff",
          }}
          className="bg-dark text-white"
        >
          <SearchIcon style={{ height: "20px", width: "20px" }} />
        </InputGroup.Button>
      </InputGroup>
    </div>
  );
};

export default SearchBar;
