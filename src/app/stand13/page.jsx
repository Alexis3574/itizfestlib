import CardTemplate from "../../Components/CardTemplate";

export default function Stand1Page() {
  const title = "Libreria Educal";
  const article =
    "Con una trayectoria sólida de 29 años en el sector, esta distribuidora comercial se ha consolidado como un actor clave en el fomento de la lectura y la formación de los jóvenes en la Ciudad de México. Su enfoque principal radica en la cuidadosa selección y distribución de libros infantiles y juveniles, reconociendo la importancia crucial de estas etapas en el desarrollo del hábito lector y la adquisición de conocimientos."

  const images = [
    "/images2/11_du.jpeg",
    "/images2/13_du.jpeg",
  ]; 
  const article2 = "Su catálogo infantil abarca una amplia gama de títulos diseñados para estimular la imaginación, despertar la curiosidad y cultivar el amor por la lectura desde las edades más tempranas. Desde cuentos ilustrados y libros de actividades hasta propuestas educativas y lúdicas, su oferta busca acompañar a los niños en su descubrimiento del mundo a través de las páginas."; 
    const link = "https://www.educal.com.mx/"; 

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