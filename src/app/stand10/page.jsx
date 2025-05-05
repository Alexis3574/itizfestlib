import CardTemplate from "../../Components/CardTemplate";

export default function Stand1Page() {
  const title = "Maribel Ortega Soto";
  const article =
    "Es una escritora independiente y profesional dedicada a la venta de libros especializados en frases de superación personal y poesía. Su labor se centra en ofrecer obras que promueven el desarrollo emocional, la reflexión y la motivación a través del poder de la palabra escrita."

  const images = [
    "/images2/6_du.jpeg",
    "/images2/7_du.jpeg",
  ]; 
  const article2 = "Con un enfoque ético y comprometido, selecciona y distribuye títulos cuidadosamente elaborados que buscan generar un impacto positivo en la vida de los lectores. Su trayectoria combina la sensibilidad literaria con una vocación por el acompañamiento humano, brindando contenido significativo a quienes valoran la introspección y el bienestar interior."; 
    const link = "https://www.tiktok.com/@belle.ortega.soto"; 

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