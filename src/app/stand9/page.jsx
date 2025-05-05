import CardTemplate from "../../Components/CardTemplate";

export default function Stand1Page() {
  const title = "LIbros del Orinoco";
  const article =
    "En el dinámico panorama editorial mexicano, diversas casas editoriales se distinguen por su compromiso con la difusión de la literatura nacional y la exploración de temáticas relevantes para el lector contemporáneo. Estas editoriales no solo enriquecen el acervo cultural del país, sino que también ofrecen un espacio para voces emergentes y consolidadas en diversos géneros."

  const images = [
    "/image2/3_du.jpeg",
    "/images2/4_du.jpeg",
    "/images2/5_du.jpeg",
  ]; 
  const article2 = "Dentro de su catálogo, se puede encontrar una amplia gama de literatura, abarcando desde la novela y el cuento hasta la poesía y el ensayo. Estas obras reflejan la riqueza y complejidad de la experiencia mexicana, abordando temas históricos, sociales, culturales y personales con perspectivas únicas y originales."; 
    const link = "https://www.facebook.com/libros.del.orinoco/"; 

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