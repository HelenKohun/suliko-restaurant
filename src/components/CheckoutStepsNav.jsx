export default function CheckoutStepsNav({ id, text1, text2, step }) {
  return (
    <>
      <div className="flex flex-col items-center">
        <div
          className={`flex h-9 w-9 items-center justify-center rounded-full text-lg ${step >= id ? "bg-wine text-cream" : "border-text/20 text-text-muted border"}`}
        >
          {id}
        </div>
        <span
          className={`font-body mt-3 text-center text-[10px] tracking-widest uppercase ${step >= id ? "text-wine" : "text-text-muted"}`}
        >
          {text1}
          {text2 && (
            <>
              <br />
              {text2}
            </>
          )}
        </span>
      </div>

      {id < 3 && (
        <div
          className={`mt-4 h-px w-20 lg:w-24 ${step > id ? "bg-text/90" : "bg-text/20"}`}
        />
      )}
    </>
  );
}
