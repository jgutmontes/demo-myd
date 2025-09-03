export interface Course {
  id: string;
  title: string;
  image: string;
  category: string;
}

export interface Expert {
  id: string;
  name: string;
  title: string;
  image: string;
  specialization: string;
}

export const courses: Course[] = [
  {
    id: '1',
    title: 'Agronegocio Del Arándano',
    image: 'https://images.unsplash.com/photo-1498557850523-fd3d118b962e?w=400&h=300&fit=crop',
    category: 'Fruticultura'
  },
  {
    id: '2',
    title: 'Estrategias de manejo del cultivo de capsicum',
    image: 'https://images.unsplash.com/photo-1583258292688-d0213dc5a3a8?w=400&h=300&fit=crop',
    category: 'Horticultura'
  },
  {
    id: '3',
    title: 'Manejo y uso seguro de plaguicidas',
    image: 'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=400&h=300&fit=crop',
    category: 'Protección de cultivos'
  },
  {
    id: '4',
    title: 'Patología y manejo de Lasiodiplodia spp en palto',
    image: 'https://images.unsplash.com/photo-1560493676-04071c5f467b?w=400&h=300&fit=crop',
    category: 'Fitopatología'
  },
  {
    id: '5',
    title: 'Webinar Enfermedades De La Vid Causadas Por Virus',
    image: 'https://images.unsplash.com/photo-1537640538966-79f369143f8f?w=400&h=300&fit=crop',
    category: 'Viticultura'
  },
  {
    id: '6',
    title: 'Webinar Poscosecha de arándanos',
    image: 'https://images.unsplash.com/photo-1498557850523-fd3d118b962e?w=400&h=300&fit=crop',
    category: 'Poscosecha'
  },
  {
    id: '7',
    title: 'Cambio Climático en la agricultura',
    image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=400&h=300&fit=crop',
    category: 'Sostenibilidad'
  },
  {
    id: '8',
    title: 'Consideraciones generales de la nutrición del arándano',
    image: 'https://images.unsplash.com/photo-1498557850523-fd3d118b962e?w=400&h=300&fit=crop',
    category: 'Nutrición vegetal'
  }
];

export const experts: Expert[] = [
  {
    id: '1',
    name: 'Lizzeth Miranda Díaz',
    title: 'Especialista de postcosecha en arándanos y paltas. Gerente de Calidadd',
    image: 'https://images.unsplash.com/photo-1498557850523-fd3d118b962e?w=400&h=300&fit=crop',
    specialization: 'Postcosecha'
  },
  {
    id: '2',
    name: 'Carlos Castillo',
    title: 'Asesor Agrícola Internacional en producción berries, palta, cítricos y hortalizas',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop',
    specialization: 'Producción'
  },
  {
    id: '3',
    name: 'Susan Gómez',
    title: 'Especialista en ecofisiología vegetal',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop',
    specialization: 'Ecofisiología'
  },
  {
    id: '4',
    name: 'Susan Medina',
    title: 'Especialista en cambio climático',
    image: 'https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=300&h=300&fit=crop',
    specialization: 'Cambio climático'
  },
  {
    id: '5',
    name: 'Cristiam Calderon',
    title: 'Asesor internacional de palto',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop',
    specialization: 'Palto'
  },
  {
    id: '6',
    name: 'Luis José Montgomery',
    title: 'Co-Director de Agroclub',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop',
    specialization: 'Dirección'
  }
];