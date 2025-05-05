import CardTemplate from "../../Components/CardTemplate";

export default function Stand1Page() {
  const title = "Editorial Lectorum";
  const article =
    "Somos una Editorial y Distribuidora Mexicana que se ha encargado de promover la literatura clásica y contemporáneaen México y Latinoamérica desde 1993.Está presente con casas propias en: Miami, E.U., Buenos Aires, Argentina.Además presente en otros países de Latinoamérica: Panamá, Chile, Venezuela, Colombia, España y Costa Rica."

  const images = [
    "/images/12_br.jpeg",
    "/images/13_br.jpeg",
  ]; 
  const article2 = "Lectorum ha desarrollado diferentes sellos con temáticas de interés general, debidamentesegmentados al mercado mexicano, como: Literarura Mexicana e Internacional, Divulgación Histórica, DesarrolloPersonal, Espiritualidad, Salud, entre otros."; 
    const link = "https://www.lectorum.com.mx/nosotros"; 

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
