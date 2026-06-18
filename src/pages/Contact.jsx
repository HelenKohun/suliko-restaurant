import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { MapPin, Clock, Phone, Mail } from "lucide-react";
import SectionEyebrow from "../components/SectionEyebrow";
import ContactMap from "../components/ContactMap";

import contactHeroImg from "../assets/Resized/pexels-ansar-muhammad-380085065-27626759.webp";
import contactSmallImg from "../assets/Resized/pexels-kpaukshtite-4256560.webp";

export default function Contact() {
  const { t } = useTranslation();

  const [isSuccess, setIsSuccess] = useState(false);

  // Validation
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

  const contactInfo = [
    {
      icon: <MapPin />,
      title: t("contact.info.address.title"),
      text: t("contact.info.address.text"),
    },
    {
      icon: <Clock />,
      title: t("contact.info.hours.title"),
      text: t("contact.info.hours.text"),
    },
    {
      icon: <Phone />,
      title: t("contact.info.phone.title"),
      text: t("contact.info.phone.text"),
    },
    {
      icon: <Mail />,
      title: t("contact.info.email.title"),
      text: t("contact.info.email.text"),
    },
  ];

  const subjectOptions = [
    "reservation",
    "groupReservation",
    "event",
    "feedback",
    "other",
  ];

  function onSubmit(data) {
    reset();
    setIsSuccess(true);
    console.log(data);
  }

  return (
    <div className="bg-cream min-h-screen">
      {/* Hero photo */}
      <section className="relative h-[480px] overflow-hidden lg:h-[520px]">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${contactHeroImg})` }}
        />

        {/* Overlay */}

        <div className="absolute inset-0 bg-black/35" />

        {/* Hero section content */}
        <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-6 pt-24 lg:px-9 lg:pt-28">
          <div className="max-w-xl">
            <SectionEyebrow>{t("contact.hero.eyebrow")}</SectionEyebrow>

            <h1 className="font-heading mt-6 text-5xl leading-[0.95] font-light text-white md:text-6xl lg:text-7xl">
              {t("contact.hero.title1")}
              <span className="block">{t("contact.hero.title2")}</span>
            </h1>

            <p className="font-body mt-8 max-w-md text-[15px] leading-7 text-white/75">
              {t("contact.hero.text")}
            </p>
          </div>
        </div>
      </section>

      {/* Main content + floating form */}
      <section className="bg-cream">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 pb-20 lg:grid-cols-2 lg:gap-20 lg:px-9 lg:pb-28">
          {/* Left side */}
          <div className="pt-5 text-justify lg:pt-29 lg:text-left">
            <div className="relative hidden max-w-lg lg:block">
              <div className="bg-card absolute top-4 left-4 h-full w-full rounded" />

              <img
                src={contactSmallImg}
                alt="Suliko restaurant wine room"
                className="relative z-10 w-full rounded object-cover lg:h-[360px]"
              />
            </div>

            <div className="mt-20 max-w-xl">
              <SectionEyebrow>{t("contact.intro.eyebrow")}</SectionEyebrow>

              <h2 className="font-heading text-text mt-6 text-4xl leading-[0.95] font-light lg:text-5xl">
                {t("contact.intro.title1")}
                <span className="text-gold block">
                  {t("contact.intro.title2")}
                </span>
              </h2>

              <p className="font-body text-text-muted mt-7 text-base leading-7 lg:text-lg lg:leading-8">
                {t("contact.intro.text")}
              </p>

              <div className="text-gold font-heading mt-10 text-4xl font-light italic">
                Gaumarjos!
              </div>
            </div>
          </div>

          {/* Form card */}
          <div className="relative z-20 mt-10 lg:-mt-[220px]">
            <div className="bg-cream border-gold/20 rounded border p-6 shadow-2xl sm:p-8 lg:p-10">
              {isSuccess ? (
                <div className="bg-cream flex min-h-[560px] flex-col items-center justify-center px-6 py-20 text-center">
                  <h2 className="font-heading text-text mb-4 text-3xl font-light sm:text-5xl lg:text-4xl">
                    {t("contact.success.title")}
                  </h2>
                  <p className="font-body text-muted mb-2 text-[15px] leading-relaxed">
                    {t("contact.success.text1")}
                  </p>
                  <p className="font-body text-muted mb-10 text-[15px] leading-relaxed">
                    {t("contact.success.text2")}
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setIsSuccess(false);
                    }}
                    className="font-body border-wine/40 text-wine hover:bg-wine w-full max-w-xs rounded border px-8 py-3 text-[11px] tracking-widest uppercase transition-colors duration-200 hover:text-white sm:w-auto sm:max-w-none sm:text-[12px]"
                  >
                    {t("contact.success.btn")}
                  </button>
                </div>
              ) : (
                <>
                  <div className="text-center">
                    <div className="text-gold mb-4 text-3xl">✦</div>

                    <h2 className="font-heading text-wine text-4xl font-light">
                      {t("contact.form.title")}
                    </h2>

                    <div className="bg-gold mx-auto mt-4 mb-8 h-px w-12" />
                  </div>
                  <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="flex flex-col gap-5"
                  >
                    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                      <div>
                        {/* Firstname */}
                        <label className="font-body text-text mb-2 block text-[12px] tracking-widest uppercase">
                          {t("contact.form.firstName")}
                        </label>
                        <input
                          {...register("name", {
                            required: t("contact.form.input.firstname-error1"),
                            validate: (value) =>
                              value.trim().length >= 2 ||
                              t("contact.form.input.firstname-error2"),
                          })}
                          placeholder="Anna"
                          type="text"
                          className="border-text/20 font-body text-text w-full rounded border bg-transparent px-4 py-3 text-sm outline-none placeholder:italic"
                        />
                        {errors.name && (
                          <span className="font-body mt-1 text-[10px] text-red-400">
                            {errors.name.message}
                          </span>
                        )}
                      </div>

                      <div>
                        {/* Lastname */}
                        <label className="font-body text-text mb-2 block text-[12px] tracking-widest uppercase">
                          {t("contact.form.lastName")}
                        </label>
                        <input
                          {...register("lastname", {
                            required: t("contact.form.input.lastname-error1"),
                            validate: (value) =>
                              value.trim().length >= 2 ||
                              t("contact.form.input.lastname-error2"),
                          })}
                          placeholder="Kowalska"
                          type="text"
                          className="border-text/20 font-body text-text w-full rounded border bg-transparent px-4 py-3 text-sm outline-none placeholder:italic"
                        />
                        {errors.lastname && (
                          <span className="font-body mt-1 text-[10px] text-red-400">
                            {errors.lastname.message}
                          </span>
                        )}
                      </div>
                    </div>

                    <div>
                      {/* Email address */}
                      <label className="font-body text-text mb-2 block text-[12px] tracking-widest uppercase">
                        {t("contact.form.email")}
                      </label>
                      <input
                        {...register("email", {
                          required: t("contact.form.input.email-error1"),
                          pattern: {
                            value: /^\S+@\S+\.\S+$/,
                            message: t("contact.form.input.email-error2"),
                          },
                        })}
                        placeholder="anna@example.com"
                        type="email"
                        className="border-text/20 font-body text-text w-full rounded border bg-transparent px-4 py-3 text-sm outline-none placeholder:italic"
                      />
                      {errors.email && (
                        <span className="font-body mt-1 text-[10px] text-red-400">
                          {errors.email.message}
                        </span>
                      )}
                    </div>

                    <div>
                      {/* Phone number */}
                      <label className="font-body text-text mb-2 block text-[12px] tracking-widest uppercase">
                        {t("contact.form.phone")}
                      </label>
                      <input
                        {...register("phone", {
                          required: t("contact.form.input.phone-error1"),
                          pattern: {
                            value: /^(?:\+48\s?)?(?:\d{3}[\s-]?){2}\d{3}$/,
                            message: t("contact.form.input.phone-error2"),
                          },
                        })}
                        type="tel"
                        placeholder="+48 000 000 000"
                        className="border-text/20 font-body text-text w-full rounded border bg-transparent px-4 py-3 text-sm outline-none placeholder:italic"
                      />
                      {errors.phone && (
                        <span className="font-body mt-1 text-[10px] text-red-400">
                          {errors.phone.message}
                        </span>
                      )}
                    </div>

                    <div>
                      {/* Subject */}
                      <label className="font-body text-text mb-2 block text-[12px] tracking-widest uppercase">
                        {t("contact.form.subject")}
                      </label>
                      <select
                        {...register("subject", {
                          required: t("contact.form.input.subjects-error"),
                        })}
                        defaultValue=""
                        className="border-text/20 font-body text-text focus-visible:border-wine focus-visible:ring-wine/40 focus-visible:ring-offset-cream w-full cursor-pointer rounded border bg-transparent px-4 py-3 text-sm transition-shadow duration-200 outline-none focus-visible:ring-1 focus-visible:ring-offset-1"
                      >
                        <option value="" disabled>
                          {t("contact.form.subjectDefault")}
                        </option>
                        {subjectOptions.map((subject) => (
                          <option key={subject} value={subject}>
                            {t(`contact.form.subjects.${subject}`)}
                          </option>
                        ))}
                      </select>
                      {errors.subject && (
                        <span className="font-body mt-1 text-[10px] text-red-400">
                          {errors.subject.message}
                        </span>
                      )}
                    </div>

                    <div>
                      {/* Message */}
                      <label className="font-body text-text mb-2 block text-[12px] tracking-widest uppercase">
                        {t("contact.form.message")}
                      </label>
                      <textarea
                        {...register("message", {
                          required: t("contact.form.input.message-error1"),
                          validate: (value) =>
                            value.trim().length > 0 ||
                            t("contact.form.input.message-error2"),
                        })}
                        rows={5}
                        className="border-text/20 font-body text-text w-full resize-none rounded border bg-transparent px-4 py-3 text-sm outline-none"
                      />
                      {errors.message && (
                        <span className="font-body mt-1 text-[10px] text-red-400">
                          {errors.message.message}
                        </span>
                      )}
                    </div>

                    <button
                      type="sumbit"
                      disabled={isSubmitting}
                      className="bg-wine text-cream font-body hover:bg-wine-light focus-visible:ring-gold focus-visible:ring-offset-cream mt-2 rounded px-8 py-4 text-[12px] tracking-widest uppercase transition-colors duration-200 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-60"
                    >
                      {isSubmitting
                        ? t("contact.form.button2") // TO DO
                        : t("contact.form.button")}
                    </button>

                    <p className="font-body text-text-muted text-center text-[11px]">
                      {t("contact.form.note")}
                    </p>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Contact info */}
      <section className="bg-cream pb-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-9">
          <div className="border-gold/30 mb-12 border-t" />

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:justify-items-center">
            {contactInfo.map((item) => (
              <div key={item.title} className="flex gap-4">
                <div className="text-gold text-xl">{item.icon}</div>

                <div>
                  <h3 className="font-body text-wine mb-3 text-[14px] tracking-widest uppercase">
                    {item.title}
                  </h3>

                  <p className="font-body text-text-muted text-[13px] leading-6 whitespace-pre-line">
                    {item.text}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Socials */}
          <div className="border-gold/30 mt-12 flex flex-col gap-5 border-t pt-8 sm:flex-row sm:items-center sm:justify-between">
            <span className="font-body text-text text-[13px] tracking-widest uppercase">
              {t("contact.socials.title")}
            </span>

            <div className="flex items-center gap-5">
              <a
                href="#"
                className="font-body text-wine hover:text-gold text-[14px] tracking-widest uppercase transition-colors duration-200"
              >
                Instagram
              </a>

              <a
                href="#"
                className="font-body text-wine hover:text-gold text-[14px] tracking-widest uppercase transition-colors duration-200"
              >
                Facebook
              </a>

              <a
                href="#"
                className="font-body text-wine hover:text-gold text-[14px] tracking-widest uppercase transition-colors duration-200"
              >
                TikTok
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="bg-cream pb-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-9">
          <div className="contact-map overflow-hidden rounded shadow-xl">
            <ContactMap />
          </div>

          <div className="mt-6 flex justify-center rounded py-6">
            <Link
              to="/booking"
              className="font-body focus-visible:ring-cream focus-visible:ring-offset-gold bg-wine hover:text-wine rounded border px-6 py-3 text-center text-[12px] tracking-widest text-white/80 uppercase transition-colors duration-200 hover:bg-transparent focus-visible:ring-3 focus-visible:ring-offset-2 focus-visible:outline-none"
            >
              {t("contact.map.button")}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
