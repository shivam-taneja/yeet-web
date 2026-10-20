import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { BackToTop } from "@/components/layout/back-to-top";
import { siteUrl } from "@/config/seo";

export const metadata = {
  title: "Privacy Policy",
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
            Last updated: October 20, 2026
          </p>

          <section className="space-y-6">
            <div>
              <h2 className="font-display font-bold text-2xl mb-4">
                1. Short version
              </h2>
              <p className="text-ink/80">
                Yeet does not have an account system and does not sell data.
                Draft text, images (when Copy Images is on), post URLs, and
                login cookies stay in your browser. Cross-posting runs locally —
                Yeet does not proxy posts through our servers. There is no Yeet
                backend that receives your content.
              </p>
            </div>

            <div>
              <h2 className="font-display font-bold text-2xl mb-4">
                2. What Yeet reads
              </h2>
              <p className="text-ink/80">
                When you use Yeet, the extension reads the text in the X or
                Threads compose box so it can open the other site and inject
                that draft. If Copy Images is enabled, it also reads image files
                attached in the composer shell (not feed or timeline media) so
                it can attach them on the destination. That content is not
                uploaded to our servers.
              </p>
              <p className="text-ink/80 mt-4">
                Copy Videos / Copy GIFs toggles are visible in Settings but
                locked until that support ships. Yeet does not copy videos or
                GIFs today; if one is attached, it skips the cross-post with an
                alert and your source post still goes through.
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
              <p className="text-ink/80">
                Yeet uses Chrome local storage (<code>storage</code> +{" "}
                <code>unlimitedStorage</code>) for:
              </p>
              <ul className="list-disc pl-6 text-ink/80 space-y-2 mt-4">
                <li>
                  <code>isActive</code> — whether the extension is turned on
                </li>
                <li>
                  <code>copyImages</code>, <code>copyVideos</code>,{" "}
                  <code>copyGifs</code> — media preference flags (
                  <code>copyImages</code> is active; videos/GIFs remain locked)
                </li>
                <li>
                  <code>xContexts</code> / <code>threadsContexts</code> — which
                  composer types (new post, reply, quote, etc.) are allowed to
                  yeet in each direction
                </li>
                <li>
                  <code>lastSavedAt</code> — a local timestamp for settings
                  changes
                </li>
                <li>
                  <code>pendingYeetText</code> — temporary plain text waiting to
                  be injected on the destination site, then cleared after a
                  successful post
                </li>
                <li>
                  <code>pendingYeetImages</code> — temporary image payloads for
                  the destination attach step, then cleared after a successful
                  post (or skip)
                </li>
                <li>
                  <code>lastYeet</code> — the last draft you yeeted: text,
                  timestamp, source platform, and when available the destination
                  post URL / id for the popup link
                </li>
                <li>
                  <code>yeetProgress</code> — local progress status shown in the
                  popup (idle / yeeting / done / error)
                </li>
                <li>
                  <code>xAccountPremium</code> — a local cache of whether your X
                  account looks Premium, used only for character-limit checks
                </li>
              </ul>
              <p className="text-ink/80 mt-4">
                Draft text and images are stashed in extension storage rather
                than put in the intent URL, so links and Open Graph previews
                behave normally. Nothing here leaves your device. You can clear
                it by removing the extension or using Reset in Settings.
              </p>
            </div>

            <div>
              <h2 className="font-display font-bold text-2xl mb-4">
                4. Network requests
              </h2>
              <p className="text-ink/80">
                Yeet does not fetch remote configuration or selector files.
                Platform UI selectors ship bundled with the extension build.
              </p>
              <p className="text-ink/80 mt-4">
                Opening X or Threads compose pages happens in your browser, as
                you. Yeet does not proxy those posts through our servers.
              </p>
              <p className="text-ink/80 mt-4">
                After a yeet, the extension may briefly watch the local browser
                response from X (<code>CreateTweet</code>) or Threads
                (configure-text APIs) to pick up the new post URL / id so it can
                show that link in the popup. That response is not sent to us.
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
                . Product site:{" "}
                <a
                  href={siteUrl}
                  className="text-coral hover:underline font-medium"
                >
                  yeet.shivamtaneja.com
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
                  href="https://www.shivamtaneja.com/contact?source=yeet"
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
      <BackToTop />
    </div>
  );
}
