import SectionWrapper from '@/Components/Main/SectionWrapper';
import { MapPinIcon } from '@heroicons/react/24/solid';
import { motion } from 'framer-motion';

const MapSection = () => {
  // Placeholder embed (search-based). Replace with your exact Google Maps embed link when ready.
  const mapsQuery = encodeURIComponent('CLINIQUE AALEM ESSIHA');
  const mapsEmbedSrc = `https://www.google.com/maps?q=${mapsQuery}&output=embed`;
  const mapsOpenUrl = `https://www.google.com/maps/search/?api=1&query=${mapsQuery}`;

  return (
    <SectionWrapper id="localisation">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.45, ease: 'easeOut' }}
        className="text-center mb-10"
      >
        <h3 className="text-4xl font-bold mb-2">Localisation</h3>
        <p className="opacity-80 max-w-3xl mx-auto">
          Retrouvez la Clinique AALEM ESSIHA sur la carte. Vous pourrez aussi
          ouvrir l’itinéraire directement dans Google Maps.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.45, ease: 'easeOut' }}
          className="bg-white/80 rounded-3xl shadow-lg p-6 text-left border border-white/60"
        >
          <div className="flex items-center gap-3 mb-4">
            <MapPinIcon className="h-6 w-6 text-primary" />
            <h4 className="font-bold text-lg">Adresse & accès</h4>
          </div>
          <div className="space-y-4">
            <div>
              <p className="opacity-90 font-bold">Adresse</p>
              <p className="opacity-90">Adresse : à préciser</p>
              <p className="opacity-80 text-sm mt-1">
                Dès que vous me donnez l’adresse exacte (ou le lien Google
                Maps), je mets cette section à jour.
              </p>
            </div>

            <div>
              <p className="opacity-90 font-bold">Accès</p>
              <ul className="list-disc pl-5 space-y-1 opacity-90 text-sm md:text-base">
                <li>Itinéraire Google Maps disponible</li>
                <li>Indications de parking : à préciser</li>
                <li>Points de repère : à préciser</li>
              </ul>
              <p className="opacity-80 text-sm mt-2">
                Astuce : vous pouvez aussi envoyer des coordonnées GPS
                (latitude/longitude).
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <a
                className="inline-flex items-center justify-center bg-primary transition hover:bg-[#158ace] px-7 py-3 min-h-12 shadow-lg rounded-xl text-white font-bold w-full sm:w-auto"
                href={mapsOpenUrl}
                target="_blank"
                rel="noreferrer"
              >
                Ouvrir dans Google Maps
              </a>
              <a
                className="inline-flex items-center justify-center bg-white/70 border border-white/60 transition hover:bg-white px-7 py-3 min-h-12 shadow-lg rounded-xl text-ink font-bold w-full sm:w-auto"
                href="#contact"
              >
                Demander un itinéraire
              </a>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.45, ease: 'easeOut', delay: 0.05 }}
          className="bg-white/80 rounded-3xl shadow-lg overflow-hidden border border-white/60"
        >
          <div className="aspect-video w-full">
            <iframe
              title="Carte - Clinique AALEM ESSIHA"
              src={mapsEmbedSrc}
              className="w-full h-full"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <div className="p-4 md:p-5 border-t border-white/60 bg-white/60">
            <p className="font-bold">Carte interactive</p>
            <p className="text-sm opacity-80 mt-1">
              Si la carte n’affiche pas le bon emplacement, envoyez-moi le lien
              Google Maps exact et je le remplacerai.
            </p>
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
};

export default MapSection;
