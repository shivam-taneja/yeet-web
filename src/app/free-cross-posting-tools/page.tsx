import { getGuide, guideMetadata } from "@/config/guides";
import { GuideFaq } from "@/components/guides/guide-faq";
import { StoreInstall } from "@/components/guides/store-install";
import {
  Callout,
  GuideH1,
  GuideH2,
  GuideLead,
  GuideP,
  GuidePage,
  OnThisPage,
  RelatedGuides,
  TextLink,
} from "@/components/guides/guide-ui";

const guide = getGuide("free-tools");
const howTo = getGuide("how-to");
const threadsToX = getGuide("threads-to-x");

const crossposterUrl = "https://crossposter.mochi.is/";

export const metadata = guideMetadata(guide.id);

const faqs = [
  {
    question: "What free tools cross-post between X and Threads?",
    answer:
      "Yeet and Crossposter are free browser extensions that can move a post between X (Twitter) and Threads. Copying the text yourself is also free. Yeet posts the other network for you when you hit Post. Crossposter, as described on its site, prefills the other composers and leaves the final Post click to you. It also covers more networks than X and Threads.",
  },
  {
    question: "What is the difference between Yeet and Crossposter?",
    answer:
      "Yeet is for X and Threads only, both directions, and it clicks Post on the other site for you. It copies text and, with Copy Images on, up to 4 photos. Video and GIFs are not supported yet. Crossposter's site describes a free open-source extension that starts from a post on screen, lets you edit once, and opens several networks with the composer filled in, including X and Threads, plus text, images, and video. It says it does not auto-publish and does not schedule.",
  },
  {
    question: "Can I cross-post for free without an extension?",
    answer:
      "Yes. Copy the text, open the other site, paste, attach the photos again, check the length (280 characters on a standard X account, 500 on Threads), and post. It costs nothing and takes a minute. It is easy to forget the second post or a photo.",
  },
  {
    question: "Do Buffer, Typefully, or Fedica post to both X and Threads?",
    answer:
      "They are paid scheduling products. People use that category to draft and queue posts from the company's own app after connecting accounts. Whether a given plan publishes to both X and Threads, and how images or video are handled, is something to confirm on that product's current site. This page does not quote their prices or promise a feature on every plan.",
  },
  {
    question: "Which free option posts by itself when I hit Post?",
    answer:
      "Yeet. Press Post on X or Threads, or use Cmd/Ctrl+Enter, and it opens the other composer in a background tab and posts. Crossposter, per its site, stops before that click so you can review each composer. Doing it by hand means you post twice yourself.",
  },
  {
    question: "Does any free option support video between X and Threads?",
    answer:
      "Yeet does not, yet. Video and GIF support is coming soon. If one is attached, Yeet skips the cross-post and tells you, and the original post still goes through. Crossposter's site says video can travel with a post, and you still press Post yourself. By hand, you upload the video on each site.",
  },
];

const rows: { label: string; cells: string[] }[] = [
  {
    label: "Price",
    cells: [
      "Free. MIT license.",
      "Free and open source, as described on its site.",
      "Free.",
      "Paid. Prices are not listed here.",
    ],
  },
  {
    label: "What you do",
    cells: [
      "Press Post on X or Threads. Yeet posts the other one.",
      "Right-click a post, edit once, pick destinations. You press Post on each.",
      "Copy, switch sites, paste, re-attach media, post again.",
      "Write in their app. They publish now or on a schedule.",
    ],
  },
  {
    label: "Clicks Post for you",
    cells: [
      "Yes, on the other network.",
      "No. Their site says nothing is auto-published.",
      "No.",
      "They publish from their product after you connect accounts.",
    ],
  },
  {
    label: "Direction",
    cells: [
      "X and Threads, both ways.",
      "You choose destinations. X and Threads are among them.",
      "Whichever site you open.",
      "Whatever that product supports on your plan.",
    ],
  },
  {
    label: "Images",
    cells: [
      "Yes, with Copy Images on, up to 4 photos.",
      "Yes. Their site says images travel with the post.",
      "You attach them again.",
      "Depends on the product. Check their docs.",
    ],
  },
  {
    label: "Video and GIFs",
    cells: [
      "Not yet. Coming soon.",
      "Their site says video is supported.",
      "You upload the file on each site.",
      "Depends on the product. Check their docs.",
    ],
  },
  {
    label: "Account",
    cells: [
      "The X and Threads sessions already in your browser. No Yeet password, no stored tokens, no Yeet account.",
      "The sessions already in your browser. Their site says there is no separate account to connect.",
      "Your own logins.",
      "You create an account with them and connect your social accounts.",
    ],
  },
  {
    label: "Scheduling",
    cells: [
      "No. It posts when you post.",
      "No. Their site says it does not schedule.",
      "No.",
      "Yes. A calendar is the reason to use one.",
    ],
  },
  {
    label: "Browsers",
    cells: [
      "Chrome, Edge, and Firefox.",
      "Chrome and Firefox, per their site.",
      "Any browser.",
      "Their website. The browser matters less.",
    ],
  },
];

