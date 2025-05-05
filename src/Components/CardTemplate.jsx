// Components/CardTemplate.jsx
'use client';

import { Carousel } from 'antd';
import Image from 'next/image';

export default function CardTemplate({ title, article, article1, article2, article3, imageSrc, images = [], books = [], link }) {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="w-full max-w-5xl bg-white shadow-xl rounded-xl overflow-hidden">
        <div className="p-6">
          <h1 className="text-3xl font-bold mb-4 text-gray-800">{title}</h1>
          <p className="text-gray-600 mb-4">{article}</p>
          <p className="text-gray-600 mb-4">{article1}</p>
          

        

          {images.length > 0 ? (
            <Carousel autoplay className="rounded-xl mb-6">
              {images.map((src, idx) => (
                <div key={idx} className="relative w-full h-[400px]">
                  <Image
                    src={src}
                    alt={`Imagen ${idx + 1}`}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </Carousel>
          ) : (
            imageSrc && (
              <div className="relative w-full h-[400px] mb-6">
                <Image
                  src={imageSrc}
                  alt="Imagen destacada"
                  fill
                  className="object-cover rounded-xl"
                />
              </div>
            )
          )}
          <p className="text-gray-600 mb-4">{article2}</p>
          <p className="text-gray-600 mb-4">{article3}</p>
            {link && (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mb-6 text-blue-600 hover:text-blue-800 font-semibold underline"
            >
              Visitar página del stand
            </a>
          )}

          <div className="grid gap-6 md:grid-cols-2">
            {books.map((book, i) => (
              <div key={i} className="bg-gray-50 p-4 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-gray-700">{book.title}</h3>
                <p className="text-sm text-gray-500 mb-2">por {book.author}</p>
                <p className="text-gray-600">{book.summary}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
