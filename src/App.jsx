import { useState } from "react";
import images from "../src/img.png";
import "./style.css";
function App() {
  let [array, setArray] = useState([]);
  let [name, setName] = useState([]);
  let [text, setText] = useState("");
  let [data, setData] = useState("");
  return (
    <>
      {array.length == 0 && (
        <div className="inputdiv">
          <input
            type="text"
            onChange={(e) => {
              setText(e.target.value);
            }}
          />
          <input
            type="text"
            onChange={(e) => {
              setData(e.target.value);
            }}
          />
          <button
            onClick={() => {
              let myArray = text.trim().split(" ");
              let newArray = [];
              let newName = [];
              for (let i = 0; i < myArray.length; i += 2) {
                if (myArray[i].trim() !== "") {
                  newArray.push(myArray[i]);
                  newName.push(myArray[i + 1]);
                }
              }
              setName(newName);
              setArray(newArray);
            }}
          >
            Click
          </button>
        </div>
      )}
      {array.length > 0 && (
        <div className="divImage">
          {array.map((i, a) => {
            return (
              <div className="div2">
                <img src={images} alt="" />
                <div className="text">
                  <p>{i}</p>
                  <p>{name[a]}</p>
                  <h3>{data}</h3>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </>
  );
}

export default App;
