import useHasMounted from "@/hooks/use-has-mounted";
import Link from "next/link";

const CatalogueB: React.FC = () => {
  const hasMounted = useHasMounted();

  if (!hasMounted) return null;
  
  return (
    <>
      <div><Link href="/catalogue-a">Catalogue A</Link></div>
      <div><Link href="/two-catalogues">Two catalogues</Link></div>
      <div><Link href="/switch-catalogue">Switch catalogue</Link></div>

      <av-catalogue url="https://aviou-demo.aviou.io/shoppable-content-running-guide" id="1535"></av-catalogue>
    </>
  );
};

export default CatalogueB;
