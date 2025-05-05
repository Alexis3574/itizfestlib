import CardTemplate from "../../Components/CardTemplate";

export default function Stand1Page() {
  const title = "Librerías el sótano ";
  const article =
    "“LIBRERÍAS EL SÓTANO” abre por primera vez sus puertas al público en diciembre de 1967 en un sótano, por el cual recibe su nombre. Ubicada frente al Palacio de Bellas Artes, en el histórico barrio de la Alameda de la Ciudad de México, “LIBRERÍAS EL SÓTANO” pronto se convierte en un punto de referencia obligado para la adquisición de libros."

  const images = [
    "/images2/8_du.jpeg",
    "/images2/9_du.jpeg",
  ]; 
  const article2 = "Fue fundada por un bibliófilo y gran amante de los libros el Licenciado Manuel López Gallo, años más tarde, la Licenciada María Elena Ramírez Aguilar, esposa del Licenciado López Gallo, se integra al equipo. La pasión demostrada por estos libreros, les hizo ganar pronto un prestigio entre los lectores del país. Actualmente, Roberto Salgado es el director general de la cadena. “LIBRERÍAS EL SÓTANO” se mantiene en evolución constante tomando las calles, haciendo comunidad y movilizando a la sociedad en un espacio público que ofrece clubes de lectura y eventos que provocan un impacto real en la comunidad vecinal, laboral, estudiantil e incluso turística."; 
    const link = "https://www.elsotano.com/acerca"; 

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