export default function FreeCrossPostingToolsPage() {
  return (
    <GuidePage breadcrumb={guide.footerLabel}>
      <GuideH1>Free tools to cross-post between X and Threads</GuideH1>
      <GuideLead>
        An honest comparison. Yeet is one of the options, not the referee.
        Crossposter details below come from that project&apos;s own site.
        Paid schedulers are described only as a category, with no prices and
        no feature promises.
      </GuideLead>

      <Callout title="The short version" tone="mint">
        Want the other network to post itself when you hit Post on X or
        Threads? Use Yeet. Want several networks, video, and a last look
        before each post goes out? Look at Crossposter. Planning a week ahead?
        That is what paid schedulers are for. Posting twice a month? Paste it
        yourself.
      </Callout>

      <OnThisPage
        items={[
          { href: "#which-job", label: "Which job you are doing" },
          { href: "#yeet", label: "Yeet" },
          { href: "#crossposter", label: "Crossposter" },
          { href: "#by-hand", label: "Posting by hand" },
          { href: "#schedulers", label: "Paid schedulers" },
          { href: "#side-by-side", label: "Side by side" },
          { href: "#how-to-choose", label: "How to choose" },
          { href: "#faq-heading", label: "FAQ" },
        ]}
      />

      <GuideH2 id="which-job">Which job you are doing</GuideH2>
      <GuideP>
        People say &quot;cross-post&quot; and mean three different jobs. The
        tool that is good at one is clumsy at the others.
      </GuideP>
      <div className="mt-6 grid gap-4 md:grid-cols-3">
        <div className="rounded-2xl border-2 border-ink bg-mint p-5 shadow-[4px_4px_0_var(--color-ink)]">
          <h3 className="font-display text-lg font-bold">Post this, now</h3>
          <p className="mt-2 text-[15px] leading-relaxed text-ink/80">
            You are in the X or Threads composer. You want the other timeline
            to get this post when you press Post.
          </p>
        </div>
        <div className="rounded-2xl border-2 border-ink bg-butter p-5 shadow-[4px_4px_0_var(--color-ink)]">
          <h3 className="font-display text-lg font-bold">Share it wider</h3>
          <p className="mt-2 text-[15px] leading-relaxed text-ink/80">
            You have a post on screen and want it prefilled on several
            networks, with a chance to edit each one before it publishes.
          </p>
        </div>
        <div className="rounded-2xl border-2 border-ink bg-cream p-5 shadow-[4px_4px_0_var(--color-ink)]">
          <h3 className="font-display text-lg font-bold">Plan the week</h3>
          <p className="mt-2 text-[15px] leading-relaxed text-ink/80">
            You want a queue, a calendar, and posts that go out while you are
            not sitting in the composer.
          </p>
        </div>
      </div>

      <GuideH2 id="yeet">Yeet</GuideH2>
      <GuideP>
        Yeet is a free, MIT-licensed browser extension for Chrome, Edge, and
        Firefox. It covers two networks, both directions: X to Threads, and
        Threads to X. New posts are on by default.
      </GuideP>
      <GuideP>
        Press Post, or Cmd/Ctrl+Enter. Yeet opens a background tab on the other
        site, fills the composer, and clicks Post. Text goes with it. Photos
        go with it when you turn on Copy Images in Settings, up to 4. Video and
        GIFs are not supported yet. That is coming soon. If a video or GIF is
        attached, Yeet skips the cross-post, tells you, and your original post
        still publishes.
      </GuideP>
      <GuideP>
        It uses the accounts already logged in in that browser. It never asks
        for a password, does not store login tokens, and has no Yeet account,
        server, or database. You can pause and resume from the popup, and the
        popup links to the last cross-post. It warns when a draft is too long:
        280 characters on a standard X account, 500 on Threads. When it
        recognizes X Premium, the X limit it uses is 25,000.
      </GuideP>
      <GuideP>
        Yeet does not schedule, and it does not post to Bluesky, LinkedIn,
        Instagram, or anywhere else. If X and Threads are the whole job, that
        narrow scope is the point. Setup steps are in{" "}
        <TextLink href={howTo.href}>
          how to post to X and Threads at the same time
        </TextLink>
        . The Threads-first path is in{" "}
        <TextLink href={threadsToX.href}>
          cross-post Threads to X
        </TextLink>
        . Yeet is not affiliated with X Corp or Meta.
      </GuideP>

      <GuideH2 id="crossposter">Crossposter</GuideH2>
      <GuideP>
        <TextLink href={crossposterUrl} external>
          Crossposter
        </TextLink>{" "}
        describes itself as a free, open-source browser extension for Chrome
        and Firefox. On its site, the flow is: right-click a post, edit the
        text once, choose the destinations, and it opens each platform&apos;s
        own composer with the text and media filled in. You press Post.
      </GuideP>
      <GuideP>
        Their site lists X and Threads among the networks, along with others
        such as Bluesky, LinkedIn, Instagram, Facebook, and Substack. It says
        text, images, and video can travel with the post. It also says posts
        are not auto-published, that it does not schedule, and that it does not
        ask you to connect accounts or hand over API keys. It runs in the
        browser you are already signed into.
      </GuideP>
      <GuideP>
        That is a strong fit when you want more than two networks, when you
        want video included, or when you want to change the caption on each
        site before it goes out. It is a different fit when you want X and
        Threads to happen from a single Post click with no second pass. Read
        their current site before you rely on a network or a media type. This
        page is not affiliated with Crossposter.
      </GuideP>

      <GuideH2 id="by-hand">Posting by hand</GuideH2>
      <GuideP>
        Copy the text, open the other site, paste, attach the photos again, and
        post. Check length while you are there. A standard X post stops at 280
        characters. Threads allows 500. A paste does not bring image files or
        the other site&apos;s link preview with it.
      </GuideP>
      <GuideP>
        This is the right tool when both-network posts are rare. Nothing to
        install, nothing to trust with a session, nothing that can post while
        you meant to keep an update on one timeline. The cost is the minute,
        and the posts you forget. The numbered version of this is in the{" "}
        <TextLink href={`${howTo.href}#copy-and-paste`}>
          copy-and-paste steps
        </TextLink>
        .
      </GuideP>

      <GuideH2 id="schedulers">Paid schedulers</GuideH2>
      <GuideP>
        Buffer, Typefully, and Fedica are examples of paid tools people use to
        draft and schedule social posts. The usual shape of this category: you
        create an account with that company, connect your social accounts,
        write in their editor, and they publish immediately or later.
      </GuideP>
      <GuideP>
        Use one when the job is a calendar. A queue, a week planned on Sunday,
        a draft that should leave your notes app and go live at a set time.
        That is a different product from an extension that rides along with the
        X or Threads composer.
      </GuideP>
      <GuideP>
        Plans, which networks are included, and how images or video are handled
        change often. This page does not quote prices and does not claim that
        every plan of every one of these tools posts to both X and Threads.
        Check the product&apos;s own site for the plan you would actually buy.
        Yeet is not affiliated with Buffer, Typefully, or Fedica.
      </GuideP>

      <GuideH2 id="side-by-side">Side by side</GuideH2>
      <p className="mt-3 text-sm font-medium text-ink/55 md:hidden">
        Swipe sideways to see every column.
      </p>
      <div className="mt-4 overflow-x-auto rounded-2xl border-2 border-ink shadow-[6px_6px_0_var(--color-ink)]">
        <table className="w-full min-w-[760px] border-collapse text-left text-sm">
          <caption className="border-b-2 border-ink bg-butter px-4 py-3 text-left text-sm font-semibold text-ink/80">
            Crossposter cells follow what that project publishes. Scheduler
            cells stay general on purpose.
          </caption>
          <thead className="bg-ink text-cream">
            <tr>
              <th scope="col" className="px-3 py-3 font-bold">
                &nbsp;
              </th>
              {["Yeet", "Crossposter", "By hand", "Paid schedulers"].map(
                (heading) => (
                  <th key={heading} scope="col" className="px-3 py-3 font-bold">
                    {heading}
                  </th>
                ),
              )}
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.label} className="border-t border-ink/15 align-top">
                <th
                  scope="row"
                  className="bg-cream px-3 py-3 font-display font-bold"
                >
                  {row.label}
                </th>
                {row.cells.map((cell) => (
                  <td key={cell} className="px-3 py-3 leading-relaxed text-ink/80">
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <GuideH2 id="how-to-choose">How to choose</GuideH2>
      <GuideP>
        Start from the job, not from a feature grid.
      </GuideP>
      <ul className="mt-4 space-y-3 text-base leading-relaxed text-ink/80 md:text-lg">
        <li className="rounded-2xl border-2 border-ink bg-cream px-4 py-3">
          <span className="font-bold text-ink">Both timelines, from the composer you already use.</span>{" "}
          Install Yeet. Turn on Copy Images if you post photos. Pause when a
          post should stay on one network.
        </li>
        <li className="rounded-2xl border-2 border-ink bg-cream px-4 py-3">
          <span className="font-bold text-ink">More than X and Threads, or you want to approve each post.</span>{" "}
          Crossposter matches that description on its own site, including video.
          Confirm the networks there.
        </li>
        <li className="rounded-2xl border-2 border-ink bg-cream px-4 py-3">
          <span className="font-bold text-ink">A calendar.</span> Use a paid
          scheduler and read that product&apos;s current network list. Do not
          pick it because a comparison page guessed at the plan.
        </li>
        <li className="rounded-2xl border-2 border-ink bg-cream px-4 py-3">
          <span className="font-bold text-ink">Rarely both.</span> Paste it.
          Re-attach the photos. You are done.
        </li>
      </ul>
      <GuideP>
        Yeet will not become a scheduler, and a scheduler will not feel like
        pressing Post inside Threads. Using one for the job it is built for
        saves the hour people spend making the wrong tool behave.
      </GuideP>

      <GuideFaq items={faqs} />
      <StoreInstall />
      <RelatedGuides current={guide.id} />
    </GuidePage>
  );
}