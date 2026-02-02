import SectionWrapper from '@/Components/Main/SectionWrapper';
import { AboutData } from '@/Components/Shared/Consts';
import { motion } from 'framer-motion';
import { InformationCircleIcon } from '@heroicons/react/24/solid';

const AboutSection = () => {
  return (
    <SectionWrapper id="apropos">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.45, ease: 'easeOut' }}
        className="max-w-4xl mx-auto"
      >
        <div className="text-center mb-10">
          <h3 className="text-4xl font-bold mb-2">{AboutData.title}</h3>
          <p className="opacity-80 text-sm md:text-base">
            Informations générales sur l’établissement.
          </p>
        </div>

        <div className="bg-white/80 rounded-3xl shadow-lg p-6 md:p-8 border border-white/60">
          <div className="flex items-center gap-3 mb-4">
            <InformationCircleIcon className="h-6 w-6 text-primary" />
            <h4 className="font-bold text-lg">Présentation</h4>
          </div>
          <div className="space-y-3 opacity-90 text-sm md:text-base">
            {AboutData.paragraphs.map((p, idx) => (
              <p key={idx}>{p}</p>
            ))}
          </div>
        </div>
      </motion.div>
    </SectionWrapper>
  );
};

export default AboutSection;
