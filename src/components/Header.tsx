import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full border-b border-border py-4 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex items-center gap-3 px-4">
        <Link href="/" className="flex items-center gap-2 hover:opacity-90">
          <Image
            src="/logo-80.png"
            alt="Culinary Vault logo"
            width={40}
            height={40}
            className="h-10 w-10 rounded-full object-cover"
            priority
          />
          <span className="text-xl font-semibold tracking-tight">
            Culinary Vault
          </span>
        </Link>
      </div>
    </header>
  );
} 