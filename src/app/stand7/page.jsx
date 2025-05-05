import CardTemplate from "../../Components/CardTemplate";

export default function Stand1Page() {
  const title = "Fondo de Cultura Económica (FCE)";
  const article =
    "El Fondo de Cultura Económica (FCE) se fundó en 1934 por Daniel Cosío Villegas con el objetivo inicial de publicar textos de economía para estudiantes universitarios. Rápidamente expandió su catálogo a áreas como ciencia política, historia y filosofía, incorporando autores de prestigio y creando colecciones emblemáticas como Tezontle, Breviarios y Letras Mexicanas. El FCE trascendió fronteras con la apertura de filiales en Argentina (1945) y España (1963), entre otros países, y fue reconocido con el Premio Príncipe de Asturias en 1989."

  const images = [
    "/images/16_br.jpeg",
    "/images/19_br.jpeg",
    "/images/20_br.jpeg",

  ]; 
  const article2 = "En 1991 incursionó en la literatura infantil con la colección A la orilla del viento y en 1992 inauguró su sede principal. Desde 2019, el FCE ha implementado una nueva política editorial centrada en la reducción de precios y la ampliación de su oferta, con colecciones como Vientos del Pueblo y una renovación de colecciones existentes para atraer a nuevos lectores, especialmente jóvenes, a través de precios accesibles y temáticas diversas. El FCE también ha modernizado su presencia en línea para facilitar el acceso a su catálogo y la interacción con sus lectores."; 
    const link = "https://www.fondodeculturaeconomica.com/Historia"; 

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