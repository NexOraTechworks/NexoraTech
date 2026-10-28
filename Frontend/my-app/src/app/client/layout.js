import BackgroundEffects from "../components/BackroundEffects";
import { Navbar } from "../components/Navbar";

export default function ClientLayout({ children }) {
  return (
    <>
      <BackgroundEffects />
      <main className="relative z-10">
        <Navbar />
        {children}
      </main>
    </>
  );
}