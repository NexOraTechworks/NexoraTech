import Image from "next/image";

export default function Logo() {
  return (
    <Image
      src="/icon.png"
      alt="Nexora"
      width={40}
      height={40}
      priority
      className=" h-10 w-10 object-contain"
    />
  );
}