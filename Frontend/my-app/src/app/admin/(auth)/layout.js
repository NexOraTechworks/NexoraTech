import BackgroundEffects from "@/app/components/BackroundEffects";

export default function AuthLayout({ children }) {
  return (
    <div className="min-h-screen overflow-y-hidden bg-white bg-noise text-white transition-colors duration-500 dark:bg-onyx">
      <BackgroundEffects/>
      {children}
    </div>
  );
}