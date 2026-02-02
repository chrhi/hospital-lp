import { ServicesData } from '@/Components/Shared/Consts';
import Button from '@/Components/UI/Button';
import Service from './Service';
import { useState } from 'react';
import { SelectedService } from '@/Components/Shared/Types';
import ListItem from './ListItem';
import Banner1 from './Banner1';
import SectionWrapper from '../SectionWrapper';
import { motion } from 'framer-motion';

const Services = () => {
  const [SelectService, setSelectService] = useState<SelectedService>(
    SelectedService.ChirurgieGenerale
  );

  const selectedServiceData = ServicesData.find(
    (service) => service.id === SelectService
  );
  return (
    <SectionWrapper id="specialites">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.45, ease: 'easeOut' }}
        className="text-center"
      >
        <h2 className="text-4xl font-bold mb-2">Spécialités</h2>
        <p className="opacity-80 mb-3">
          Les spécialités garanties par notre établissement.
        </p>
        <p className="opacity-80 max-w-3xl mx-auto mb-10 text-sm md:text-base">
          Chaque spécialité est assurée par une prise en charge structurée
          (consultation, examens si nécessaire, coordination du plateau technique
          et suivi).
        </p>
      </motion.div>
      <div className="flex flex-col justify-between lg:flex-row gap-10 lg:gap-5">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-5 place-items-stretch"
        >
          {ServicesData?.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.35, ease: 'easeOut', delay: index * 0.03 }}
              className="w-full"
            >
              <Service
                service={service}
                SelectService={SelectService}
                setSelectService={setSelectService}
              />
            </motion.div>
          ))}
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="lg:min-w-[345px]"
        >
          <h3 className="text-xl xs:text-2xl font-bold mb-3">
            {selectedServiceData?.heading}
          </h3>
          <p className="opacity-80 mb-5 text-sm md:text-base">
            Pour plus d’informations (disponibilités, consultations, examens),
            contactez-nous.
          </p>
          <ul className="lg:ml-5 min-h-[310px] sm:min-h-[225px] md:min-h-[190px] lg:min-h-[375px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-1 gap-4 md:gap-6">
            {selectedServiceData?.texts.map((text, index) => (
              <ListItem key={index} text={text} />
            ))}
          </ul>
          <div className="lg:ml-5 mt-6">
            <Button href="#contact">Contactez-nous</Button>
          </div>
        </motion.div>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >
        <Banner1 />
      </motion.div>
    </SectionWrapper>
  );
};

export default Services;
