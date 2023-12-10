import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [test, setTest] = useState("Hello");
  useEffect(() => {
    (async () => {
      let res = await axios.get("/api");
      setTest(res.data);
    })();
  }, []);
  return (
    <div className=" font-noto text-slate-900">
      <h1 className=" font-semibold text-2xl">{test}</h1>
    </div>
  );
}

export default App;
