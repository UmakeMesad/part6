import YourProject from "./yourProject";
import { useState } from 'react';
export default function Dropdown() {
    const [selected,setSelected] = useState("");
    return (
        <div className="App-dropdown">
<YourProject selected={selected}  setSelected = {setSelected} />
        </div>
        );
}
