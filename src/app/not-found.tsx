import Link from "next/link";

export default function NotFound() {
  return (
    <div className="px-5 py-24 sm:px-8 md:px-12">
      <p className="text-[10px] font-semibold uppercase tracking-widest text-accent">Prime 6</p>
      <h1 className="mt-4 text-5xl font-semibold uppercase">404</h1>
      <Link href="/" className="mt-8 inline-flex text-sm font-semibold uppercase tracking-widest text-accent">
        Home
      </Link>
    </div>
  );
}
