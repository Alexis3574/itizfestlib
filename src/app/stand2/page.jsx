import CardTemplate from "../../Components/CardTemplate";

export default function Stand1Page() {
  const title = "Merlina Libreria Anticuaria ";
  const article =
    "La denominación Merlina Antiquarian Bookstore sugiere una librería especializada en obras antiguas y de colección, imbuida de una atmósfera distintiva. El término Merlina evoca la figura de un personaje caracterizado por su agudeza intelectual, su inclinación hacia lo inusual y un cierto aire de misterio. Por consiguiente, se podría inferir que este establecimiento ofrece un catálogo selecto de volúmenes raros, primeras ediciones y otros materiales bibliográficos de valor histórico o intrínseco."

  const images = [
    "/images/3_br.jpeg",
    "/images/4_br.jpeg",
    "/images/5_br.jpeg",

  ]; 
  const article2 = "La adición de Antiquarian Bookstore enfatiza su enfoque en el mercado del libro antiguo, lo que implica un espacio dedicado a la preservación y difusión de ejemplares que trascienden su mera función textual para convertirse en objetos de interés histórico y cultural. Se presume que el ambiente del local reflejará esta especialización, con una disposición que invite a la exploración pausada y al descubrimiento de piezas bibliográficas singulares."; 
  const link = "https://www.facebook.com/ellibroysusorillaslibreria/"; 

  return (
    <CardTemplate
      title={title}
      article={article}
      article2={article2}
      images={images} 
      link={link}
    />
  );

}