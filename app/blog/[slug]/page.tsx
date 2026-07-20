import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { posts, getPost, getAdjacentPosts } from "@/lib/blog";

const heroImages: Record<string, { src: string; alt: string }> = {
  "why-your-website-costs-money": {
    src: "/images/blog/the-box-homepage.png",
    alt: "The Box gym website homepage",
  },
  "5-things-teesside-wrong": {
    src: "/images/blog/teesside-phone-hero.jpg",
    alt: "Person browsing a website on their phone",
  },
  "website-redesign-checklist": {
    src: "/images/blog/website-design-scrabble.jpg",
    alt: "Scrabble tiles spelling out web design",
  },
};

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
  };
}

function PostContent({ slug }: { slug: string }) {
  switch (slug) {
    case "why-your-website-costs-money":
      return <WhyYourWebsiteCostsMoney />;
    case "5-things-teesside-wrong":
      return <FiveThingsTeessideWrong />;
    case "website-redesign-checklist":
      return <WebsiteRedesignChecklist />;
    default:
      return null;
  }
}

function WhyYourWebsiteCostsMoney() {
  return (
    <>
      <p>
        Your website isn&apos;t neutral. It&apos;s either bringing in customers
        or pushing them away. There&apos;s no middle ground.
      </p>
      <p>
        I&apos;ve worked on a range of digital projects over the years: learning
        platforms, UX design, course content, and websites. And I&apos;ve
        noticed a pattern: most business owners don&apos;t realise their website
        is actively <em>harming</em> their business.
      </p>
      <p>Let me show you what I mean.</p>

      <h2>The Problem: Websites That Shouldn&apos;t Exist (But Do)</h2>
      <p>
        Walk into any local high street. Pick a business at random: a caf&eacute;,
        a dental practice, a gym, a contractor. Now Google them.
      </p>
      <p>Here&apos;s what you&apos;ll probably find:</p>
      <ul>
        <li>No website at all</li>
        <li>
          A website that looks like it was built in 2010 and abandoned
        </li>
        <li>
          A site with outdated information (wrong opening hours, old staff
          photos, prices that don&apos;t match reality)
        </li>
        <li>
          A beautiful website that isn&apos;t linked to Google, so nobody can
          find it
        </li>
      </ul>
      <p>
        I recently built a website for The Box, a functional fitness gym in
        Redcar. They&apos;d been open for 7+ years without an online presence.
        Not a single website. Seven years.
      </p>
      <p>
        They were getting new members through word-of-mouth, sure. But they were
        losing countless others who Googled &ldquo;gym near me&rdquo; and found
        nothing. Zero online presence.
      </p>
      <p>
        Within weeks of launching their new site, they started getting inquiries
        from people who had no idea they existed. They were missing out on
        revenue for years because they weren&apos;t visible online.
      </p>

      <div className="grid grid-cols-2 gap-4 my-8">
        <div className="relative aspect-[4/3] overflow-hidden">
          <Image
            src="/images/blog/the-box-schedule.png"
            alt="The Box gym website schedule page"
            fill
            className="object-cover"
            sizes="(max-width: 800px) 50vw, 400px"
          />
        </div>
        <div className="relative aspect-[4/3] overflow-hidden">
          <Image
            src="/images/blog/the-box-gallery.png"
            alt="The Box gym website gallery page"
            fill
            className="object-cover"
            sizes="(max-width: 800px) 50vw, 400px"
          />
        </div>
      </div>

      <h2>Why This Matters More Now Than Ever</h2>
      <p>
        Five years ago, you could get away with a mediocre website. Now you
        can&apos;t.
      </p>
      <p>People expect websites to:</p>
      <ul>
        <li>Load fast (not in 5 seconds)</li>
        <li>Work on their phones (60% of searches happen on mobile)</li>
        <li>
          Show current information (opening hours, prices, staff, locations)
        </li>
        <li>Show up on Google Business (so they actually find you)</li>
        <li>
          Link to your social media and reviews (so they can verify you&apos;re
          real)
        </li>
      </ul>
      <p>
        If your website doesn&apos;t do these things, people assume your
        business isn&apos;t serious. They go somewhere else.
      </p>

      <h2>The Real Cost</h2>
      <p>
        A bad website doesn&apos;t just fail to bring in customers. It actively
        pushes them away.
      </p>
      <p>
        Imagine this: A potential customer Googles your business. They find your
        website. It&apos;s slow, confusing, looks unprofessional. The information
        doesn&apos;t match what they expect. No clear way to contact you. No
        photos. No evidence you&apos;re trustworthy.
      </p>
      <p>
        What do they do? They leave. They Google your competitor instead.
      </p>
      <p>
        That&apos;s a lost customer. And if your website is bad, it&apos;s
        probably costing you one every single day.
      </p>
      <p>
        A frustrating, ugly, unprofessional website tells customers:
        &ldquo;We don&apos;t care. We&apos;re not serious. Don&apos;t trust
        us.&rdquo; That&apos;s worse than having no website at all.
      </p>

      <h2>What Websites Actually Need</h2>
      <p>
        Here&apos;s the thing: your website doesn&apos;t need to be complicated.
        It needs to be:
      </p>
      <ul>
        <li>
          <strong>Professional and stylish</strong> (builds trust instantly)
        </li>
        <li>
          <strong>Fast</strong> (people leave if it takes 3 seconds to load)
        </li>
        <li>
          <strong>Mobile-friendly</strong> (because most visitors are on phones)
        </li>
        <li>
          <strong>Clear information</strong> (opening hours, prices, what you
          do, how to contact you)
        </li>
        <li>
          <strong>Good photos</strong> (real photos of your business, not stock
          images)
        </li>
        <li>
          <strong>Easy to find on Google</strong> (linked to your Google Business
          Profile)
        </li>
        <li>
          <strong>Updated regularly</strong> (not abandoned after launch)
        </li>
      </ul>
      <p>
        That&apos;s it. You don&apos;t need animations, transitions, or
        complicated features. In fact, if you use those, they need to be subtle
        and sleek. Most websites overcomplicate things. The best ones are simple.
      </p>

      <h2>The Solution: A Website That Works (And Stays Updated)</h2>
      <p>
        Most business owners don&apos;t realise this, but the problem
        isn&apos;t usually building the website. It&apos;s keeping it alive.
      </p>
      <p>
        You build a website. The designer disappears. Months pass. Your opening
        hours change but the website still shows the old ones. You hire new staff
        but the photos are from 2019. You run a promotion but there&apos;s no
        way to announce it.
      </p>
      <p>The website becomes a liability instead of an asset.</p>
      <p>
        That&apos;s why we offer ongoing hosting and management. Your website
        stays fast, secure, and up-to-date. You can make content changes each
        month. And if you want growth, we&apos;ll handle your Google Business
        Profile, write blog posts for SEO, and have monthly check-ins to make
        sure your website is actually bringing in customers.
      </p>

      <h2>The Bottom Line</h2>
      <p>
        Your website is either working for you or against you. If it&apos;s
        outdated, slow, confusing, or disconnected from Google, it&apos;s
        costing you revenue every single day.
      </p>
      <p>
        The good news? This is fixable. And it doesn&apos;t have to be
        expensive.
      </p>
      <p>
        A good website that&apos;s kept up-to-date and properly maintained will
        bring in new customers, build trust, and give your business a
        professional online presence.
      </p>
    </>
  );
}

