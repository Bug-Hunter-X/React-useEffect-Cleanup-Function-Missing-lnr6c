```javascript
import React, { useState, useEffect } from 'react';

function MyComponent() {
  const [count, setCount] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;
    const controller = new AbortController(); 
    const signal = controller.signal;
    
    const fetchData = async () => {
      try {
        const response = await fetch('/api/data', {signal});
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        if (isMounted) {
          setCount(data.count);
          setIsLoading(false);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
        setIsLoading(false);
      }
    };

    fetchData();

    return () => {
      isMounted = false;  //Prevent setState on an unmounted component
      controller.abort(); // Abort the fetch request
    };
  }, []);

  if(isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>Count: {count}</div>
  );
}

export default MyComponent;
```