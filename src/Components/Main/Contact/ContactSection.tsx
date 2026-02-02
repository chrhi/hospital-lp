import { useMemo, useState } from 'react';
import SectionWrapper from '@/Components/Main/SectionWrapper';
import Button from '@/Components/UI/Button';
import { EnvelopeIcon, PhoneIcon, UserIcon } from '@heroicons/react/24/solid';
import { motion } from 'framer-motion';

type FormState = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

const ContactSection = () => {
  const [form, setForm] = useState<FormState>({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [attemptedCopy, setAttemptedCopy] = useState(false);
  const [status, setStatus] = useState<string | null>(null);

  const errors = useMemo(() => {
    const next: Partial<Record<keyof FormState, string>> = {};
    if (!form.name.trim()) next.name = 'Votre nom est requis.';
    if (!form.email.trim()) next.email = 'Votre email est requis.';
    if (!form.message.trim()) next.message = 'Votre message est requis.';
    return next;
  }, [form.email, form.message, form.name]);

  const onChange =
    (key: keyof FormState) =>
    (
      e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ): void => {
      setAttemptedCopy(false);
      setStatus(null);
      setForm((prev) => ({ ...prev, [key]: e.target.value }));
    };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  const inputBase =
    'w-full px-4 py-3 rounded-2xl outline-none shadow-md border-2 border-[#1d4d85]/30 bg-white/70 placeholder:text-[#1d4d85]/60 focus:border-primary transition';

  const buildClipboardText = () => {
    const phoneLine = form.phone.trim() ? `Téléphone : ${form.phone.trim()}\n` : '';
    return `Nom : ${form.name.trim()}\nEmail : ${form.email.trim()}\n${phoneLine}\nMessage :\n${form.message.trim()}\n`;
  };

  const onCopy = async () => {
    setAttemptedCopy(true);
    setStatus(null);

    if (Object.keys(errors).length > 0) return;

    try {
      await navigator.clipboard.writeText(buildClipboardText());
      setStatus('Message copié. Vous pouvez maintenant le coller où vous le souhaitez.');
    } catch {
      setStatus(
        'Impossible de copier automatiquement. Sélectionnez le texte et copiez-le manuellement.'
      );
    }
  };

  return (
    <SectionWrapper id="contact">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.45, ease: 'easeOut' }}
        className="text-center mb-10"
      >
        <h3 className="text-4xl font-bold mb-2">Contactez-nous</h3>
        <p className="opacity-80 max-w-3xl mx-auto">
          Une question, un besoin d’information, ou une demande de rendez-vous ?
          Laissez-nous un message.
        </p>
        <p className="opacity-80 max-w-3xl mx-auto mt-3 text-sm md:text-base">
          Pour un rendez-vous, indiquez la spécialité souhaitée et vos
          disponibilités dans le message.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.45, ease: 'easeOut' }}
        className="max-w-3xl mx-auto bg-white/80 rounded-3xl shadow-lg p-6 md:p-8 border border-white/60"
      >
        <div className="mb-5 rounded-2xl border border-primary/20 bg-primary/5 px-4 py-3 text-sm text-ink/90">
          L’envoi en ligne sera disponible prochainement. En attendant, vous
          pouvez remplir le formulaire puis utiliser <span className="font-bold">Copier le message</span>.
        </div>

        <form onSubmit={onSubmit} className="space-y-5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <label className="font-bold text-sm flex items-center gap-2 mb-2">
                <UserIcon className="h-4 w-4 text-primary" />
                Nom
              </label>
              <input
                value={form.name}
                onChange={onChange('name')}
                className={inputBase}
                placeholder="Votre nom"
                autoComplete="name"
              />
              {attemptedCopy && errors.name ? (
                <p className="text-sm text-red-600 mt-2">{errors.name}</p>
              ) : null}
            </div>

            <div>
              <label className="font-bold text-sm flex items-center gap-2 mb-2">
                <EnvelopeIcon className="h-4 w-4 text-primary" />
                Email
              </label>
              <input
                type="email"
                value={form.email}
                onChange={onChange('email')}
                className={inputBase}
                placeholder="vous@exemple.com"
                autoComplete="email"
              />
              {attemptedCopy && errors.email ? (
                <p className="text-sm text-red-600 mt-2">{errors.email}</p>
              ) : null}
            </div>
          </div>

          <div>
            <label className="font-bold text-sm flex items-center gap-2 mb-2">
              <PhoneIcon className="h-4 w-4 text-primary" />
              Téléphone (optionnel)
            </label>
            <input
              value={form.phone}
              onChange={onChange('phone')}
              className={inputBase}
              placeholder="+213 ..."
              autoComplete="tel"
            />
          </div>

          <div>
            <label className="font-bold text-sm mb-2 block">Message</label>
            <textarea
              value={form.message}
              onChange={onChange('message')}
              className={`${inputBase} min-h-[140px] resize-y`}
              placeholder="Expliquez votre besoin… (spécialité souhaitée, disponibilités, informations utiles)"
            />
            {attemptedCopy && errors.message ? (
              <p className="text-sm text-red-600 mt-2">{errors.message}</p>
            ) : null}
          </div>

          <div className="flex items-center justify-between gap-4 flex-wrap">
            <div className="flex items-center gap-3 flex-wrap">
              <Button type="submit" disabled>
                Envoyer
              </Button>
              <button
                type="button"
                onClick={onCopy}
                className="inline-flex items-center justify-center px-5 py-3 min-h-12 rounded-xl border border-primary/30 bg-white/70 hover:bg-white transition font-bold text-primary shadow-md"
              >
                Copier le message
              </button>
            </div>

            <p className="text-sm opacity-70">Envoi en ligne bientôt disponible.</p>
          </div>

          {status ? (
            <p className="text-sm font-bold text-primary">{status}</p>
          ) : null}
        </form>
      </motion.div>
    </SectionWrapper>
  );
};

export default ContactSection;
