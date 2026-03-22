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

export const navLinks: { id: SelectedPage }[] = [
  { id: SelectedPage.Home },
  { id: SelectedPage.Specialites },
  { id: SelectedPage.PlateauTechnique },
  { id: SelectedPage.Localisation },
  { id: SelectedPage.Contact },
];

export const ServicesData: { img: string; id: SelectedService }[] = [
  { img: surgery, id: SelectedService.ChirurgieGenerale },
  { img: medicine, id: SelectedService.ObstetriqueGynecologie },
  { img: medicine, id: SelectedService.Pediatrie },
  { img: cardiology, id: SelectedService.CardiologieEtChirurgie },
  { img: urology, id: SelectedService.ChirurgieUrologique },
  { img: dentistry, id: SelectedService.ChirurgieMaxilloFaciale },
  { img: neurology, id: SelectedService.Ophtalmologie },
  { img: dentistry, id: SelectedService.ORL },
  { img: orthopedics, id: SelectedService.Traumatologie },
  { img: surgery, id: SelectedService.ChirurgiePlastique },
  { img: radiology, id: SelectedService.MedecineNucleaire },
  { img: cardiology, id: SelectedService.CardiologieInterventionnelle },
];

export const banner1Image = Banner1;

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
  phone: '',
};
