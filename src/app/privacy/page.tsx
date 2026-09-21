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
                1. Information We Collect
              </h2>
              <p className="text-ink/80">
                Yeet requires access to your X (Twitter) and Threads accounts to
                function. We only request the minimum permissions necessary to
                publish your posts across these platforms.
              </p>
            </div>

            <div>
              <h2 className="font-display font-bold text-2xl mb-4">
                2. How We Use Your Information
              </h2>
              <p className="text-ink/80">
                We strictly use your account permissions to sync your posts
                between X and Threads. We do not read your timeline, we do not
                store your private messages, and we do not sell your data to
                third parties.
              </p>
            </div>

            <div>
              <h2 className="font-display font-bold text-2xl mb-4">
                3. Data Storage
              </h2>
              <p className="text-ink/80">
                Your authentication tokens are stored securely. We do not
                permanently store the content of your posts on our servers; they
                are directly transmitted to the respective social media APIs.
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
