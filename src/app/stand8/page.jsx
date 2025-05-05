import CardTemplate from "../../Components/CardTemplate";

export default function Stand1Page() {
  const title = "Editorial SM";
  const article =
    "El Catálogo de Literatura Infantil y Juvenil pertenece a SM. En él, lectores, padres, profesores, libreros... podrán encontrar todas las novedades publicadas por SM, así como todos los libros de fondo. También podrán estar informados de las noticias relacionadas con nuestros libros, autores, o mundo de la Literatura Infantil y Juvenil en general."

  const images = [
    "/images2/1_du.jpeg",
    "/images2/2_du.jpeg",
  ]; 
  const article2 = " Nuestro catálogo está divido por tramos de edades: de 0 a 5 años, infantil, juvenil y nuestra colección estrella: El Barco de Vapor. Dentro de cada tramo hay un buscador específico que te guiará en las búsquedas. Aunque también puedes usar el buscador avanzado. De cada libro obtendrás un montón de información, tanto del libro en sí (formato, precio, número de páginas…) como de todo lo que le rodea: autor, ilustrador, webs relacionadas, noticias, fotos, recursos didácticos…"; 
    const link = "https://es.literaturasm.com/quienes-somos"; 

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