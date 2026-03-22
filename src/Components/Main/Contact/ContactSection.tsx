import { useMemo, useState } from 'react';
import SectionWrapper from '@/Components/Main/SectionWrapper';
import Button from '@/Components/UI/Button';
import { EnvelopeIcon, PhoneIcon, UserIcon } from '@heroicons/react/24/solid';
import { motion } from 'framer-motion';
import { Trans, useTranslation } from 'react-i18next';

type FormState = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

const ContactSection = () => {
  const { t } = useTranslation();
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
    if (!form.name.trim()) next.name = t('contact.validation.name');
    if (!form.email.trim()) next.email = t('contact.validation.email');
    if (!form.message.trim()) next.message = t('contact.validation.message');
    return next;
  }, [form.email, form.message, form.name, t]);

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
    const phoneLine = form.phone.trim()
      ? t('contact.clipboard.phoneLine', { phone: form.phone.trim() })
      : '';
    return t('contact.clipboard.body', {
      name: form.name.trim(),
      email: form.email.trim(),
      phoneLine,
      message: form.message.trim(),
    });
  };

  const onCopy = async () => {
    setAttemptedCopy(true);
    setStatus(null);

    if (Object.keys(errors).length > 0) return;

    try {
      await navigator.clipboard.writeText(buildClipboardText());
      setStatus(t('contact.clipboard.success'));
    } catch {
      setStatus(t('contact.clipboard.failure'));
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
        <h3 className="text-4xl font-bold mb-2">{t('contact.title')}</h3>
        <p className="opacity-80 max-w-3xl mx-auto">{t('contact.subtitle1')}</p>
        <p className="opacity-80 max-w-3xl mx-auto mt-3 text-sm md:text-base">
          {t('contact.subtitle2')}
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
          <Trans
            i18nKey="contact.notice"
            components={{ bold: <span className="font-bold" /> }}
          />
        </div>

        <form onSubmit={onSubmit} className="space-y-5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <label className="font-bold text-sm flex items-center gap-2 mb-2">
                <UserIcon className="h-4 w-4 text-primary" />
                {t('contact.nameLabel')}
              </label>
              <input
                value={form.name}
                onChange={onChange('name')}
                className={inputBase}
                placeholder={t('contact.namePlaceholder')}
                autoComplete="name"
              />
              {attemptedCopy && errors.name ? (
                <p className="text-sm text-red-600 mt-2">{errors.name}</p>
              ) : null}
            </div>

            <div>
              <label className="font-bold text-sm flex items-center gap-2 mb-2">
                <EnvelopeIcon className="h-4 w-4 text-primary" />
                {t('contact.emailLabel')}
              </label>
              <input
                type="email"
                value={form.email}
                onChange={onChange('email')}
                className={inputBase}
                placeholder={t('contact.emailPlaceholder')}
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
              {t('contact.phoneLabel')}
            </label>
            <input
              value={form.phone}
              onChange={onChange('phone')}
              className={inputBase}
              placeholder={t('contact.phonePlaceholder')}
              autoComplete="tel"
            />
          </div>

          <div>
            <label className="font-bold text-sm mb-2 block">
              {t('contact.messageLabel')}
            </label>
            <textarea
              value={form.message}
              onChange={onChange('message')}
              className={`${inputBase} min-h-[140px] resize-y`}
              placeholder={t('contact.messagePlaceholder')}
            />
            {attemptedCopy && errors.message ? (
              <p className="text-sm text-red-600 mt-2">{errors.message}</p>
            ) : null}
          </div>

          <div className="flex items-center justify-between gap-4 flex-wrap">
            <div className="flex items-center gap-3 flex-wrap">
              <Button type="submit" disabled>
                {t('common.send')}
              </Button>
              <button
                type="button"
                onClick={onCopy}
                className="inline-flex items-center justify-center px-5 py-3 min-h-12 rounded-xl border border-primary/30 bg-white/70 hover:bg-white transition font-bold text-primary shadow-md"
              >
                {t('common.copyMessage')}
              </button>
            </div>

            <p className="text-sm opacity-70">{t('contact.soonNote')}</p>
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
