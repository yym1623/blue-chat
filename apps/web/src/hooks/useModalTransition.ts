import { useEffect, useState } from "react";

export function useModalTransition(open: boolean, onClose: () => void, duration = 300) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (!open) {
      const frame = requestAnimationFrame(() => setShow(false));
      return () => cancelAnimationFrame(frame);
    }

    let innerFrame = 0;
    const frame = requestAnimationFrame(() => {
      setShow(false);
      innerFrame = requestAnimationFrame(() => setShow(true));
    });

    return () => {
      cancelAnimationFrame(frame);
      cancelAnimationFrame(innerFrame);
    };
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
