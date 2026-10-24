import { siteConfig } from "@/config/site";
import { getGuide, guideMetadata, mediumGuideUrl } from "@/config/guides";
import { GuideFaq } from "@/components/guides/guide-faq";
import { StoreButtons, StoreInstall } from "@/components/guides/store-install";
import {
  Callout,
  GuideH1,
  GuideH2,
  GuideLead,
  GuideP,
  GuidePage,
  OnThisPage,
  RelatedGuides,
  StepList,
  TextLink,
} from "@/components/guides/guide-ui";

const guide = getGuide("how-to");

export const metadata = guideMetadata(guide.id);

const faqs = [
  {
    question: "How do I post to X and Threads at the same time?",
    answer:
      "Write the post on X or on Threads and press Post (or Cmd/Ctrl+Enter). With Yeet installed in that browser, it opens the other site in a background tab, fills the composer, and clicks Post. Copy-paste and a scheduler can also put the same words on both networks. They suit different habits, and the steps on this page cover all three.",
  },
  {
    question: "What is the free way to post to both?",
    answer:
      "All three paths can be free. Copying the text yourself costs nothing. Yeet is a free, MIT-licensed browser extension for Chrome, Edge, and Firefox. Some schedulers have paid plans. This page does not quote those prices.",
  },
  {
    question: "Does Yeet post from X to Threads and from Threads to X?",
    answer:
      "Yes. Both directions are on by default for new posts. Write on X and it posts to Threads. Write on Threads and it lands on X. You do not flip a switch between them.",
  },
  {
    question: "Will my photos cross-post?",
    answer:
      "Yes, after you turn on Copy Images in Yeet Settings. Up to 4 photos travel with the text, in either direction. The setting is off until you enable it, so a text-only yeet is the default.",
  },
  {
    question: "Why did my video or GIF stay on one network?",
    answer:
      "Video and GIF cross-posting is not supported yet. It is coming soon. If a video or GIF is attached, Yeet skips the cross-post and tells you. The post on the site where you wrote it still goes through. The video and GIF switches in Settings stay locked until that support ships.",
  },
  {
    question: "Do I have to give Yeet my X or Threads password?",
    answer:
      "No. Yeet uses the X and Threads accounts you are already logged into in that browser. It never asks for a password, does not store login tokens, and has no Yeet account, server, or database.",
  },
  {
    question: "What if my post is longer than 280 characters?",
    answer:
      "Yeet checks the destination before it cross-posts. Threads allows 500 characters. A standard X account allows 280. If Yeet recognizes an X Premium account, it uses 25,000 for X instead of 280. Over the limit, Yeet tells you the post is too big and does not cross-post it.",
  },
];

