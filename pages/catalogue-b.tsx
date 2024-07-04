import useHasMounted from "@/hooks/use-has-mounted";
import Link from "next/link";

const CatalogueB: React.FC = () => {
  const hasMounted = useHasMounted();

  if (!hasMounted) return null;

  return (
    <>
      <div>
        <Link href="/catalogue-a">Catalogue A</Link>
      </div>
      <div>
        <Link href="/two-catalogues">Two catalogues</Link>
      </div>
      <div>
        <Link href="/switch-catalogue">Switch catalogue</Link>
      </div>

      <section className="o-catalog-aviou" data-component="catalog-aviou">
        <div className="o-catalog-aviou__container">
          <av-catalogue
            url="https://helsam.aviou.io/juni-digitalavis"
            id="3184"
          ></av-catalogue>
        </div>
      </section>
    </>
  );
};

export default CatalogueB;
