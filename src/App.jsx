// /* eslint react-hooks/exhaustive-deps: off*/
import React, { useEffect, useState } from "react";
import { ColorfulMessage } from "./components/ColorfulMessage";

const App = () => {
  const [num, setNum] = useState(0);
  const [faceShowFlag, setFaceShowFlag] = useState(false);

  const onClickCountUp = () => setNum(num + 1);
  const onClickChange = () => {
    setFaceShowFlag(!faceShowFlag);
  };

  useEffect(() => {
    if (num > 0) {
      if (num % 3 === 0) {
        faceShowFlag || setFaceShowFlag(true);
      } else {
        faceShowFlag && setFaceShowFlag(false);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [num]);

  return (
    <>
      <h1 style={{ color: "red" }}>sss</h1>
      <ColorfulMessage color="blue">お元気ですか？</ColorfulMessage>
      <button onClick={onClickCountUp}>カウントアップ</button>
      <ColorfulMessage color="pink">元気です!</ColorfulMessage>
      <p>{num}</p>
      <button onClick={onClickChange}>on/off</button>
      {faceShowFlag && <p>☺︎</p>}
    </>
  );
};

export default App;
