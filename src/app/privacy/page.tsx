import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { siteUrl } from "@/config/seo";

export const metadata = {
  title: "Privacy Policy | Yeet",
  description:
    "Privacy policy for the Yeet browser extension. What data stays on your device, and what does not.",
  alternates: {
    canonical: `${siteUrl}/privacy`,
  },
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen flex flex-col bg-cream text-ink font-body selection:bg-coral selection:text-cream">
      <Header />

      <main className="flex-1 max-w-4xl mx-auto px-6 md:px-12 py-16 md:py-24 w-full">
        <div className="prose prose-lg prose-ink max-w-none">
          <h1 className="font-display font-extrabold text-4xl md:text-5xl tracking-tight mb-8">
            Privacy Policy
          </h1>

          <p className="text-ink/80 text-lg mb-8 font-medium">
            Last updated: September 22, 2026
          </p>

          <section className="space-y-6">
            <div>
              <h2 className="font-display font-bold text-2xl mb-4">
                1. Short version
              </h2>
              <p className="text-ink/80">
                Yeet does not have an account system and does not sell data.
                Draft text and login cookies stay in your browser. The only
                network request Yeet makes on its own is a public JSON file of
                CSS selectors on GitHub, so the extension can keep working when
                X or Threads change their UI.
              </p>
            </div>

            <div>
              <h2 className="font-display font-bold text-2xl mb-4">
                2. What Yeet reads
              </h2>
              <p className="text-ink/80">
                When you use Yeet, the extension reads the text in the X or
                Threads compose box so it can open the other site with that
                draft filled in. That text is not uploaded to our servers.
              </p>
              <p className="text-ink/80 mt-4">
                The popup may check whether you are signed in by looking for
                X&apos;s <code>auth_token</code> cookie on x.com and
                Threads&apos; <code>sessionid</code> cookie on threads.com or
                instagram.com. Yeet only checks that those cookies exist. Cookie
                values are not sent to us and are not stored on a server.
              </p>
            </div>

            <div>
              <h2 className="font-display font-bold text-2xl mb-4">
                3. What is stored on your device
              </h2>
              <p className="text-ink/80">Yeet uses Chrome local storage for:</p>
              <ul className="list-disc pl-6 text-ink/80 space-y-2 mt-4">
                <li>
                  <code>isActive</code> — whether the extension is turned on
                </li>
                <li>
                  <code>copyImages</code> — whether to copy images when that
                  feature is available
                </li>
                <li>
                  <code>lastSavedAt</code> — a local timestamp
                </li>
                <li>
                  <code>lastYeet</code> — local info about the last yeet, which
                  may include the draft you just sent to the other composer
                </li>
                <li>cached CSS selectors for X and Threads</li>
              </ul>
              <p className="text-ink/80 mt-4">
                You can clear this anytime by removing the extension.
              </p>
            </div>

            <div>
              <h2 className="font-display font-bold text-2xl mb-4">
                4. Network requests
              </h2>
              <p className="text-ink/80">
                Yeet may fetch{" "}
                <code>
                  https://raw.githubusercontent.com/shivam-taneja/yeet/main/public/selectors.json
                </code>
                . That file contains selector strings only. It is not executable
                code. GitHub may see a normal request from your browser when
                that file is downloaded.
              </p>
              <p className="text-ink/80 mt-4">
                Opening X or Threads compose URLs happens in your browser, as
                you. Yeet does not proxy those posts through our servers.
              </p>
            </div>

            <div>
              <h2 className="font-display font-bold text-2xl mb-4">
                5. What we do not do
              </h2>
              <ul className="list-disc pl-6 text-ink/80 space-y-2">
                <li>No selling or transferring user data to third parties</li>
                <li>
                  No analytics SDKs, ads, or tracking pixels in the extension
                </li>
                <li>No use of your data to determine creditworthiness</li>
                <li>No remote JavaScript or Wasm loaded into the extension</li>
              </ul>
            </div>

            <div>
              <h2 className="font-display font-bold text-2xl mb-4">
                6. Open source
              </h2>
              <p className="text-ink/80">
                Yeet is open source under the MIT License. You can read the code
                here:{" "}
                <a
                  href="https://github.com/shivam-taneja/yeet"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-coral hover:underline font-medium"
                >
                  github.com/shivam-taneja/yeet
                </a>
                .
              </p>
            </div>

            <div>
              <h2 className="font-display font-bold text-2xl mb-4">
                7. Contact
              </h2>
              <p className="text-ink/80">
                Questions about this policy:{" "}
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
