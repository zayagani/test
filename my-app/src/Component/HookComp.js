import React, { useState } from 'react';

function Example() {
  // Declare a new state variable, which we'll call "count"
  const [count, setCounts] = useState(null);

  return (
    <div>
       <p>setcount {setCounts}</p>
      <p>You clicked {count} times</p>
      <button onClick={() => setCounts(count + 1)}>
        Click me
      </button>
    </div>
  );
}

export default Example;