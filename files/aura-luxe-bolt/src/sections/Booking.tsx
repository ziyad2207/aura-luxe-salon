import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, Calendar, Clock, User, Mail, Phone, Sparkles, ChevronDown } from 'lucide-react';
import { SERVICES, STYLISTS, TIME_SLOTS } from '@/data';
import { supabase } from '@/lib/supabase';
import type { Booking } from '@/types';
import Reveal from '@/components/Reveal';

type FormValues = Booking;

export default function Booking() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { register, handleSubmit, reset, formState: { errors } } = useForm<FormValues>();

  const onSubmit = async (data: FormValues) => {
    setSubmitting(true);
    setError(null);
    if (!supabase) {
      setError('Online bookings are not configured yet. Please call us to book your appointment.');
      setSubmitting(false);
      return;
    }
    try {
      const { error: dbError } = await supabase.from('bookings').insert({
        name: data.name,
        email: data.email,
        phone: data.phone,
        service: data.service,
        stylist: data.stylist,
        date: data.date,
        time: data.time,
        notes: data.notes ?? null,
      });
      if (dbError) throw dbError;
      setSubmitted(true);
      reset();
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  const today = new Date().toISOString().split('T')[0];

  return (
    <section id="booking" className="relative py-28 md:py-40">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(212,175,55,0.07),transparent_60%)]" />
      <div className="relative mx-auto max-w-6xl px-5 md:px-10">
        <div className="text-center">
          <Reveal><p className="section-label mb-5">Reserve Your Ritual</p></Reveal>
          <Reveal delay={0.1}>
            <h2 className="heading-display mx-auto max-w-3xl text-4xl md:text-6xl">
              Book your <span className="gold-gradient-text italic">appointment</span>
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mx-auto mt-5 max-w-xl text-white/50">
              Share a few details and our concierge will confirm your slot within 24 hours.
            </p>
          </Reveal>
        </div>

        <div className="relative mt-16">
          <AnimatePresence mode="wait">
            {submitted ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                className="glass mx-auto max-w-xl rounded-2xl p-10 text-center"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: 'spring', stiffness: 200, delay: 0.2 }}
                  className="mx-auto grid h-20 w-20 place-items-center rounded-full bg-gold text-ink-900"
                >
                  <Check className="h-10 w-10" />
                </motion.div>
                <h3 className="mt-6 font-serif text-3xl">Booking Received</h3>
                <p className="mt-3 text-white/60">
                  Thank you. Our concierge will reach out shortly to confirm your appointment.
                  We can't wait to welcome you to Aura Luxe.
                </p>
                <button onClick={() => setSubmitted(false)} className="btn-outline mt-8 inline-flex">
                  Make Another Booking
                </button>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                onSubmit={handleSubmit(onSubmit)}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="glass mx-auto max-w-3xl rounded-2xl p-6 md:p-10"
              >
                <div className="grid gap-5 md:grid-cols-2">
                  <Field label="Full Name" icon={<User className="h-4 w-4" />} error={errors.name?.message}>
                    <input {...register('name', { required: 'Required' })} type="text" placeholder="Your name" className="lux-input" />
                  </Field>
                  <Field label="Phone" icon={<Phone className="h-4 w-4" />} error={errors.phone?.message}>
                    <input {...register('phone', { required: 'Required' })} type="tel" placeholder="+91 98765 43210" className="lux-input" />
                  </Field>
                  <Field label="Email" icon={<Mail className="h-4 w-4" />} error={errors.email?.message}>
                    <input {...register('email', { required: 'Required', pattern: { value: /^\S+@\S+$/, message: 'Invalid email' } })} type="email" placeholder="you@email.com" className="lux-input" />
                  </Field>
                  <Field label="Service" icon={<Sparkles className="h-4 w-4" />} error={errors.service?.message}>
                    <select {...register('service', { required: 'Required' })} className="lux-input appearance-none">
                      <option value="">Select a service</option>
                      {SERVICES.map((s) => <option key={s.id} value={s.name}>{s.name} — {s.price}</option>)}
                    </select>
                    <ChevronDown className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-white/40" />
                  </Field>
                  <Field label="Preferred Stylist" icon={<User className="h-4 w-4" />}>
                    <select {...register('stylist')} className="lux-input appearance-none">
                      <option value="Any">Any available artist</option>
                      {STYLISTS.map((s) => <option key={s.id} value={s.name}>{s.name}</option>)}
                    </select>
                    <ChevronDown className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-white/40" />
                  </Field>
                  <Field label="Date" icon={<Calendar className="h-4 w-4" />} error={errors.date?.message}>
                    <input {...register('date', { required: 'Required' })} type="date" min={today} className="lux-input" />
                  </Field>
                  <Field label="Time" icon={<Clock className="h-4 w-4" />} error={errors.time?.message}>
                    <select {...register('time', { required: 'Required' })} className="lux-input appearance-none">
                      <option value="">Select a time</option>
                      {TIME_SLOTS.map((t) => <option key={t} value={t}>{t}</option>)}
                    </select>
                    <ChevronDown className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-white/40" />
                  </Field>
                  <div className="md:col-span-2">
                    <Field label="Special Requests">
                      <textarea {...register('notes')} rows={3} placeholder="Allergies, preferences, occasion..." className="lux-input resize-none" />
                    </Field>
                  </div>
                </div>

                {error && (
                  <p className="mt-4 rounded-lg border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-300">
                    {error}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={submitting}
                  className="btn-gold mt-8 w-full justify-center inline-flex disabled:opacity-60"
                >
                  <span>{submitting ? 'Sending...' : 'Confirm Booking'}</span>
                </button>
              </motion.form>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

function Field({ label, icon, error, children }: { label: string; icon?: React.ReactNode; error?: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="mb-2 flex items-center gap-2 text-xs uppercase tracking-widest-2 text-white/50">
        {icon}{label}
      </span>
      <div className="relative">{children}</div>
      {error && <span className="mt-1 block text-xs text-red-400">{error}</span>}
    </label>
  );
}
