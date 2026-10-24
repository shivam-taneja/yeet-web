import { siteConfig } from "@/config/site";
import { getGuide, guideMetadata } from "@/config/guides";
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

const guide = getGuide("threads-to-x");
const howTo = getGuide("how-to");
const freeTools = getGuide("free-tools");

export const metadata = guideMetadata(guide.id);

const faqs = [
  {
    question: "Can I automatically cross-post from Threads to X?",
    answer:
      "Yes. Install Yeet in the browser where you are signed in to Threads and to X (Twitter). Write on Threads and press Post, or use Cmd/Ctrl+Enter. Yeet opens X in a background tab, fills the composer, and clicks Post.",
  },
  {
    question: "Does the same extension post from X to Threads?",
    answer:
      "Yes. You do not install a second tool for the return trip. A new post on X is cross-posted to Threads the same way: background tab, composer filled, Post clicked. Both directions are on by default.",
  },
  {
    question: "Do images go from Threads to X?",
    answer:
      "Yes, when Copy Images is turned on in Yeet Settings. Up to 4 photos are attached on X. The setting is off until you enable it. Video and GIFs are not copied yet.",
  },
  {
    question: "What if my Threads post is longer than an X post?",
    answer:
      "Threads allows 500 characters. A standard X account allows 280, so a post that fits on Threads can still be too long for X. Yeet warns you and does not cross-post it. If Yeet recognizes X Premium, it allows 25,000 characters on X instead of 280.",
  },
  {
    question: "Is automatic Threads-to-X cross-posting free?",
    answer:
      "Yeet is free and open source under the MIT license. There is no Yeet account and no subscription. It runs on Chrome, Edge, and Firefox.",
  },
  {
    question: "Does Yeet store my Threads or X login?",
    answer:
      "No. It uses the accounts you are already logged into. It never asks for a password, does not store login tokens, and has no server or database. You can pause it from the popup whenever a Threads post should stay only on Threads.",
  },
];

