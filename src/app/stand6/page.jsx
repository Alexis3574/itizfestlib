import CardTemplate from "../../Components/CardTemplate";

export default function Stand1Page() {
  const title = "Lbreria Perritos Literarios";
  const article =
    "Esta distribuidora busca establecer alianzas estratégicas con escuelas públicas para llevar una oferta de lectura diversa y pertinente a los jóvenes, con el objetivo de inculcar el hábito lector y proporcionarles herramientas para su desarrollo personal a través de novelas, best sellers y libros de autoayuda. Su labor se enfoca en facilitar el acceso a la lectura como una herramienta fundamental para la educación y el crecimiento de las nuevas generaciones."

  const images = [
    "/images/14_br.jpeg",
    "/images/17_br.jpeg",
  ]; 
  const article2 = "La inclusión de novelas sugiere una apuesta por narrativas que capturen la imaginación de los jóvenes, les permitan explorar diferentes mundos y personajes, y desarrollen su capacidad de inmersión y empatía. Este género literario es fundamental para cultivar el hábito lector a través del entretenimiento y la conexión emocional con las historias."; 
    const link = "https://www.instagram.com/perritos_literarios/"; 

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