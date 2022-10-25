import { useState, useEffect } from "react";

function ChangeTitle() {
  const [title, setTitle] = useState(" Hello World");

  useEffect(() => {
    document.title = `Hi, ${title}`;
  }, [title]);

  return;
  // <>
  //   <div>
  //     <p>Use the input field below to rename this page!</p>
  //     <input type="text" onChange={(e) => setTitle(e.target.value)} />
  //   </div>
  // </>
}

export default ChangeTitle;
