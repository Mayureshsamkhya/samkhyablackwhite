export interface Article {
    id: number | string;
    slug: string;
    date: string;
    category: string;
    title: string;
    excerpt: string;
    author: {
        name: string;
        role: string;
        avatar?: string;
    };
    readTime: string;
    content?: React.ReactNode; // For now we'll store simple content or just use the component structure in the page
}

export const ARTICLES: Article[] = [
    {
        id: "bloomberg-moment",
        slug: "the-bloomberg-moment-for-private-markets",
        date: "OCT 24, 2025",
        category: "THE MANIFESTO",
        title: "The 'Bloomberg Moment' for Private Markets",
        excerpt: "In 1984, transparency transformed the bond market. Today, it’s coming for Indian venture capital.",
        author: {
            name: "Abhishek Verma",
            role: "Founder"
        },
        readTime: "8 min read",
    },
    {
        id: 1,
        slug: "the-liquidity-illusion",
        date: "OCT 12, 2025",
        category: "MARKET STRUCTURE",
        title: "The Liquidity Illusion",
        excerpt: "Why the next decade of venture capital will be defined not by who can deploy capital, but by who can return it.",
        author: {
            name: "Abhishek Verma",
            role: "Founder"
        },
        readTime: "5 min read",
    },
    {
        id: 2,
        slug: "indias-saas-moment-is-over",
        date: "SEP 28, 2025",
        category: "THESIS",
        title: "India's 'SaaS' Moment is Over. What's Next?",
        excerpt: "Deep tech, defense, and industrial automation are replacing software as the primary drivers of alpha.",
        author: {
            name: "Abhishek Verma",
            role: "Founder"
        },
        readTime: "6 min read",
    },
    {
        id: 3,
        slug: "the-rise-of-the-operator-investor",
        date: "SEP 15, 2025",
        category: "OBSERVATION",
        title: "The Rise of the 'Operator-Investor'",
        excerpt: "Founders are no longer looking for board members. They are looking for co-pilots who have flown the jet before.",
        author: {
            name: "Abhishek Verma",
            role: "Founder"
        },
        readTime: "4 min read",
    },
    {
        id: 4,
        slug: "private-markets-are-pricing-in-a-perfect-landing",
        date: "AUG 30, 2025",
        category: "DATA",
        title: "Private Markets are Pricing in a Perfect Landing",
        excerpt: "Valuations in late-stage private equity have decoupled from public market realities. Here is the data.",
        author: {
            name: "Abhishek Verma",
            role: "Founder"
        },
        readTime: "7 min read",
    },
];
