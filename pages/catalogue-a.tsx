import useHasMounted from "@/hooks/use-has-mounted";
import Link from "next/link";

const CatalogueA: React.FC = () => {
  const hasMounted = useHasMounted();

  if (!hasMounted) return null;
  
  return (
    <>
      <div><Link href="/catalogue-b">Catalogue B</Link></div>
      <div><Link href="/two-catalogues">Two catalogues</Link></div>
      <div><Link href="/switch-catalogue">Switch catalogue</Link></div>

      <av-catalogue url="https://aviou-demo.aviou.io/gaming-days" id="1538"></av-catalogue>
    </>
  );
};

export default CatalogueA;
