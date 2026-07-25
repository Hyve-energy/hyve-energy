import { Button } from "@/components/Button";

export default function NotFound() {
  return (
    <section className="flex min-h-[70vh] flex-col items-center justify-center px-6 text-center">
      <span className="eyebrow">Error 404</span>
      <h1 className="mt-5 text-display-2 font-display font-semibold text-hyve-white">
        This page doesn&apos;t exist in the spec.
      </h1>
      <p className="mt-5 max-w-md text-base leading-relaxed text-hyve-fog">
        The page you&apos;re looking for may have moved or never shipped. Let&apos;s get you back
        on track.
      </p>
      <div className="mt-10">
        <Button href="/">Return Home</Button>
      </div>
    </section>
  );
}
