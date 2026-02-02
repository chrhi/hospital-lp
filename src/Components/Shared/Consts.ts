import neurology from '@/assets/Images/Icons/Neurology.png';
import cardiology from '@/assets/Images/Icons/Cardiology.png';
import orthopedics from '@/assets/Images/Icons/Orthopoedics.png';
import surgery from '@/assets/Images/Icons/Surgery.png';
import dentistry from '@/assets/Images/Icons/Dentistry.png';
import radiology from '@/assets/Images/Icons/Radiology.png';
import urology from '@/assets/Images/Icons/Urology.png';
import medicine from '@/assets/Images/Icons/Medicine.png';

import Banner1 from '@/assets/Images/banner1.png';
import Banner2 from '@/assets/Images/banner2.png';

import doc1 from '@/assets/Images/Doctors/doc1.png';
import doc2 from '@/assets/Images/Doctors/doc2.png';
import doc3 from '@/assets/Images/Doctors/doc3.png';
import doc4 from '@/assets/Images/Doctors/doc4.png';

import user1 from '@/assets/Images/Users/user1.jpg';
import user2 from '@/assets/Images/Users/user2.jpg';
import user3 from '@/assets/Images/Users/user3.jpg';

import logo from '/logo.png';

import { SelectedPage, SelectedService } from './Types';

export const navLinks: { label: string; id: SelectedPage }[] = [
  { label: 'Accueil', id: SelectedPage.Home },
  { label: 'Spécialités', id: SelectedPage.Specialites },
  { label: 'Plateau technique', id: SelectedPage.PlateauTechnique },
  { label: 'Localisation', id: SelectedPage.Localisation },
  { label: 'Contact', id: SelectedPage.Contact },
];

// Back-compat (Footer uses simple strings today)
export const links = navLinks.map((l) => l.label);

export const descNums = [
  {
    num: '6',
    text: "Salles d’opération",
  },
  {
    num: '155',
    text: 'Lits',
  },
  {
    num: 'Scanner',
    text: 'Imagerie',
  },
  {
    num: 'IRM',
    text: 'Résonance magnétique',
  },
  {
    num: 'Labo',
    text: 'Analyses médicales',
  },
];

export const ServicesData = [
  {
    img: surgery,
    title: 'Chirurgie générale',
    id: SelectedService.ChirurgieGenerale,
    heading: 'Chirurgie générale',
    texts: [
      'Consultations spécialisées : diagnostic, avis, et orientation selon votre situation.',
      'Prise en charge chirurgicale : préparation, intervention, et coordination avec le bloc opératoire.',
      'Suivi pré et post-opératoire : contrôles, conseils, surveillance, et accompagnement.',
      'Organisation du parcours de soins : examens, planification, hospitalisation si nécessaire, et suivi.',
    ],
  },
  {
    img: medicine,
    title: 'Obstétrique et gynécologie',
    id: SelectedService.ObstetriqueGynecologie,
    heading: 'Obstétrique et gynécologie',
    texts: [
      'Consultations spécialisées : évaluation, conseils, et suivi personnalisé.',
      'Prise en charge médicale',
      'Suivi adapté selon les besoins',
      'Orientation vers le plateau technique',
    ],
  },
  {
    img: medicine,
    title: 'Médecine et chirurgie pédiatrique',
    id: SelectedService.Pediatrie,
    heading: 'Pédiatrie (médecine & chirurgie)',
    texts: [
      'Consultations spécialisées : évaluation, conseils, et orientation selon l’âge.',
      'Prise en charge médicale',
      'Soins adaptés aux enfants',
      'Coordination avec les services concernés',
    ],
  },
  {
    img: cardiology,
    title: 'Cardiologie et chirurgie',
    id: SelectedService.CardiologieEtChirurgie,
    heading: 'Cardiologie',
    texts: [
      'Consultations spécialisées : évaluation, avis cardiologique, et suivi.',
      'Évaluation et suivi',
      'Coordination avec le plateau technique',
      'Prise en charge pluridisciplinaire',
    ],
  },
  {
    img: urology,
    title: 'Chirurgie urologique',
    id: SelectedService.ChirurgieUrologique,
    heading: 'Urologie',
    texts: [
      'Consultations spécialisées : diagnostic, avis, et orientation selon votre situation.',
      'Prise en charge chirurgicale : préparation, intervention, et coordination avec le bloc opératoire.',
      'Suivi pré et post-opératoire : contrôles, conseils, surveillance, et accompagnement.',
      'Organisation du parcours de soins : examens, planification, hospitalisation si nécessaire, et suivi.',
    ],
  },
  {
    img: dentistry,
    title: 'Chirurgie maxillo-faciale',
    id: SelectedService.ChirurgieMaxilloFaciale,
    heading: 'Chirurgie maxillo-faciale',
    texts: [
      'Consultations spécialisées : diagnostic, avis, et orientation selon votre situation.',
      'Prise en charge chirurgicale : préparation, intervention, et coordination avec le bloc opératoire.',
      'Suivi pré et post-opératoire : contrôles, conseils, surveillance, et accompagnement.',
      'Coordination avec le plateau technique',
    ],
  },
  {
    img: neurology,
    title: 'Ophtalmologie',
    id: SelectedService.Ophtalmologie,
    heading: 'Ophtalmologie',
    texts: [
      'Consultations spécialisées : examen, conseils, et orientation selon les symptômes.',
      'Prise en charge médicale',
      'Orientation vers les examens nécessaires',
      'Suivi adapté selon les besoins',
    ],
  },
  {
    img: dentistry,
    title: 'Chirurgie ORL',
    id: SelectedService.ORL,
    heading: 'ORL',
    texts: [
      'Consultations spécialisées : diagnostic, avis, et orientation selon votre situation.',
      'Prise en charge chirurgicale : préparation, intervention, et coordination avec le bloc opératoire.',
      'Suivi pré et post-opératoire : contrôles, conseils, surveillance, et accompagnement.',
      'Coordination avec le plateau technique',
    ],
  },
  {
    img: orthopedics,
    title: 'Chirurgie osseuse et traumatologique',
    id: SelectedService.Traumatologie,
    heading: 'Traumatologie / Orthopédie',
    texts: [
      'Consultations spécialisées : diagnostic, avis, et orientation selon votre situation.',
      'Prise en charge chirurgicale : préparation, intervention, et coordination avec le bloc opératoire.',
      'Suivi pré et post-opératoire : contrôles, conseils, surveillance, et accompagnement.',
      'Organisation du parcours de soins : examens, planification, hospitalisation si nécessaire, et suivi.',
    ],
  },
  {
    img: surgery,
    title: 'Chirurgie plastique et reconstructrice',
    id: SelectedService.ChirurgiePlastique,
    heading: 'Chirurgie plastique & reconstructrice',
    texts: [
      'Consultations spécialisées : diagnostic, avis, et orientation selon votre situation.',
      'Prise en charge chirurgicale : préparation, intervention, et coordination avec le bloc opératoire.',
      'Suivi pré et post-opératoire : contrôles, conseils, surveillance, et accompagnement.',
      'Coordination pluridisciplinaire si besoin',
    ],
  },
  {
    img: radiology,
    title: 'Médecine nucléaire',
    id: SelectedService.MedecineNucleaire,
    heading: 'Médecine nucléaire',
    texts: [
      'Consultations spécialisées : information, indication, et organisation des examens.',
      'Orientation vers les examens nécessaires',
      'Coordination avec le plateau technique',
      'Suivi adapté selon les besoins',
    ],
  },
  {
    img: cardiology,
    title: 'Cardiologie interventionnelle',
    id: SelectedService.CardiologieInterventionnelle,
    heading: 'Cardiologie interventionnelle',
    texts: [
      'Consultations spécialisées : évaluation, avis, et préparation du parcours.',
      'Évaluation et suivi',
      'Coordination pluridisciplinaire',
      'Organisation du parcours de soins : examens, planification, hospitalisation si nécessaire, et suivi.',
    ],
  },
];

