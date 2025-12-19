"use client";

import { useEffect } from "react";

export default function ProtectContent() {
  useEffect(() => {
    // 1. Matikan Klik Kanan
    const handleContextMenu = (e) => {
      e.preventDefault();
    };

    // 2. Matikan Shortcut (Ctrl+C, Ctrl+V, Ctrl+U, Ctrl+S, dll)
    const handleKeyDown = (e) => {
      if (
        (e.ctrlKey && e.key === 'c') || // Copy
        (e.ctrlKey && e.key === 'v') || // Paste
        (e.ctrlKey && e.key === 'u') || // View Source
        (e.ctrlKey && e.key === 's') || // Save
        (e.ctrlKey && e.key === 'p') || // Print
        (e.ctrlKey && e.shiftKey && e.key === 'I') || // Inspect Element
        e.key === 'F12' // Dev Tools
      ) {
        e.preventDefault();
      }
    };

    document.addEventListener("contextmenu", handleContextMenu);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("contextmenu", handleContextMenu);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return null; // Komponen ini tidak merender visual apa-apa
}