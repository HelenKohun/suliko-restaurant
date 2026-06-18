import { useEffect } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { MapPin, Clock, Phone, Clock12 } from "lucide-react";
import SectionEyebrow from "../components/SectionEyebrow";
import bookingImg from "../assets/Resized/pexels-kadiravsarr-20169244.webp";
import { timeOptions } from "../data/bookingData";

export default function Booking() {
  const { t } = useTranslation();
  const [searchParams] = useSearchParams();

  const today = new Date().toLocaleDateString("en-CA").split("T")[0];

  //Restaurant info
  const info = [
    { icon: <MapPin size="15" />, text: t("booking.info.address") },
    { icon: <Clock size="15" />, text: t("booking.info.open-time1") },
    { icon: <Clock12 size="15" />, text: t("booking.info.open-time2") },
    { icon: <Phone size="15" />, text: t("booking.info.phone") },
  ];

  //Time options

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isSubmitSuccessful, isSubmitting },
  } = useForm();

  // Pre-fill fields from URL parameters
  useEffect(() => {
    const date = searchParams.get("date");
    const time = searchParams.get("time");
    const guests = searchParams.get("guests");
    if (date) setValue("date", date);
    if (time) setValue("time", time);
    if (guests) setValue("guests", guests);
  }, [searchParams, setValue]);

  function onSubmit(data) {
    console.log(data);
    // тут потом можно подключить EmailJS
  }

  if (isSubmitSuccessful) {
    return (
      <div className="bg-cream flex min-h-screen flex-col items-center justify-center px-6 text-center">
        <div className="bg-gold mx-auto mb-8 h-px w-12" />
        <h2 className="font-heading text-text mb-4 text-4xl font-light sm:text-5xl lg:text-6xl">
          {t("booking.submittedThanks.thanks")}
        </h2>
        <p className="font-body text-text-muted mb-2 text-[15px] leading-relaxed">
          {t("booking.submittedThanks.text1")}
        </p>
        <p className="font-body text-text-muted mb-10 text-[15px] leading-relaxed">
          {t("booking.submittedThanks.text2")}
        </p>
        <Link
          to="/"
          className="font-body border-wine/40 text-wine hover:bg-wine w-full max-w-xs rounded border px-8 py-3 text-[11px] tracking-widest uppercase transition-colors duration-200 hover:text-white sm:w-auto sm:max-w-none sm:text-[12px]"
        >
          {t("booking.submittedThanks.home-btn")}
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-cream flex min-h-screen items-start px-5 py-24 lg:items-center lg:px-12 lg:py-20">
      <div className="mx-auto grid w-full max-w-md grid-cols-1 overflow-hidden rounded lg:max-w-7xl lg:grid-cols-2">
        {/* Left image */}
        <div
          className="relative hidden min-h-[900px] flex-col justify-end bg-cover bg-center p-10 lg:flex"
          style={{ backgroundImage: `url(${bookingImg})` }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent" />
          {/* Restaurant info */}
          <div className="relative z-10">
            <div className="font-body text-gold mb-3 text-[11px] tracking-[0.2em] uppercase">
              {t("booking.info.eyebrow")}
            </div>
            <h2 className="font-heading mb-6 text-6xl leading-tight font-light text-white">
              {t("booking.info.header1")}
              <br />
              <em className="text-gold">{t("booking.info.header2")}</em>
            </h2>
            <div className="flex flex-col gap-2">
              {info.map((item) => (
                <div
                  key={item.text}
                  className="font-body flex gap-2 text-[12px] text-white/80"
                >
                  <span>{item.icon}</span>
                  {item.text}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right form */}
        <div className="bg-dark-wine flex flex-col justify-center px-6 py-10 sm:px-8 lg:px-12 lg:py-12">
          {/* Eyebrow */}
          <SectionEyebrow>{t("booking.form.eyebrow")}</SectionEyebrow>

          <h1 className="font-heading mb-8 text-4xl leading-tight font-light text-white sm:text-5xl">
            {t("booking.form.header1")}
            <em className="text-gold">{`${" "}${t("booking.form.header2")}`}</em>
          </h1>

          <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
            {/* Name and lastname */}
            <div className="border-gold/15 flex flex-col border-b py-3">
              <label className="font-body text-gold/90 mb-1 text-[11px] tracking-widest uppercase">
                {t("booking.form.name-lastname.title")}
              </label>
              <input
                {...register("name", {
                  required: t("booking.form.name-lastname.error1"),
                  validate: (value) =>
                    value.trim().length >= 2 ||
                    t("booking.form.name-lastname.error2"),
                })}
                placeholder="Anna Kowalska"
                className="font-heading bg-transparent text-xl font-light text-white outline-none placeholder:text-white/30 placeholder:italic sm:text-2xl"
              />
              {errors.name && (
                <span className="font-body mt-1 text-[10px] text-red-400">
                  {errors.name.message}
                </span>
              )}
            </div>

            {/* Date and time */}
            <div className="grid grid-cols-1 sm:grid-cols-2">
              <div className="border-gold/15 flex flex-col border-b py-3">
                <label className="font-body text-gold/90 mb-1 text-[11px] tracking-widest uppercase">
                  {t("booking.form.date-time.title-date")}
                </label>
                <input
                  type="date"
                  min={today}
                  {...register("date", {
                    required: t("booking.form.date-time.error1-date"),
                    validate: (value) =>
                      value >= today || t("booking.form.date-time.error2-date"),
                  })}
                  className="date-input font-heading bg-transparent text-xl font-light text-white outline-none sm:text-2xl"
                />
                {errors.date && (
                  <span className="font-body mt-1 text-[10px] text-red-400">
                    {errors.date.message}
                  </span>
                )}
              </div>
              <div className="border-gold/15 sm:border-l-gold/10 focus-within:border-gold focus-within:ring-gold/40 focus-within:ring-offset-wine flex flex-col border-b py-3 transition-colors duration-200 focus-within:ring-1 focus-within:ring-offset-1 sm:border-l sm:pl-4">
                <label className="font-body text-gold/90 mb-1 text-[11px] tracking-widest uppercase">
                  {t("booking.form.date-time.title-time")}
                </label>
                <select
                  {...register("time", {
                    required: t("booking.form.date-time.error1-time"),
                    validate: (value) =>
                      timeOptions.includes(value) ||
                      t("booking.form.date-time.error2-time"),
                  })}
                  defaultValue=""
                  className="font-heading cursor-pointer bg-transparent text-xl font-light text-white outline-none sm:text-[22px]"
                >
                  <option value="" disabled>
                    {t("booking.form.date-time.time-def-opt")}
                  </option>

                  {timeOptions.map((time) => (
                    <option key={time} value={time} className="bg-dark-wine">
                      {time}
                    </option>
                  ))}
                </select>
                {errors.time && (
                  <span className="font-body mt-1 text-[10px] text-red-400">
                    {errors.time.message}
                  </span>
                )}
              </div>
            </div>

            {/* Guests and phone */}
            <div className="grid grid-cols-1 sm:grid-cols-2">
              <div className="border-gold/15 focus-within:border-gold focus-within:ring-offset-wine focus-within:ring-gold/40 flex flex-col border-b py-3 focus-within:ring-1 focus-within:ring-offset-1">
                <label className="font-body text-gold/90 mb-1 text-[11px] tracking-widest uppercase">
                  {t("booking.form.guests-phone.title-guests")}
                </label>
                <select
                  defaultValue=""
                  {...register("guests", {
                    required: t("booking.form.guests-phone.error1-guests"),
                    validate: (value) =>
                      Number(value) >= 1 ||
                      t("booking.form.guests-phone.error2-guests"),
                  })}
                  className="font-heading mr-2 cursor-pointer bg-transparent text-xl font-light text-white outline-none sm:text-[22px]"
                >
                  <option value="" disabled>
                    —
                  </option>

                  {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
                    <option key={n} value={n} className="bg-dark-wine">
                      {t("booking.form.itemsCount", { count: n })}
                    </option>
                  ))}
                </select>
                {errors.guests && (
                  <span className="font-body mt-1 text-[10px] text-red-400">
                    {errors.guests.message}
                  </span>
                )}
              </div>
              <div className="border-gold/15 sm:border-l-gold/10 flex flex-col border-b py-3 sm:border-l sm:pl-4">
                <label className="font-body text-gold/90 mb-1 text-[11px] tracking-widest uppercase">
                  {t("booking.form.guests-phone.title-phone")}
                </label>
                <input
                  type="tel"
                  {...register("phone", {
                    required: t("booking.form.guests-phone.error1-phone"),
                    pattern: {
                      value: /^(?:\+48\s?)?(?:\d{3}[\s-]?){2}\d{3}$/,
                      message: t("booking.form.guests-phone.error2-phone"),
                    },
                  })}
                  placeholder="+48 000 000 000"
                  className="font-heading bg-transparent text-xl font-light text-white outline-none placeholder:text-white/30 placeholder:italic sm:text-2xl"
                />
                {errors.phone && (
                  <span className="font-body mt-1 text-[10px] text-red-400">
                    {errors.phone.message}
                  </span>
                )}
              </div>
            </div>

            {/* Email */}
            <div className="border-gold/15 flex flex-col border-b py-3">
              <label className="font-body text-gold/90 mb-1 text-[11px] tracking-widest uppercase">
                {t("booking.form.email.title")}
              </label>
              <input
                type="email"
                {...register("email", {
                  required: t("booking.form.email.error1"),
                  pattern: {
                    value: /^\S+@\S+\.\S+$/,
                    message: t("booking.form.email.error2"),
                  },
                })}
                placeholder="anna@example.com"
                className="font-heading bg-transparent text-xl font-light text-white outline-none placeholder:text-white/30 placeholder:italic sm:text-2xl"
              />
              {errors.email && (
                <span className="font-body mt-1 text-[10px] text-red-400">
                  {errors.email.message}
                </span>
              )}
            </div>

            {/* Comment */}
            <div className="flex flex-col py-3">
              <label className="font-body text-gold/90 mb-1 text-[11px] tracking-widest uppercase">
                {t("booking.form.comment.title")}
              </label>
              <textarea
                {...register("message", {
                  maxLength: {
                    value: 300,
                    message: t("booking.form.comment.error"),
                  },
                })}
                placeholder={t("booking.form.comment.placeholder")}
                rows={3}
                className="font-body resize-none bg-transparent text-[15px] text-white/60 outline-none placeholder:text-white/30"
              />
              {errors.message && (
                <span className="font-body mt-1 text-[10px] text-red-400">
                  {errors.message.message}
                </span>
              )}
            </div>

            {/* Submit button */}
            <div className="mt-6 flex justify-stretch sm:justify-end">
              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-gold font-body hover:bg-gold/80 text-dark-wine w-full rounded px-8 py-4 text-[11px] font-medium tracking-widest uppercase transition-colors duration-200 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto sm:px-10 sm:text-[12px]"
              >
                {isSubmitting
                  ? t("booking.form.submit-btn.sending")
                  : t("booking.form.submit-btn.send")}
              </button>
            </div>

            <p className="font-body mt-3 text-center text-[11px] text-white/35 sm:text-right">
              {t("booking.form.confirmation")}
            </p>

            <div className="mt-3 text-center sm:text-right">
              <Link
                to="/contact"
                className="font-body text-gold text-[12px] tracking-widest uppercase transition-colors duration-200 hover:text-white"
              >
                {t("booking.form.largeBookingBtn")}
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
