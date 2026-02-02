import SectionWrapper from '../SectionWrapper';
import banner2 from '@/assets/Images/banner2.png';
import { motion } from 'framer-motion';
import {
  BeakerIcon,
  BuildingOffice2Icon,
  BuildingStorefrontIcon,
  CircleStackIcon,
  CpuChipIcon,
} from '@heroicons/react/24/solid';

const Doctors = () => {
  return (
    <SectionWrapper id="plateautechnique">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.45, ease: 'easeOut' }}
        className="text-center"
      >
        <h3 className="text-4xl font-bold mb-2">Plateau technique</h3>
        <p className="opacity-80 mb-3 max-w-3xl mx-auto">
          La clinique s’appuie sur un plateau technique complet : radiologie,
          scanner et IRM, laboratoire d’analyses médicales, bloc opératoire (6
          salles) et capacité d’accueil de 155 lits.
        </p>
        <p className="opacity-80 max-w-3xl mx-auto mb-10 text-sm md:text-base">
          Des équipements essentiels pour des diagnostics rapides, une
          coordination efficace des soins et un suivi adapté.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.45, ease: 'easeOut' }}
          className="bg-white/80 rounded-3xl shadow-lg p-6 border border-white/60"
        >
          <div className="flex items-center gap-3 mb-4">
            <BuildingOffice2Icon className="h-6 w-6 text-primary" />
            <h4 className="font-bold text-lg">Unité de radiologie</h4>
          </div>
          <ul className="space-y-2 text-sm md:text-base">
            <li>Imagerie radiographique conventionnelle</li>
            <li>Orientation et coordination des examens selon prescription</li>
            <li>Compte rendu et suivi des résultats</li>
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.45, ease: 'easeOut', delay: 0.05 }}
          className="bg-white/80 rounded-3xl shadow-lg p-6 border border-white/60"
        >
          <div className="flex items-center gap-3 mb-4">
            <BeakerIcon className="h-6 w-6 text-primary" />
            <h4 className="font-bold text-lg">
              Laboratoire d’analyses médicales
            </h4>
          </div>
          <ul className="space-y-2 text-sm md:text-base">
            <li>Analyses et bilans prescrits réalisés sur place</li>
            <li>Contrôles et suivis biologiques selon besoin</li>
            <li>Transmission des résultats au parcours de soins</li>
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.45, ease: 'easeOut', delay: 0.08 }}
          className="bg-white/80 rounded-3xl shadow-lg p-6 border border-white/60"
        >
          <div className="flex items-center gap-3 mb-4">
            <CircleStackIcon className="h-6 w-6 text-primary" />
            <h4 className="font-bold text-lg">Scanner et IRM</h4>
          </div>
          <ul className="space-y-2 text-sm md:text-base">
            <li>Scanner</li>
            <li>Imagerie par résonance magnétique (IRM)</li>
            <li>Examens réalisés selon indication médicale</li>
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.45, ease: 'easeOut', delay: 0.1 }}
          className="bg-white/80 rounded-3xl shadow-lg p-6 border border-white/60"
        >
          <div className="flex items-center gap-3 mb-4">
            <BuildingStorefrontIcon className="h-6 w-6 text-primary" />
            <h4 className="font-bold text-lg">Bloc opératoire</h4>
          </div>
          <ul className="space-y-2 text-sm md:text-base">
            <li>6 salles d’opération</li>
            <li>Organisation de la prise en charge pré et post-opératoire</li>
            <li>Coordination avec les spécialités concernées</li>
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.45, ease: 'easeOut', delay: 0.12 }}
          className="bg-white/80 rounded-3xl shadow-lg p-6 border border-white/60"
        >
          <div className="flex items-center gap-3 mb-4">
            <CpuChipIcon className="h-6 w-6 text-primary" />
            <h4 className="font-bold text-lg">Capacité d’accueil</h4>
          </div>
          <ul className="space-y-2 text-sm md:text-base">
            <li>155 lits</li>
            <li>Hospitalisation et surveillance selon les besoins</li>
            <li>Suivi coordonné avec les équipes médicales</li>
          </ul>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="mt-10 bg-secondary/30 shadow-xl rounded-2xl p-5 pb-0 max-w-3xl mx-auto border border-white/60"
      >
        <img src={banner2} alt="Clinique" />
      </motion.div>
    </SectionWrapper>
  );
};

export default Doctors;