function FiveThingsTeessideWrong() {
  return (
    <>
      <p>
        I&apos;ve worked on digital projects for years: learning platforms, UX
        design, course content, websites. And I&apos;ve noticed something: most
        Teesside businesses make the same mistakes with their websites.
      </p>
      <p>
        These aren&apos;t small issues. They&apos;re costing you customers and
        revenue.
      </p>
      <p>Here are the five biggest ones I see.</p>

      <h2>1. Thinking More Pages = Better Website</h2>
      <p>
        Business owners often believe that more content is better. More pages,
        more text, more features.
      </p>
      <p>
        Then they launch a massive website. Nobody navigates it. Visitors get
        lost. They leave.
      </p>
      <p>The truth? Simplicity wins. A good website answers four questions:</p>
      <ul>
        <li>Who are you?</li>
        <li>What do you do?</li>
        <li>Where can I find you?</li>
        <li>How do I get in touch?</li>
      </ul>
      <p>
        That&apos;s it. You don&apos;t need pages and pages of information. You
        need clarity.
      </p>
      <p>
        The best websites are the ones that say exactly what you do in under 10
        seconds. Everything else is noise.
      </p>

      <h2>2. Hiring Someone Who Then Disappears</h2>
      <p>This is the most common mistake I see.</p>
      <p>
        You hire a designer or developer. They build your website. You pay them.
        They disappear.
      </p>
      <p>
        Three months later, your opening hours are wrong. Your staff photos are
        from 2019. A service you offer is no longer available, but it&apos;s
        still on the website.
      </p>
      <p>
        Your customers see this. They think: &ldquo;This business isn&apos;t
        serious. They don&apos;t care.&rdquo;
      </p>
      <p>A neglected website is worse than no website at all.</p>
      <p>
        That&apos;s why ongoing support matters. Your website needs someone
        checking in regularly: updating information, fixing broken links, keeping
        it current.
      </p>

      <h2>3. Not Thinking About What Your Customers Actually Need</h2>
      <p>
        Business owners often build websites for themselves, not their customers.
      </p>
      <p>
        They focus on how clever the design is. Or how many animations there
        are. Or how much they paid for it.
      </p>
      <p>
        But your customers don&apos;t care about any of that. They want to know:
      </p>
      <ul>
        <li>Can you solve my problem?</li>
        <li>Are you trustworthy?</li>
        <li>Can I easily contact you?</li>
        <li>What do you cost?</li>
      </ul>
      <p>
        If your website doesn&apos;t answer these questions, it fails.
        Doesn&apos;t matter how pretty it is.
      </p>

      <h2>4. Building Sites That Don&apos;t Work on Mobile</h2>
      <p>
        It&apos;s 2026. 60% of web searches happen on mobile phones.
      </p>
      <p>
        If your website doesn&apos;t work well on a phone, you&apos;re losing
        three out of five potential customers before they even see what you do.
      </p>
      <p>
        Yet I still see websites that are barely usable on mobile. Buttons that
        are too small. Text that doesn&apos;t resize. Images that don&apos;t
        fit.
      </p>
      <p>
        This isn&apos;t a nice-to-have. It&apos;s essential. Your website must
        work beautifully on phones.
      </p>

      <h2>5. Ignoring Google Business Profile</h2>
      <p>
        You build a beautiful website. But you don&apos;t link it to your Google
        Business Profile. You don&apos;t keep your Google information up to
        date.
      </p>
      <p>
        So when people search &ldquo;dental practice near me&rdquo; or
        &ldquo;gym in Redcar,&rdquo; they don&apos;t find you.
      </p>
      <p>Your website exists, but it&apos;s invisible.</p>
      <p>
        I worked with a business owner recently who had spent &pound;3,000 on a
        website but hadn&apos;t set up a Google Business Profile. They were
        missing out on 80% of potential customers.
      </p>
      <p>
        Your Google Business Profile is often the first place people look. If
        it&apos;s not linked to your website, if the information is outdated,
        you&apos;re leaving money on the table.
      </p>

      <h2>The Pattern</h2>
      <p>
        These five mistakes all have something in common: they&apos;re born from
        not understanding that a website is a business tool, not a vanity
        project.
      </p>
      <p>A good website does one thing: it brings in customers.</p>
      <p>
        Everything else, the design, the animations, the number of pages,
        matters only if it serves that goal.
      </p>
      <p>
        At Digital Frontera, we keep that simple. We build websites that work.
        We keep them updated. We make sure they&apos;re easy to find on Google.
        And we make sure everything is focused on what your customers actually
        need.
      </p>
      <p>That&apos;s how websites bring in business.</p>
    </>
  );
}

