import { useEffect, useState } from "react";

export function useModalTransition(open: boolean, onClose: () => void, duration = 300) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (!open) {
      setShow(false);
      return;
    }

    setShow(false);
    const frame = requestAnimationFrame(() => {
      requestAnimationFrame(() => setShow(true));
    });
    return () => cancelAnimationFrame(frame);
  }, [open]);

  function close() {
    setShow(false);
    window.setTimeout(onClose, duration);
  }

  return {
    show,
    close,
    backdrop: show ? "opacity-100" : "opacity-0",
    sheet: show ? "translate-y-0" : "translate-y-full",
  };
}
