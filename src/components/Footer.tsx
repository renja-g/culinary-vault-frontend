import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full border-t border-border py-6 mt-12 text-sm text-muted-foreground">
      <div className="container mx-auto flex flex-col items-center justify-between gap-2 px-4 sm:flex-row">
        <div className="text-center">
          © {new Date().getFullYear()} {" "}
          <Link
            href="https://renja.dev"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            renja.dev
          </Link>
        </div>
        <div className="flex gap-3">
          <Link
            href="https://github.com/renja-g/culinary-vault-frontend"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            GitHub
          </Link>
          <span className="hidden sm:inline">·</span>
          <Link
            href="https://renja.dev"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            renja.dev
          </Link>
        </div>
      </div>
    </footer>
  );
} 