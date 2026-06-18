import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useTranslation } from "react-i18next";

export default function ReservationCTA() {
  const { t } = useTranslation();

  const navigate = useNavigate();

  const today = new Date().toLocaleDateString("en-CA").split("T")[0];

  // Time options
  const timeOptions = [
    "11:00",
    "11:15",
    "11:30",
    "11:45",
    "12:00",
    "12:15",
    "12:30",
    "12:45",
    "13:00",
    "13:15",
    "13:30",
    "13:45",
    "14:00",
    "14:15",
    "14:30",
    "14:45",
    "15:00",
    "15:15",
    "15:30",
    "15:45",
    "16:00",
    "16:15",
    "16:30",
    "16:45",
    "17:00",
    "17:15",
    "17:30",
    "17:45",
    "18:00",
    "18:15",
    "18:30",
    "18:45",
    "19:00",
    "19:15",
    "19:30",
    "19:45",
    "20:00",
    "20:15",
    "20:30",
    "20:45",
    "21:00",
    "21:15",
    "21:30",
    "21:45",
    "22:00",
    "22:15",
    "22:30",
    "22:45",
    "23:00",
  ];

  // States
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [guests, setGuests] = useState("");

  const handleSubmit = () => {
    navigate(`/booking?date=${date}&time=${time}&guests=${guests}`);
  };

  return (
    <section className="bg-cream flex flex-col items-center px-6 py-30 text-center">
      {/* Eyebrow */}
      <div className="mb-5 flex items-center justify-center gap-3">
        <div className="bg-gold h-px w-6" />
        <span className="font-body text-gold text-[11px] tracking-[0.2em] uppercase">
          {t("reservationCTA.eyebrow")}
        </span>
        <div className="bg-gold h-px w-6" />
      </div>

      {/* Title */}
      <h2 className="font-heading text-text mb-3 text-6xl leading-tight font-light">
        {t("reservationCTA.title1")}
        <br />
        <em className="text-wine">{t("reservationCTA.title2")}</em>
      </h2>

      {/* Small text */}
      <p className="font-body text-text-muted mb-14 text-[11px] leading-relaxed">
        {t("reservationCTA.text1")}
        <br />
        {t("reservationCTA.text2")}
      </p>

      {/* Form */}
      <form
        onSubmit={(event) => {
          event.preventDefault();
          handleSubmit();
        }}
        className="flex w-full max-w-lg flex-col items-center"
      >
        <div className="mb-10 flex w-full flex-col gap-8 lg:flex-row">
          {/* Date */}
          <div className="border-text/25 focus-within:border-gold flex flex-1 flex-col border-b pb-2 transition-colors duration-200">
            <label className="font-body text-gold mb-2 text-[10px] tracking-widest uppercase">
              {t("reservationCTA.date")}
            </label>
            <input
              type="date"
              min={today}
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="font-heading text-text cursor-pointer bg-transparent text-xl font-light outline-none"
            />
          </div>

          {/* Hour */}
          <div className="border-text/25 focus-within:border-gold focus-within:ring-gold/40 focus-within:ring-offset-cream flex flex-1 flex-col rounded-sm border-b pb-2 transition-colors duration-200 focus-within:ring-1 focus-within:ring-offset-4">
            <label className="font-body text-gold mb-2 text-[10px] tracking-widest uppercase">
              {t("reservationCTA.time")}
            </label>

            <select
              defaultValue=""
              onChange={(e) => setTime(e.target.value)}
              className="font-heading text-text cursor-pointer bg-transparent text-xl font-light outline-none"
            >
              <option value="" disabled>
                {t("reservationCTA.selectTime")}
              </option>

              {timeOptions.map((time) => (
                <option key={time} value={time} className="text-text">
                  {time}
                </option>
              ))}
            </select>
          </div>

          {/* Number of guests */}
          <div className="border-text/25 focus-within:border-gold focus-within:ring-gold/40 focus-within:ring-offset-cream flex flex-1 flex-col rounded-sm border-b pb-2 transition-colors duration-200 focus-within:ring-1 focus-within:ring-offset-4">
            <label className="font-body text-gold mb-2 text-[10px] tracking-widest uppercase">
              {t("reservationCTA.guests")}
            </label>
            <select
              value={guests}
              onChange={(e) => setGuests(e.target.value)}
              className="font-heading text-text cursor-pointer bg-transparent text-xl font-light outline-none"
            >
              <option value="">—</option>
              {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
                <option key={n} value={n}>
                  {t("booking.form.itemsCount", { count: n })}
                </option>
              ))}
            </select>
          </div>
        </div>

        <button
          type="submit"
          className="bg-wine font-body hover:bg-wine-light focus-visible:ring-gold focus-visible:ring-offset-cream rounded px-12 py-4 text-[12px] tracking-widest text-white uppercase transition-colors duration-200 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none"
        >
          {t("reservationCTA.button")}
        </button>

        <p className="font-body text-text/60 mt-4 text-[11px] tracking-wide">
          {t("reservationCTA.text3")}
        </p>
      </form>
    </section>
  );
}