export default function ThreadsToXPage() {
  return (
    <GuidePage breadcrumb={guide.footerLabel}>
      <GuideH1>Cross-post Threads to X (Twitter) automatically</GuideH1>
      <GuideLead>
        A Threads post stays on Threads. If you want the same update on X,
        something has to carry it over. Yeet does that in the browser the
        moment you press Post.
      </GuideLead>

      <Callout title="The short version" tone="mint">
        Press Post on Threads. Yeet opens X in a background tab, fills the
        composer with your text, attaches photos when Copy Images is on, and
        clicks Post. Write on X later and the same install sends that post to
        Threads.
      </Callout>

      <OnThisPage
        items={[
          { href: "#what-automatic-means", label: "What automatic means" },
          { href: "#from-threads", label: "Post from Threads to X" },
          { href: "#x-to-threads", label: "The other direction: X to Threads" },
          { href: "#photos-and-video", label: "Photos, video, and GIFs" },
          { href: "#length-and-pause", label: "Length, pause, and the last post" },
          { href: "#faq-heading", label: "FAQ" },
        ]}
      />

      <GuideH2 id="what-automatic-means">What automatic means here</GuideH2>
      <GuideP>
        This is not a draft sitting in another app, and it is not a calendar.
        You write in the Threads composer you already use. When you press Post,
        or Cmd+Enter on a Mac and Ctrl+Enter on Windows or Linux, Yeet opens a
        background tab on X, fills that composer, and clicks Post.
      </GuideP>
      <GuideP>
        The X account is the one already logged in in that browser. Yeet never
        asks for your password, does not store login tokens, and has no account,
        server, or database of its own. Details are in the{" "}
        <TextLink href={siteConfig.links.privacy}>privacy policy</TextLink>.
        The extension is{" "}
        <TextLink href={siteConfig.links.github} external>
          open source (MIT)
        </TextLink>
        . It is not affiliated with X Corp or Meta.
      </GuideP>
      <GuideP>
        If you would rather compare this with pasting by hand, Crossposter, or
        a paid scheduler, that write-up is on the{" "}
        <TextLink href={freeTools.href}>free cross-posting tools</TextLink>{" "}
        page. The full setup, including the manual and scheduler paths, is in{" "}
        <TextLink href={howTo.href}>
          how to post to X and Threads at the same time
        </TextLink>
        .
      </GuideP>

      <GuideH2 id="from-threads">Post from Threads to X</GuideH2>
      <GuideP>
        Do this in the browser where both sites are signed in. A login that
        lives in a different browser is invisible to the extension.
      </GuideP>
      <StepList
        steps={[
          {
            title: "Install Yeet",
            body: (
              <>
                <p>
                  Chrome, Edge, or Firefox. Free, no Yeet account to create.
                </p>
                <StoreButtons />
              </>
            ),
          },
          {
            title: "Confirm both sessions",
            body: "Open threads.com and x.com in that same browser. If either one asks you to log in, do that once. Yeet posts through those sessions.",
          },
          {
            title: "Turn on Copy Images for photo posts",
            body: "In the Yeet popup, open Settings and enable Copy Images. It is off until you do. Up to 4 photos then attach on X with the text.",
          },
          {
            title: "Write the Threads post and press Post",
            body: "The Post button and the keyboard shortcut both count. Yeet opens X in a background tab, fills the composer, and posts. You stay on Threads.",
          },
          {
            title: "Watch the length, especially on the way to X",
            body: "Threads allows 500 characters. A standard X account allows 280. A post that looks fine on Threads can be too long for X. Yeet warns you and does not send that cross-post. X Premium is checked separately: when Yeet recognizes it, the X limit is 25,000.",
          },
        ]}
      />
      <Callout title="The trip people hit first" tone="butter">
        Threads is the longer box. If you write up to 500 characters there, X
        may refuse the cross-post at 280 unless the account is Premium. Shorten
        the Threads post, or post a shorter version, when you need a standard X
        account to take it.
      </Callout>

      <GuideH2 id="x-to-threads">The other direction: X to Threads</GuideH2>
      <GuideP>
        You do not add a second extension, and there is no separate setup for
        X to Threads. New posts are on in both directions from the start.
      </GuideP>
      <GuideP>
        Write on X, press Post or use Cmd/Ctrl+Enter, and Yeet opens Threads in
        a background tab, fills the composer, and clicks Post. Photos follow
        when Copy Images is on, up to 4. Threads&apos; 500-character limit is
        the one that matters on this return trip, which is roomier than a
        standard X post, so length warnings are less common in this direction
        than they are from Threads to X.
      </GuideP>
      <GuideP>
        Replies, quotes, and mentions stay on the site where you wrote them
        until you turn those on in Settings. A multi-post thread is not copied
        yet. The{" "}
        <TextLink href={howTo.href}>step-by-step setup</TextLink> covers
        paste-it-yourself and schedulers too, if automatic posting is not what
        you want for every update.
      </GuideP>

      <GuideH2 id="photos-and-video">Photos, video, and GIFs</GuideH2>
      <GuideP>
        Photos work in both directions with Copy Images enabled, up to 4 per
        post. Turn the setting on before you publish. A post you already sent
        without it does not go back and pick up the pictures.
      </GuideP>
      <Callout title="Video and GIFs are not supported yet">
        They are coming soon. If one is attached, Yeet skips the cross-post and
        alerts you. Your Threads post still publishes. The video and GIF
        switches in Settings are locked until that support ships, so there is
        nothing to toggle on today.
      </Callout>

      <GuideH2 id="length-and-pause">Length, pause, and the last post</GuideH2>
      <GuideP>
        Two controls live in the popup, and you will use both.
      </GuideP>
      <GuideP>
        Pause stops the next posts from crossing. Use it when a Threads update
        should stay on Threads: a reply to a Threads conversation, a photo that
        only makes sense there, or anything you do not want on X. Resume when
        you want both timelines again. Pause does not delete anything already
        posted.
      </GuideP>
      <GuideP>
        After a cross-post, the popup links to the last one. Open it to confirm
        the X post landed, or to grab the URL. You do not have to hunt the X
        timeline for the new post.
      </GuideP>
      <div className="mt-6 grid grid-cols-2 gap-3">
        <div className="rounded-2xl border-2 border-ink bg-cream p-4 shadow-[4px_4px_0_var(--color-ink)]">
          <p className="text-sm font-bold text-ink/50">X, standard</p>
          <p className="font-display text-4xl font-extrabold">280</p>
          <p className="text-sm text-ink/70">Yeet warns past this on the way to X</p>
        </div>
        <div className="rounded-2xl border-2 border-ink bg-cream p-4 shadow-[4px_4px_0_var(--color-ink)]">
          <p className="text-sm font-bold text-ink/50">Threads</p>
          <p className="font-display text-4xl font-extrabold">500</p>
          <p className="text-sm text-ink/70">Yeet warns past this on the way to Threads</p>
        </div>
      </div>
      <GuideP>
        X Premium, when Yeet recognizes the account, is allowed 25,000
        characters instead of 280.
      </GuideP>

      <GuideFaq items={faqs} />
      <StoreInstall />
      <RelatedGuides current={guide.id} />
    </GuidePage>
  );
}
