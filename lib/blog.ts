export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
}

export const posts: BlogPost[] = [
  {
    slug: "website-redesign-checklist",
    title: "The Website Redesign Checklist: Questions to Ask Before Starting",
    date: "11 April 2026",
    excerpt:
      "A five-question framework to help business owners avoid costly mistakes before beginning a website redesign.",
  },
  {
    slug: "5-things-teesside-wrong",
    title: "5 Things Teesside Businesses Get Wrong About Websites",
    date: "11 March 2026",
    excerpt:
      "The same web mistakes keep costing Teesside businesses customers and revenue. Here are the five biggest ones.",
  },
  {
    slug: "why-your-website-costs-money",
    title: "Why Your Website Is Costing You Money",
    date: "18 February 2026",
    excerpt:
      "Your website isn't neutral. It's either bringing in customers or pushing them away. There's no middle ground.",
  },
];

export function getPost(slug: string): BlogPost | undefined {
  return posts.find((p) => p.slug === slug);
}

export function getAllSlugs(): string[] {
  return posts.map((p) => p.slug);
}

export function getAdjacentPosts(slug: string): {
  prev: BlogPost | null;
  next: BlogPost | null;
} {
  const index = posts.findIndex((p) => p.slug === slug);
  return {
    prev: index < posts.length - 1 ? posts[index + 1] : null,
    next: index > 0 ? posts[index - 1] : null,
  };
}
