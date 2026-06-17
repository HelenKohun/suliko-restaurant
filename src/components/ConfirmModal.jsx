import { useTranslation } from "react-i18next";

export default function ConfirmModal({ itemToDelete, onConfirm, onCancel }) {
  const { t } = useTranslation();
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70"
      onClick={onCancel}
    >
      <div
        className="bg-cream rounded p-8 shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        <h3 className="font-heading text-text text-3xl">
          {t("confirmModal.title1")}
        </h3>

        <p className="font-body text-text-muted mt-3">
          {t("confirmModal.title2")} {itemToDelete.name}?
        </p>

        <div className="mt-10 flex justify-between gap-4">
          <button
            onClick={onCancel}
            className="border-wine/20 hover:border-wine/70 rounded border px-7 py-2 text-lg"
          >
            {t("confirmModal.no")}
          </button>

          <button
            onClick={onConfirm}
            className="bg-wine hover:bg-wine-light rounded px-7 py-2 text-lg text-white"
          >
            {t("confirmModal.yes")}
          </button>
        </div>
      </div>
    </div>
  );
}
