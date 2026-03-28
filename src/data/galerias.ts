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
    portada: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=400&h=300&auto=format&fit=crop",
    fotos: [
      {
        thumb: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=400&h=300&auto=format&fit=crop",
        highres: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=1920&h=1080&auto=format&fit=crop",
        alt: "Celebración en el salón"
      },
      {
        thumb: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=400&h=300&auto=format&fit=crop",
        highres: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=1920&h=1080&auto=format&fit=crop",
        alt: "Evento en vivo"
      },
      {
        thumb: "https://images.unsplash.com/photo-1528605248644-14dd04022da1?q=80&w=400&h=300&auto=format&fit=crop",
        highres: "https://images.unsplash.com/photo-1528605248644-14dd04022da1?q=80&w=1920&h=1080&auto=format&fit=crop",
        alt: "Gente bailando"
      }
    ]
  }
];
