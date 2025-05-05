import CardTemplate from "../../Components/CardTemplate";

export default function Stand1Page() {
  const title = " Porrúa Hermanos y Compañía";
  const article =
    "La inclusión de esta categoría sugiere un espacio que valora el pensamiento crítico, la reflexión y la exploración de ideas abstractas. Podríamos esperar encontrar obras de filósofos clásicos y contemporáneos, así como diferentes corrientes de pensamiento. Esto atraería a estudiantes, académicos y lectores con interés en comprender las bases del conocimiento y la existencia."

  const images = [
    "/images/10_br.jpeg",
    "/images/11_br.jpeg",
  
  ]; 
  const article2 = "Esta sección indica una apreciación por las obras fundamentales de la literatura universal, aquellas que han trascendido el tiempo y siguen siendo relevantes por su calidad narrativa, sus personajes y sus temas universales. Se podrían encontrar novelas, poesía, teatro y ensayos de autores canónicos de diversas épocas y culturas. Esto apelaría a lectores que buscan obras de gran valor artístico e histórico."; 
    const link = "https://www.google.com/url?sa=t&source=web&rct=j&opi=89978449&url=https://porrua.mx/&ved=2ahUKEwjqjYWutouNAxXpLUQIHddSBZkQFnoECBQQAQ&usg=AOvVaw0ku6V1jGu4LzryM1tGe2EF"; 

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
