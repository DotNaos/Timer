"use client";

import * as React from "react";
import { NextUIProvider } from "@nextui-org/system";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { ThemeProviderProps } from "next-themes/dist/types";
import useCountdown from "@/hooks/useCountdown";

export interface ProvidersProps {
	children: React.ReactNode;
	themeProps?: ThemeProviderProps;
}

export function Providers({ children, themeProps }: ProvidersProps) {
	return (
    <NextUIProvider>
      <NextThemesProvider {...themeProps}>
        <CountdownProvider>{children}</CountdownProvider>
      </NextThemesProvider>
    </NextUIProvider>
  );
}

export const CountdownContext = React.createContext<{
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}>({
	days: 365, hours: 24, minutes:60, seconds: 60
});

function CountdownProvider({ children }: any) {
  const countdown = useCountdown("2025-01-10T00:00:00Z");

  return (
    <CountdownContext.Provider value={countdown}>
      {children}
    </CountdownContext.Provider>
  );
}
