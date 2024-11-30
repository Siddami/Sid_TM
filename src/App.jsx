import { useState, useEffect } from "react";
import Header from "./components/Header";
import Center from "./components/Center";

function Loader() {
  return (
    <div className="loader">
      <div className="spinner"></div>
      <p>Loading...</p>
    </div>
  );
}


function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading delay
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // 2 seconds

    return () => clearTimeout(timer); // Cleanup timer on unmount
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <div>
       {/* Header Section */}
       <Header />

       {/* Center Section */}
       <Center />
    </div>
  );
}

export default App;
