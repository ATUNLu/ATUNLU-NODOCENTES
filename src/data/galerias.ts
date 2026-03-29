export interface Foto {
  thumb: string;
  highres: string;
  alt: string;
}

export interface Galeria {
  slug: string;
  titulo: string;
  fecha: string;
  portada: string;
  fotos: Foto[];
}

export const galerias: Galeria[] = [
  {
    slug: "fiesta-nodocente-2023",
    titulo: "Fiesta Nodocente 2023",
    fecha: "2023-11-26",
    portada: "https://media.leandrobarriosdesigner.site/atunlu-fotos/fiesta-nodo-2023/01-fiesta-nodo-23.JPG",
    fotos: [
      {
        thumb: "https://media.leandrobarriosdesigner.site/atunlu-fotos/fiesta-nodo-2023/01-fiesta-nodo-23.JPG",
        highres: "https://media.leandrobarriosdesigner.site/atunlu-fotos/fiesta-nodo-2023/01-fiesta-nodo-23.JPG",
        alt: "Celebración en el salón"
      },
      {
        thumb: "https://media.leandrobarriosdesigner.site/atunlu-fotos/fiesta-nodo-2023/02-fiesta-nodo-23.JPG",
        highres: "https://media.leandrobarriosdesigner.site/atunlu-fotos/fiesta-nodo-2023/02-fiesta-nodo-23.JPG",
        alt: "Evento en vivo"
      },
      {
        thumb: "https://media.leandrobarriosdesigner.site/atunlu-fotos/fiesta-nodo-2023/03-fiesta-nodo-23.JPG",
        highres: "https://media.leandrobarriosdesigner.site/atunlu-fotos/fiesta-nodo-2023/03-fiesta-nodo-23.JPG",
        alt: "Gente bailando"
      }
    ]
  },
  {
    slug: "marcha-federal-2024",
    titulo: "Marcha Federal Universitaria - 2024",
    fecha: "2024-04-11",
    portada: "https://media.leandrobarriosdesigner.site/atunlu-fotos/marcha-federal-2024/01-marcha-federal.jpg",
    fotos: [
      {
        thumb: "https://media.leandrobarriosdesigner.site/atunlu-fotos/marcha-federal-2024/01-marcha-federal.jpg",
        highres: "https://media.leandrobarriosdesigner.site/atunlu-fotos/marcha-federal-2024/01-marcha-federal.jpg",
        alt: "Marcha"
      },
      {
        thumb: "https://media.leandrobarriosdesigner.site/atunlu-fotos/marcha-federal-2024/02--marcha-federal.jpg",
        highres: "https://media.leandrobarriosdesigner.site/atunlu-fotos/marcha-federal-2024/02--marcha-federal.jpg",
        alt: "Marcha"
      },
      {
        thumb: "https://media.leandrobarriosdesigner.site/atunlu-fotos/marcha-federal-2024/03--marcha-federal.jpg",
        highres: "https://media.leandrobarriosdesigner.site/atunlu-fotos/marcha-federal-2024/03--marcha-federal.jpg",
        alt: "Marcha"
      }
    ]
  },
  {
    slug: "dia-de-la-memoria-2023",
    titulo: "Día de la Memoria 2023",
    fecha: "2023-03-24",
    portada: "https://media.leandrobarriosdesigner.site/atunlu-fotos/dia-de-la-memoria-2023/01-dia-de-la-memoria-23.jpg",
    fotos: [
      {
        thumb: "https://media.leandrobarriosdesigner.site/atunlu-fotos/dia-de-la-memoria-2023/01-dia-de-la-memoria-23.jpg",
        highres: "https://media.leandrobarriosdesigner.site/atunlu-fotos/dia-de-la-memoria-2023/01-dia-de-la-memoria-23.jpg",
        alt: "Día de la Memoria"
      },
      {
        thumb: "https://media.leandrobarriosdesigner.site/atunlu-fotos/dia-de-la-memoria-2023/02-dia-de-la-memoria-23.jpg",
        highres: "https://media.leandrobarriosdesigner.site/atunlu-fotos/dia-de-la-memoria-2023/02-dia-de-la-memoria-23.jpg",
        alt: "Día de la Memoria"
      },
      {
        thumb: "https://media.leandrobarriosdesigner.site/atunlu-fotos/dia-de-la-memoria-2023/03-dia-de-la-memoria-23.jpg",
        highres: "https://media.leandrobarriosdesigner.site/atunlu-fotos/dia-de-la-memoria-2023/03-dia-de-la-memoria-23.jpg",
        alt: "Día de la Memoria"
      }
    ]
  }
];