export default function HowToPostToXAndThreadsPage() {
  return (
    <GuidePage breadcrumb={guide.footerLabel}>
      <GuideH1>How to post to X and Threads at the same time</GuideH1>
      <GuideLead>
        You have one update and two timelines. X will not publish it to
        Threads, and Threads will not publish it to X. Here is how to do both,
        from a manual paste to a post that sends itself.
      </GuideLead>

      <Callout title="The short version" tone="mint">
        Post on X or Threads and press Post. With Yeet installed, the other
        site gets the same text on its own, and the photos too once Copy Images
        is on. Copy-paste and schedulers also work. Pick from the three options
        below, then use the setup steps if you want Yeet.
      </Callout>

      <OnThisPage
        items={[
          { href: "#why-separate", label: "Why a post stays on one network" },
          { href: "#copy-and-paste", label: "Option 1: Copy and paste" },
          { href: "#schedulers", label: "Option 2: Use a scheduler" },
          { href: "#yeet", label: "Option 3: Let Yeet post it" },
          { href: "#set-up-yeet", label: "Set up Yeet" },
          { href: "#photos-video-length", label: "Photos, video, and length" },
          { href: "#which-to-choose", label: "Which option to use" },
          { href: "#faq-heading", label: "FAQ" },
        ]}
      />

      <GuideH2 id="why-separate">Why a post stays on one network</GuideH2>
      <GuideP>
        X and Threads are separate products, run by different companies. There
        is no shared composer. Publishing on one does not create a post on the
        other, and signing in to one does not sign you in to the other.
      </GuideP>
      <GuideP>
        They also count length differently. A standard post on X is 280
        characters. Threads allows 500. Photos have to be attached on whichever
        site you are posting to. A link preview is built by the site you post
        on, so the card you saw on Threads will not automatically match the
        card X draws.
      </GuideP>
      <GuideP>
        Sharing from Instagram to Threads, when that Meta option is available,
        still does not put the post on X. For X and Threads together, something
        else has to carry the post. Three approaches cover almost everyone.
      </GuideP>

      <GuideH2 id="copy-and-paste">Option 1: Copy and paste</GuideH2>
      <GuideP>
        This is the right method when you post to both networks a couple of
        times a month and you do not want another tool. It needs no install and
        no connected account.
      </GuideP>
      <StepList
        steps={[
          {
            title: "Publish on the first network",
            body: "Write the post on X or on Threads, attach any photos, and post it there first. Deal with replies on that site after the second post exists, or you will get pulled away before you finish.",
          },
          {
            title: "Copy the text",
            body: "Select the published text and copy it. The image files do not come with the clipboard. You will attach those again.",
          },
          {
            title: "Open the other composer",
            body: "Go to the other site, start a new post, and paste. Read it once. A line that fits in Threads' 500 characters can be over X's 280.",
          },
          {
            title: "Re-attach the photos and check the link card",
            body: "Add the same photos from your camera roll or files. If the post contains a link, wait for the preview and confirm it looks right. Each site fetches that card on its own.",
          },
          {
            title: "Post the second time",
            body: "Publish. You now have two posts, and you did the work twice. The usual miss is a photo that stayed on the first network, or a second post that never got written because a reply showed up.",
          },
        ]}
      />

      <GuideH2 id="schedulers">Option 2: Use a scheduler</GuideH2>
      <GuideP>
        Buffer, Typefully, Fedica, and similar products are for a different
        job: planning posts ahead of time. You typically create an account with
        that company, connect your social accounts, write in their editor, and
        let them publish now or on a schedule.
      </GuideP>
      <GuideP>
        That fits a content calendar, a queue for the week, or a draft you want
        out of the native composer before it goes live. It is a poor match for
        the moment you are already typing on X or Threads and want the other
        timeline updated when you hit Post.
      </GuideP>
      <GuideP>
        Prices, which networks a plan includes, and how images or video are
        handled change by product and over time. This guide does not list
        prices or a feature checklist for those tools. Read the current docs
        for the one you are considering before you rely on a specific network
        or media type. For a wider look at free options, see{" "}
        <TextLink href={getGuide("free-tools").href}>
          free tools to cross-post between X and Threads
        </TextLink>
        .
      </GuideP>

      <GuideH2 id="yeet">Option 3: Let Yeet post the other one</GuideH2>
      <GuideP>
        Yeet is a free browser extension, licensed MIT, for Chrome, Edge, and
        Firefox. It does one job: when you post on X, it posts to Threads, and
        when you post on Threads, it posts to X.
      </GuideP>
      <GuideP>
        Press the Post button, or use Cmd+Enter on a Mac and Ctrl+Enter on
        Windows or Linux. Yeet opens a background tab on the other site, fills
        that composer, and clicks Post. You stay on the post you just wrote.
        Text is included. Photos are included when Copy Images is on, up to 4.
      </GuideP>
      <GuideP>
        It posts with the X and Threads sessions already in that browser. It
        never asks for a password, does not store login tokens, and has no Yeet
        account, server, or database. The code is public on{" "}
        <TextLink href={siteConfig.links.github} external>
          GitHub
        </TextLink>
        . What stays on your device is spelled out in the{" "}
        <TextLink href={siteConfig.links.privacy}>privacy policy</TextLink>.
        Yeet is not affiliated with X Corp or Meta.
      </GuideP>
      <Callout title="A concrete example" tone="butter">
        A 200-character Threads post with two photos: press Post. With Copy
        Images on, X receives the same text and both photos. At 300 characters,
        a standard X account is past 280, so Yeet warns you and does not
        cross-post that one. Threads would still have accepted 300, because its
        limit is 500.
      </Callout>

      <GuideH2 id="set-up-yeet">Set up Yeet</GuideH2>
      <GuideP>
        Most of this is one install and two logins you already have. If you
        mainly write on Threads, the{" "}
        <TextLink href={getGuide("threads-to-x").href}>
          Threads to X guide
        </TextLink>{" "}
        follows that direction on its own. The same extension handles the
        return trip.
      </GuideP>
      <StepList
        steps={[
          {
            title: "Install it in the browser you already use",
            body: (
              <>
                <p>
                  Chrome, Edge, or Firefox. It has to be the browser where X
                  and Threads are signed in. Yeet cannot see a login that lives
                  in a different browser.
                </p>
                <StoreButtons />
              </>
            ),
          },
          {
            title: "Be signed in to both sites",
            body: "Open x.com and threads.com once in that browser. Yeet posts as you, through those sessions. There is no second login and no password field.",
          },
          {
            title: "Turn on Copy Images if photos should come along",
            body: "Open the Yeet popup and go to Settings. Copy Images is off until you enable it. With it on, up to 4 photos cross with the text. Leave it off and only the words go.",
          },
          {
            title: "Know which posts cross by default",
            body: "New posts are on in both directions. Replies, quotes, and mentions stay on the site where you wrote them until you enable those in Settings. A multi-post thread is not copied yet.",
          },
          {
            title: "Write where you already write, then press Post",
            body: "Use the Post button, or Cmd+Enter (Mac) / Ctrl+Enter (Windows and Linux). Yeet opens a background tab, fills the other composer, and clicks Post.",
          },
          {
            title: "Pause when one post should stay put",
            body: "The popup pauses and resumes cross-posting. While it is paused, new posts stay on the network you wrote them on. Resume when you want both timelines again.",
          },
          {
            title: "Open the last cross-post from the popup",
            body: "After a yeet, the popup links to that cross-post so you can jump to it and confirm it landed.",
          },
        ]}
      />
      <GuideP>
        The same walkthrough is also on{" "}
        <TextLink href={mediumGuideUrl} external>
          Medium
        </TextLink>
        .
      </GuideP>

      <GuideH2 id="photos-video-length">Photos, video, and length</GuideH2>
      <div className="mt-6 grid grid-cols-2 gap-3">
        <div className="rounded-2xl border-2 border-ink bg-cream p-4 shadow-[4px_4px_0_var(--color-ink)]">
          <p className="text-sm font-bold text-ink/50">X, standard</p>
          <p className="font-display text-4xl font-extrabold">280</p>
          <p className="text-sm text-ink/70">characters before Yeet warns you</p>
        </div>
        <div className="rounded-2xl border-2 border-ink bg-cream p-4 shadow-[4px_4px_0_var(--color-ink)]">
          <p className="text-sm font-bold text-ink/50">Threads</p>
          <p className="font-display text-4xl font-extrabold">500</p>
          <p className="text-sm text-ink/70">characters before Yeet warns you</p>
        </div>
      </div>
      <GuideP>
        If Yeet recognizes an X Premium account, it uses 25,000 characters for
        X instead of 280. Over the limit that applies, Yeet tells you the post
        is too big and does not cross-post it.
      </GuideP>
      <Callout title="Video and GIFs are not supported yet">
        That support is coming soon. If a video or GIF is attached, Yeet skips
        the cross-post and alerts you. The post on the site you wrote it on
        still publishes. The video and GIF controls in Settings are visible and
        locked until this ships. Photos are the media that works today, up to 4,
        with Copy Images on.
      </Callout>

      <GuideH2 id="which-to-choose">Which option to use</GuideH2>
      <div className="mt-6 grid gap-4 md:grid-cols-3">
        <div className="rounded-2xl border-2 border-ink bg-cream p-5 shadow-[4px_4px_0_var(--color-ink)]">
          <h3 className="font-display text-lg font-bold">Paste it</h3>
          <p className="mt-2 text-[15px] leading-relaxed text-ink/75">
            A few posts a month, and you want zero software. Budget a minute
            and re-attach the photos.
          </p>
        </div>
        <div className="rounded-2xl border-2 border-ink bg-butter p-5 shadow-[4px_4px_0_var(--color-ink)]">
          <h3 className="font-display text-lg font-bold">Schedule it</h3>
          <p className="mt-2 text-[15px] leading-relaxed text-ink/75">
            You plan a queue and write in a dashboard. Confirm the networks and
            the price on that product&apos;s site.
          </p>
        </div>
        <div className="rounded-2xl border-2 border-ink bg-mint p-5 shadow-[4px_4px_0_var(--color-ink)]">
          <h3 className="font-display text-lg font-bold">Yeet it</h3>
          <p className="mt-2 text-[15px] leading-relaxed text-ink/75">
            You already write on X or Threads and want the other post to go out
            when you hit Post. Free, both directions.
          </p>
        </div>
      </div>
      <GuideP>
        If Yeet is the fit, the install buttons are below. If you are still
        comparing, the{" "}
        <TextLink href={getGuide("free-tools").href}>
          free cross-posting tools
        </TextLink>{" "}
        page puts Yeet next to Crossposter, manual posting, and paid
        schedulers.
      </GuideP>

      <GuideFaq items={faqs} />
      <StoreInstall />
      <RelatedGuides current={guide.id} />
    </GuidePage>
  );
}
