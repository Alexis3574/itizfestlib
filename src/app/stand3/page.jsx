import CardTemplate from "../../Components/CardTemplate";

export default function Stand1Page() {
  const title = "Paraíso Perdido";
  const article =
    "Paraíso Perdido es una editorial independiente fundada en Guadalajara, México, en 1998. Publicamos libros impresos, electrónicos e incluso audiolibros de cuento, novela, ensayo literario y crónica. También ediciones ilustradas y compilados temáticos de interés general. Apostamos por el  descubrimiento de nuevas voces y queremos proponer una manera diferente de observar el panorama narrativo de México y del mundo. Creemos que los lectores buscan historias frescas, más allá de la moda o la tendencia del mercado: textos que pongan sobre la mesa de discusión temas actuales, que les hablen de manera directa de su realidad independientemente de los géneros. Construimos un catálogo coherente y trascendente, que pueda perdurar y deje pistas al lector futuro sobre nuestro tiempo."

  const images = [
    "/images/6_br.jpeg",
    "/images/7_br.jpeg",
    "/images/8_br.jpeg",


  ]; 
  const article2 = "Nuestras ediciones son de alta calidad, atractivas a la vista y amables a la lectura, fusionan la tradición tipográfica con la innovación y la creatividad, de esa manera proporcionan un valor extra a cada lector. Nos importa la integración de un diseño editorial que apuesta en favor de la lectura secundado por el trabajo de jóvenes ilustradores que resaltan las cubiertas de los libros. Buscamos también nuevos canales de distribución para un mejor contacto con los lectores. Creemos firmemente que la labor de edición no termina cuando el libro sale de la imprenta, lo importante es que el lector lo encuentre de manera sencilla y accesible. Apostamos por un comercio justo. Nuestros mejores promotores son los lectores satisfechos."; 
  const link = "https://editorialparaisoperdido.com/editorial/quienes-somos/"; 

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
