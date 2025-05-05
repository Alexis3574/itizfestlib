import CardTemplate from "../../Components/CardTemplate";

export default function Stand1Page() {
  const title = "Comercial, técnico";
  const article =
    "Esta distribuidora se especializa en la promoción y comercialización de un amplio espectro de literatura, abarcando tanto obras de literatura comercial como material educativo específicamente diseñado para carreras universitarias. Su catálogo busca satisfacer las demandas de un público diverso, desde lectores ávidos de las últimas novedades y best-sellers hasta estudiantes y académicos que requieren textos especializados para su formación profesional."

  const images = [
    "/images2/10_du.jpeg",
  ]; 
  const article2 = "En el ámbito de la literatura comercial, la distribuidora trabaja con una selección de títulos que capturan las tendencias del mercado, incluyendo novelas de diversos géneros, ficción contemporánea, thrillers, ciencia ficción y otros libros de gran atractivo para el público general. Su objetivo es asegurar la disponibilidad de estas obras en librerías y puntos de venta, facilitando el acceso a las lecturas más populares del momento."; 
    const link = "https://www.google.com/maps/place/Distribuidora+De+Libros+Tecnicos,+S.A.+De+C.V./@19.4304784,-99.1484151,17z/data=!3m1!4b1!4m6!3m5!1s0x85d1ff2ad1abd143:0x7f97786d74b4d402!8m2!3d19.4304784!4d-99.1484151!16s%2Fg%2F1td4_5xz?entry=ttu&g_ep=EgoyMDI1MDQzMC4xIKXMDSoASAFQAw%3D%3D"; 

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