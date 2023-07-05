import useHasMounted from "@/hooks/use-has-mounted";
import Link from "next/link";
import { useState } from "react";

const SwitchCatalogue: React.FC = () => {
  const hasMounted = useHasMounted();
  
  const [id, setId] = useState("1538");
  const [url, setUrl] = useState("https://aviou-demo.aviou.io/gaming-days");

  if (!hasMounted) return null;
  
  return (
    <>
      <div>
        <button 
          onClick={() => {
            setId(id === "1538" ? "1535" : "1538");
            setUrl(
              url == "https://aviou-demo.aviou.io/gaming-days" 
                ? "https://aviou-demo.aviou.io/shoppable-content-running-guide" 
                : "https://aviou-demo.aviou.io/gaming-days"
            );
          }}
        >
          Switch catalogue
        </button>
      </div>

      <div><Link href="/catalogue-a">Catalogue A</Link></div>
      <div><Link href="/catalogue-b">Catalogue B</Link></div>
      <div><Link href="/two-catalogues">Two catalogues</Link></div>

      <av-catalogue url={url} id={id}></av-catalogue>
    </>
  );
};

export default SwitchCatalogue;
