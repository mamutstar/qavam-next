// src/hooks/useLang.js
"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";

export function useLang(defaultLang = "fa") {
  const [language, setLanguage] = useState(defaultLang);
  const searchParams = useSearchParams();

  useEffect(() => {
    const lang = searchParams.get("lang");
    if (lang === "en" || lang === "fa") {
      setLanguage(lang);
    }
  }, [searchParams]);

  return language;
}