function WebsiteRedesignChecklist() {
  return (
    <>
      <h2>Question 1: What Problem Am I Trying to Solve?</h2>
      <p>
        This is the most important question, and most business owners skip it.
      </p>
      <p>Are you redesigning because:</p>
      <ul>
        <li>Your website is outdated and looks unprofessional?</li>
        <li>It&apos;s not bringing in leads?</li>
        <li>It&apos;s slow or broken on mobile?</li>
        <li>You&apos;re not getting enough customers?</li>
        <li>It&apos;s just old?</li>
      </ul>
      <p>
        Different problems need different solutions. If your website is fast and
        functional but just looks dated, you need a design refresh. If it&apos;s
        not bringing in customers, you might need a strategy change, not just a
        new design.
      </p>
      <p>
        Know what you&apos;re actually fixing. Otherwise, you&apos;ll spend
        money and still have the same problem.
      </p>

      <h2>Question 2: Who Are My Actual Customers?</h2>
      <p>
        Before you design anything, understand who you&apos;re designing for.
      </p>
      <p>
        Not what you think sounds good. Not what impresses you. What your
        customers need.
      </p>
      <p>
        Are they looking for speed? Reliability? Trustworthiness? A sense of
        community? Easy checkout?
      </p>
      <p>
        Build for your customers, not for yourself. A gym&apos;s website should
        feel energetic and motivating. A dental practice&apos;s website should
        feel calm and professional. A contractor&apos;s website should feel
        competent and solid.
      </p>
      <p>
        If you design for yourself, it won&apos;t resonate with the people who
        actually visit.
      </p>

      <h2>Question 3: What&apos;s My Main Goal?</h2>
      <p>What do you want visitors to do?</p>
      <ul>
        <li>Call you?</li>
        <li>Email you?</li>
        <li>Buy something?</li>
        <li>Book an appointment?</li>
        <li>Sign up for a newsletter?</li>
        <li>Fill out a form?</li>
      </ul>
      <p>Pick one main goal. Then design everything around making that easy.</p>
      <p>
        Too many websites try to do everything. Visitors get confused. They
        leave.
      </p>
      <p>
        A focused website with one clear goal outperforms a website that tries
        to be all things to all people.
      </p>

      <h2>Question 4: What&apos;s My Budget? And Am I Prepared for Ongoing Costs?</h2>
      <p>
        You can get a cheap website for &pound;500. You can spend &pound;5,000.
        You can spend &pound;20,000.
      </p>
      <p>
        But here&apos;s what matters more than the initial cost: what happens
        after launch.
      </p>
      <p>
        A website needs hosting, security updates, content maintenance, and
        monitoring. Most business owners underestimate this cost.
      </p>
      <p>
        You could try to handle it yourself. You could hire a freelancer. Or you
        could work with an agency that handles it all.
      </p>
      <p>
        The point: budget for maintenance. Don&apos;t expect it to be free or
        cheap. And make sure you know what&apos;s included.
      </p>

      <h2>Question 5: Who Will Actually Maintain This After Launch?</h2>
      <p>This is where most websites fail.</p>
      <p>
        You launch your website. The designer disappears. Months pass. Your
        opening hours change, but the website doesn&apos;t. You run a promotion,
        but there&apos;s no way to announce it. A photo is outdated, but you
        don&apos;t know how to change it.
      </p>
      <p>
        Before you build, decide: who&apos;s responsible for keeping this alive?
      </p>
      <p>Is it you? Do you have the skills and time?</p>
      <p>Is it someone on your team? Do they have capacity?</p>
      <p>Or do you hire someone to do it for you?</p>
      <p>
        This decision matters as much as the design itself.
      </p>
    </>
  );
}

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();
  const { prev, next } = getAdjacentPosts(slug);

  return (
    <>
      <section className="pt-24 pb-12 md:pt-32 md:pb-20 px-6 md:px-10">
        <div className="max-w-[800px] mx-auto">
          <Link
            href="/blog"
            className="text-muted text-xs tracking-[0.15em] uppercase hover:text-accent transition-colors duration-300 inline-flex items-center gap-2 mb-10 block"
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 16 16"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <path d="M13 8H3M7 4L3 8l4 4" />
            </svg>
            Back to blog
          </Link>

          <span className="text-muted text-xs tracking-[0.15em] uppercase block mb-4">
            {post.date}
          </span>
          <h1 className="font-heading text-[2rem] md:text-[3rem] lg:text-[3.5rem] font-normal leading-[1.1] tracking-[-0.02em] mb-10">
            {post.title}
          </h1>

          {heroImages[slug] && (
            <div className="relative w-full aspect-[16/9] mb-12 overflow-hidden">
              <Image
                src={heroImages[slug].src}
                alt={heroImages[slug].alt}
                fill
                className="object-cover"
                sizes="(max-width: 800px) 100vw, 800px"
                priority
              />
            </div>
          )}

          <article className="prose-blog space-y-6 text-muted text-base leading-[1.8] [&_h2]:text-foreground [&_h2]:font-heading [&_h2]:text-[1.5rem] [&_h2]:md:text-[1.75rem] [&_h2]:leading-[1.2] [&_h2]:tracking-[-0.02em] [&_h2]:mt-12 [&_h2]:mb-4 [&_ul]:space-y-2 [&_ul]:pl-6 [&_ul]:list-disc [&_ul_li]:text-muted [&_strong]:text-foreground [&_em]:text-accent [&_em]:italic">
            <PostContent slug={slug} />
          </article>

          <div className="mt-16 pt-8 border-t border-border">
            <p className="text-muted text-sm mb-4">
              Ready to fix your website?
            </p>
            <Link
              href="/contact"
              className="text-accent text-sm font-body tracking-wider uppercase inline-flex items-center gap-2 hover:text-foreground transition-colors duration-300"
            >
              Get in touch
              <svg
                width="14"
                height="14"
                viewBox="0 0 16 16"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <path d="M3 8h10M9 4l4 4-4 4" />
              </svg>
            </Link>
          </div>

          {(prev || next) && (
            <div className="mt-12 pt-8 border-t border-border grid grid-cols-2 gap-8">
              <div>
                {prev && (
                  <Link href={`/blog/${prev.slug}`} className="group block">
                    <span className="text-muted text-xs tracking-[0.15em] uppercase block mb-2">
                      Previous
                    </span>
                    <span className="font-heading text-base md:text-lg leading-[1.3] tracking-[-0.02em] group-hover:text-accent transition-colors duration-300">
                      {prev.title}
                    </span>
                  </Link>
                )}
              </div>
              <div className="text-right">
                {next && (
                  <Link href={`/blog/${next.slug}`} className="group block">
                    <span className="text-muted text-xs tracking-[0.15em] uppercase block mb-2">
                      Next
                    </span>
                    <span className="font-heading text-base md:text-lg leading-[1.3] tracking-[-0.02em] group-hover:text-accent transition-colors duration-300">
                      {next.title}
                    </span>
                  </Link>
                )}
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
