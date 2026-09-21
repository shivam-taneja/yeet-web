import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { siteUrl } from "@/config/seo";

export const metadata = {
  title: "Privacy Policy | Yeet",
  description: "Privacy policy for Yeet.",
  alternates: {
    canonical: `${siteUrl}/privacy`,
  },
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen flex flex-col bg-cream text-ink font-body selection:bg-coral selection:text-cream overflow-x-hidden">
      <Header />

      <main className="flex-1 max-w-4xl mx-auto px-6 md:px-12 py-16 md:py-24 w-full">
        <div className="prose prose-lg prose-ink max-w-none">
          <h1 className="font-display font-extrabold text-4xl md:text-5xl tracking-tight mb-8">
            Privacy Policy
          </h1>

          <p className="text-ink/80 text-lg mb-8 font-medium">
            Last updated:{" "}
            {new Date().toLocaleDateString("en-US", {
              month: "long",
              day: "numeric",
              year: "numeric",
            })}
          </p>

          <section className="space-y-6">
            <div>
              <h2 className="font-display font-bold text-2xl mb-4">
                1. No Servers, No Tracking
              </h2>
              <p className="text-ink/80">
                Yeet is a purely client-side Chrome extension. It runs entirely
                locally in your browser. We do not have any servers, we do not
                track your activity, and we do not collect, send, or store your
                data anywhere.
              </p>
            </div>

            <div>
              <h2 className="font-display font-bold text-2xl mb-4">
                2. How It Works
              </h2>
              <p className="text-ink/80">
                When you post on X or Threads, the extension simply takes your
                post and automatically submits it to the other platform on your
                behalf, locally from your own browser. You can turn it off at
                any time directly from the extension menu.
              </p>
            </div>

            <div>
              <h2 className="font-display font-bold text-2xl mb-4">
                3. Open Source & Transparent
              </h2>
              <p className="text-ink/80">
                We believe in complete transparency. Yeet is 100% open-source,
                which means anyone can read the source code to verify exactly
                how it works and confirm that your data never leaves your
                machine.
              </p>
            </div>

            <div>
              <h2 className="font-display font-bold text-2xl mb-4">
                4. Contact Us
              </h2>
              <p className="text-ink/80">
                If you have any questions or concerns about this Privacy Policy,
                please contact us at{" "}
                <a
                  href="https://www.shivamtaneja.com/contact"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-coral hover:underline font-medium"
                >
                  shivamtaneja.com/contact
                </a>
                .
              </p>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
