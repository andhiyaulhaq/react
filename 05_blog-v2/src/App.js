import { useState, useEffect, useRef } from "react";
import Form from "./Form";
import List from "./List";
import Table from "./Table";

function App() {
  const API_URL = "https://jsonplaceholder.typicode.com";
  const [reqType, setReqType] = useState("users");
  const [items, setItems] = useState([]);

  const fetchStart = useRef(false);

  useEffect(() => {
    if (fetchStart.current === true) {
      const fetchItems = async () => {
        try {
          const response = await fetch(`${API_URL}/${reqType}`);
          const data = await response.json();
          // console.log(data);
          // console.log(reqType);
          setItems(data);
        } catch (error) {
          console.log(error.message);
        }
      };
      fetchItems();
    }
    return () => {
      fetchStart.current = true;
    };
  }, [reqType]);

  return (
    <div className="App">
      <Form reqType={reqType} setReqType={setReqType} />
      {/* <List items={items} /> */}
      <Table items={items} />
    </div>
  );
}

export default App;
