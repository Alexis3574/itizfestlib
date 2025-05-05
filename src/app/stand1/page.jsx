import CardTemplate from "../../Components/CardTemplate";

export default function Stand1Page() {
  const title = "Ecoe Ediciones";
  const article =
    "Ecoe Ediciones es una destacada empresa editorial colombiana que ha estado presente en el sector del libro técnico y universitario durante más de 45 años. Con una amplia trayectoria en el mercado, la empresa ha logrado consolidarse como un referente en la publicación de obras especializadas de alta calidad, En su extenso catálogo, Ecoe Ediciones cuenta con más de 700 títulos en áreas tan diversas como Administración, Finanzas, Economía, Derecho, Ciencias Básicas, Ingeniería, Ciencias Ambientales y Humanidades. Estas obras se destacan por su rigor académico y su compromiso con la excelencia, lo que las convierte en herramientas fundamentales para el desarrollo y la formación de estudiantes, docentes y profesionales en las diferentes ramas del saber académico."

  const images = [
    "/images/1_br.jpeg",
    "/images/2_br.jpeg",
  ]; 
  const article2 = "La empresa se enfoca principalmente en atender las necesidades del público universitario y técnico, ofreciendo libros que abarcan desde los conceptos más básicos hasta los temas más complejos y especializados. De esta manera, Ecoe Ediciones se convierte en un aliado estratégico para aquellos que buscan expandir su conocimiento y mejorar sus habilidades profesionales."
  const link = "https://www.ecoeediciones.com"; 

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
