import HeaderView from "@/components/HeaderView";
import Footer from "@/components/Footer";
import Card from "@/components/Card";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <HeaderView />
      <main className="flex-1 p-6 space-y-6 max-w-5xl mx-auto">
        <section>
          <h2 className="text-2xl font-bold mb-4">Bienvenidos a la Feria del Libro</h2>
          <p>
            La Feria del Libro en el Instituto Tecnológico de México Campus Iztapalapa es un
            evento que celebra la lectura, el conocimiento y la cultura. Explora los distintos
            stands participantes para conocer su propósito, temas destacados y propuestas para estudiantes.
          </p>
        </section>

        <section className="grid gap-6 md:grid-cols-2 text-black">
          <Card
            title="Ecoe Ediciones"
            description="Ecoe Ediciones es una destacada empresa editorial colombiana que ha estado presente en el sector del libro técnico y universitario durante más de 45 años. Con una amplia trayectoria en el mercado, la empresa ha logrado consolidarse como un referente en la publicación de obras especializadas de alta calidad, En su extenso catálogo, Ecoe Ediciones cuenta con más de 700 títulos en áreas tan diversas como Administración, Finanzas, Economía, Derecho, Ciencias Básicas, Ingeniería"
            link="/stand1"
          />
          <Card
            title="Merlina Libreria Anticuaria"
            description="La denominación Merlina Antiquarian Bookstore sugiere una librería especializada en obras antiguas y de colección, imbuida de una atmósfera distintiva. El término Merlina evoca la figura de un personaje caracterizado por su agudeza intelectual"
           link="/stand2"
          />
            <Card
            title="Paraíso Perdido"
            description="Paraíso Perdido es una editorial independiente fundada en Guadalajara, México, en 1998. Publicamos libros impresos, electrónicos e incluso audiolibros de cuento, novela, ensayo literario y crónica. También ediciones ilustradas y compilados temáticos de interés general. Apostamos por el  descubrimiento de nuevas voces y queremos proponer una manera diferente de observar el panorama narrativo de México y del mundo. Creemos que los lectores buscan historias frescas, más allá de la moda o la tendencia del mercado: textos que pongan sobre la mesa de discusión temas actuales"
            link="/stand3"
          />
             <Card
            title="Porrúa Hermanos y Compañía"
            description="La inclusión de esta categoría sugiere un espacio que valora el pensamiento crítico, la reflexión y la exploración de ideas abstractas. Podríamos esperar encontrar obras de filósofos clásicos y contemporáneos"
            link="/stand4"
          />
             <Card
            title="Editorial Lectorum"
            description="Somos una Editorial y Distribuidora Mexicana que se ha encargado de promover la literatura clásica y contemporáneaen México y Latinoamérica desde 1993.Está presente con casas propias"
            link="/stand5"
          />
             <Card
            title="Lbreria Perritos Literarios"
            description="Esta distribuidora busca establecer alianzas estratégicas con escuelas públicas para llevar una oferta de lectura diversa y pertinente a los jóvenes, con el objetivo de inculcar el hábito lector y proporcionarles herramientas para su desarrollo personal"
            link="/stand6"
          />
             <Card
            title="Fondo de Cultura Económica (FCE)"
            description="El Fondo de Cultura Económica (FCE) se fundó en 1934 por Daniel Cosío Villegas con el objetivo inicial de publicar textos de economía para estudiantes universitarios. Rápidamente expandió su catálogo a áreas como ciencia política, historia y filosofía"
            link="/stand7"
          />
             <Card
            title="Editorial SM"
            description="El Catálogo de Literatura Infantil y Juvenil pertenece a SM. En él, lectores, padres, profesores, libreros... podrán encontrar todas las novedades publicadas por SM, así como todos los libros de fondo."
            link="/stand8"
          />
             <Card
            title="Libros del Orinoco"
            description="En el dinámico panorama editorial mexicano, diversas casas editoriales se distinguen por su compromiso con la difusión de la literatura nacional y la exploración de temáticas relevantes para el lector contemporáneo."
            link="/stand9"
          />
             <Card
            title="Maribel Ortega Soto"
            description="Es una escritora independiente y profesional dedicada a la venta de libros especializados en frases de superación personal y poesía. Su labor se centra en ofrecer obras que promueven el desarrollo emocional, la reflexión y la motivación a través del poder de la palabra escrita."
            link="/stand10"
          />
             <Card
            title="Librerías el sótano "
            description="LIBRERÍAS EL SÓTANO” abre por primera vez sus puertas al público en diciembre de 1967 en un sótano, por el cual recibe su nombre. Ubicada frente al Palacio de Bellas Artes, en el histórico barrio de la Alameda de la Ciudad de México."
            link="/stand11"
          />
             <Card
            title="Comercial técnico"
            description="Esta distribuidora se especializa en la promoción y comercialización de un amplio espectro de literatura, abarcando tanto obras de literatura comercial como material educativo específicamente diseñado para carreras universitarias."
            link="/stand12"
          />
            <Card
            title="Libreria Educal"
            description="Con una trayectoria sólida de 29 años en el sector, esta distribuidora comercial se ha consolidado como un actor clave en el fomento de la lectura y la formación de los jóvenes en la Ciudad de México."
            link="/stand13"
          />
           
        </section>
      </main>
      <Footer />
    </div>
  );
}
