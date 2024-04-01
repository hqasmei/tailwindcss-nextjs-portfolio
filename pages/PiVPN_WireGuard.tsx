// Alec Malenfant
// Page that returns the PiVPN Component from /app
import PiVPN from "../app/PiVPN";
//("use client");
import "../styles/globals.css";

import Footer from "@/components/Footer";
import { ThemeProvider } from "next-themes";
import ExternalNavbar from "@/components/ExternalNavbar";

export default function PiVPN_WireGuardPage() {
  return (
    <>
      <div>
        <ThemeProvider enableSystem={true} attribute="class">
          <ExternalNavbar />
          <div className="mx-auto max-w-3xl px-4 sm:px-6 md:max-w-5xl ">
            <br />
            <br />
            <br />
            <br />
            {/* Container for blog content */}
            <PiVPN />
          </div>
        </ThemeProvider>
      </div>
    </>
  );
}