export const Banner1Data = {
  heading: 'Plateau technique et capacité',
  texts: [
    '6 salles d’opération pour la chirurgie programmée, avec un parcours patient organisé.',
    '155 lits pour l’hospitalisation et la surveillance, selon les besoins de prise en charge.',
    'Unité de radiologie pour l’imagerie de première intention et l’orientation diagnostique.',
    'Scanner et IRM disponibles selon indication médicale, pour une imagerie avancée.',
    'Laboratoire d’analyses médicales sur place pour les bilans et contrôles prescrits.',
  ],
  img: Banner1,
};

export const AboutData = {
  title: 'À propos de la clinique',
  paragraphs: [
    'Le nom de l’hôpital privé est « CLINIQUE AALEM ESSIHA ».',
    'Nous mettons à disposition des patients un ensemble de spécialités médico-chirurgicales, appuyées par un plateau technique complet.',
    'Notre objectif : une prise en charge claire, coordonnée et efficace, depuis la consultation jusqu’au suivi.',
  ],
};

export const DoctorsData = {
  heading: 'Meet Our Specialists',
  doctors: [
    {
      img: doc1,
      name: 'Dr. John Smith',
      job: 'Cardiologist',
    },
    {
      img: doc2,
      name: 'Dr. Kristin Watson',
      job: 'Dentist',
    },
    {
      img: doc3,
      name: 'Dr. Robert Flores',
      job: 'Surgeon',
    },
    {
      img: doc4,
      name: 'Dr. Katherine Allen',
      job: 'Neurologist',
    },
  ],
  heading2: 'Who Are We?',
  desc: 'A collaborative hospital service website is a digital platform that brings together healthcare professionals, patients and administrators to streamline and enganhe the delivery of healthcare services. This innovative platform allows for seamless communication and coordination among healthcare teams, enabling them to provide more efficient and personalized care to patients.',
  img: Banner2,
};

export const FeedbackData = {
  heading: 'Patient Feedback',
  feedbacks: [
    {
      img: user1,
      name: 'Ralph Edwards',
      job: 'Businessman',
      desc: 'My experience with this hospital has been great. I highly recommend their services to anyone in need of quility healthcare. they truly prioritize patients care!',
    },
    {
      img: user2,
      name: 'Josh Smith',
      job: 'Engineer',
      desc: 'The healthcare professionals were top-natch. they were knowledgeable, attentive, and took the time to answer all of my questions and address my concerns',
    },
    {
      img: user3,
      name: 'Eleanor Pena',
      job: 'Teacher',
      desc: "One thing that stood out to me was the efficiency of the service, i didn't have to wait long for my appointment, and the entire process was hassle-free experience",
    },
  ],
};

export const FooterData = {
  logo: logo,
  addresses: ['Clinique AALEM ESSIHA', 'Adresse : à préciser'],
  phone: '',
  departments: [
    'Chirurgie générale',
    'Gynécologie',
    'Pédiatrie',
    'Cardiologie',
    'Urologie',
    'ORL',
  ],
  links: links,
};
