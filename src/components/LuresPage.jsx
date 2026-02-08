import { useEffect, useState } from "react";
import Navbar from "./Navbar.jsx";
import LureCards from "./LureCards.jsx";
function LuresPage() {
  const [lures, setLures] = useState([]);

  useEffect(() => {
    const fetchLures = async () => {
      try {
        const response = await fetch("http://localhost:8081/lures");
        if (!response.ok) throw new Error("Failed to fetch lures");

        const data = await response.json();

        const list = Array.isArray(data)
          ? data.flatMap((doc) => (Array.isArray(doc?.lures) ? doc.lures : []))
          : Array.isArray(data?.lures)
            ? data.lures
            : [];

        setLures(list);
      } catch (error) {
        alert("Error loading lures: " + error.message);
      }
    };

    fetchLures();
  }, []);

  return (
    <div>
      <Navbar />
      <LureCards lures={lures} />
    </div>
  );
}
export default LuresPage;
