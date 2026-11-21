export interface Protection {
  icon: string;
  title: string;
  description: string;
  detail: string;
}

export const protections: Protection[] = [
  {
    icon: 'ShieldCheck',
    title: 'Pre-existing Conditions',
    description:
      'Insurance companies cannot deny coverage or charge more due to pre-existing medical conditions.',
    detail:
      'Before the ACA, insurers could refuse to cover you—or drop you—because of conditions like asthma, diabetes, or cancer. Now every Marketplace plan must cover you regardless of health history.',
  },
  {
    icon: 'Users',
    title: 'Young Adult Coverage',
    description:
      "Children can stay on their parents' health insurance plan until they turn 26 years old.",
    detail:
      'This applies whether or not you are married, living with your parents, in school, or financially dependent. It gives young adults a bridge between school and employer-sponsored coverage.',
  },
  {
    icon: 'HeartPulse',
    title: 'Essential Health Benefits',
    description:
      'All Marketplace plans must cover core services like emergency care, mental health, preventive care, and maternity care.',
    detail:
      'The ten essential health benefits include: ambulatory services, emergency care, hospitalization, maternity and newborn care, mental health and substance use treatment, prescription drugs, rehabilitative services, lab tests, preventive and wellness services, and pediatric care (including dental and vision).',
  },
  {
    icon: 'Infinity',
    title: 'No Lifetime Caps',
    description:
      'Insurers are barred from placing annual or lifetime dollar limits on essential care.',
    detail:
      'In the past, a serious illness could exhaust a plan\u2019s lifetime cap, leaving families without coverage when they needed it most. The ACA eliminated these limits on essential health benefits.',
  },
];

export interface EnrollmentPoint {
  icon: string;
  label: string;
  value: string;
  description: string;
}

export const enrollmentInfo: EnrollmentPoint[] = [
  {
    icon: 'CalendarClock',
    label: 'Open Enrollment Deadline',
    value: 'December 15',
    description:
      'Enroll by December 15 for coverage starting January 1. Miss the window and you may have to wait until next year—unless you qualify for a Special Enrollment Period.',
  },
  {
    icon: 'CalendarCheck',
    label: 'Coverage Start Date',
    value: 'January 1, 2027',
    description:
      'Plans purchased during open enrollment take effect on January 1, giving you a full year of protected, ACA-compliant coverage.',
  },
  {
    icon: 'LifeBuoy',
    label: 'Special Enrollment',
    value: 'Qualifying Life Events',
    description:
      'Losing job-based coverage, moving, getting married, having a baby, or losing Medicaid eligibility can trigger a 60-day Special Enrollment Period outside the standard window.',
  },
];

export interface EligibilityItem {
  icon: string;
  title: string;
  requirement: string;
}

export const eligibility: EligibilityItem[] = [
  {
    icon: 'MapPin',
    title: 'Residency',
    requirement: 'You must live in the United States.',
  },
  {
    icon: 'BadgeCheck',
    title: 'Citizenship',
    requirement:
      'You must be a U.S. citizen or a legally present noncitizen.',
  },
  {
    icon: 'Ban',
    title: 'Not on Medicare',
    requirement: 'You must not be enrolled in Medicare.',
  },
];

export interface FAQItem {
  question: string;
  answer: string;
}

export const faqs: FAQItem[] = [
  {
    question: 'What is Obamacare, officially?',
    answer:
      'Obamacare is the informal name for the Affordable Care Act (ACA), formally titled the Patient Protection and Affordable Care Act, signed into law on March 23, 2010. It reforms the U.S. health insurance market to expand coverage, protect consumers, and regulate private insurance plans.',
  },
  {
    question: 'Where do I buy an ACA plan?',
    answer:
      'Consumers buy ACA-compliant private health insurance through state or federal exchanges like HealthCare.gov. Depending on your state, you may use the federal Marketplace or a state-run exchange.',
  },
  {
    question: 'Can I be denied for a pre-existing condition?',
    answer:
      'No. Insurance companies cannot deny coverage or charge you more because of pre-existing medical conditions. This protection applies to all Marketplace plans.',
  },
  {
    question: 'What are essential health benefits?',
    answer:
      'All Marketplace plans must cover ten categories of essential health benefits, including emergency care, mental health services, preventive care (like annual screenings and vaccines), prescription drugs, and maternity care.',
  },
  {
    question: 'Do I qualify for financial help?',
    answer:
      'Individuals and families meeting specific income thresholds may qualify for premium tax credits or cost-sharing reductions that lower monthly premiums and out-of-pocket costs. Use the subsidy estimator on this page to get a rough idea.',
  },
  {
    question: 'What happens if I miss the December 15 deadline?',
    answer:
      'If you miss open enrollment, you generally have to wait until the next enrollment period. However, qualifying life events—such as losing job-based coverage, moving, or having a baby—can trigger a 60-day Special Enrollment Period.',
  },
  {
    question: 'Can my child stay on my plan?',
    answer:
      "Yes. Children can remain on their parents' health insurance plan until they turn 26, regardless of marital, student, or financial-dependency status.",
  },
  {
    question: 'Are there annual or lifetime limits on coverage?',
    answer:
      'No. Insurers are barred from placing annual or lifetime dollar limits on essential health benefits, so a serious illness cannot exhaust your coverage.',
  },
];

export interface Stat {
  value: string;
  label: string;
  description: string;
}

export const stats: Stat[] = [
  {
    value: '2010',
    label: 'Signed Into Law',
    description: 'The ACA was signed on March 23, 2010.',
  },
  {
    value: '26',
    label: 'Years of Coverage',
    description: 'Children can stay on a parent\u2019s plan until age 26.',
  },
  {
    value: '10',
    label: 'Essential Benefits',
    description: 'Every plan must cover ten core health benefit categories.',
  },
  {
    value: 'Dec 15',
    label: 'Enrollment Deadline',
    description: 'Enroll by Dec 15 for January 1 coverage start.',
  },
];

export interface NewsArticle {
  id: string;
  title: string;
  source: string;
  date: string;
  excerpt: string;
  url: string;
  category: 'Enrollment' | 'Policy' | 'Subsidies' | 'Legal';
}

export const newsArticles: NewsArticle[] = [
  {
    id: 'kff-2027-watch',
    title: '9 Things to Watch for the 2027 ACA Open Enrollment Period',
    source: 'KFF',
    date: 'November 2026',
    excerpt:
      'The ACA Marketplace 2027 Open Enrollment period starts November 1, 2026. After enhanced premium tax credits expired and new regulations took effect, enrollment fell 12% to 19.2 million. States like New Mexico are stepping in with state-funded subsidies to offset the loss.',
    url: 'https://www.kff.org/affordable-care-act/9-things-to-watch-for-the-2027-aca-open-enrollment-period',
    category: 'Enrollment',
  },
  {
    id: 'medicare-rights-plunge',
    title: 'ACA Marketplace Numbers Plunging as Open Enrollment Period Nears',
    source: 'Medicare Rights Center',
    date: 'October 22, 2026',
    excerpt:
      'Over 4.6 million fewer people are enrolled in ACA plans as of June 2026 compared to the prior year. Congress declined to extend enhanced ACA subsidies, undermining access and affordability for millions of Americans.',
    url: 'https://www.medicarerights.org/medicare-watch/2026/10/22/aca-marketplace-numbers-plunging-as-open-enrollment-period-nears',
    category: 'Subsidies',
  },
  {
    id: 'aca-signups-guide',
    title: 'Hobbling Towards Enrollment: 2027 ACA Open Enrollment Guide',
    source: 'ACA Signups',
    date: 'November 9, 2026',
    excerpt:
      'A detailed look at what to expect for 2027 open enrollment starting November 1, including state-by-state variations, changed subsidy structures, and how the expiration of enhanced tax credits is impacting plan selections nationwide.',
    url: 'https://acasignups.net/26/11/09/hobbling-towards-enrollment-my-2027-aca-open-enrollment-guide-part-3',
    category: 'Enrollment',
  },
  {
    id: 'supreme-court-tax-credits',
    title: 'Supreme Court Upholds Obamacare Tax Credits in 6-3 Ruling',
    source: 'Ballotpedia',
    date: 'Historical Ruling',
    excerpt:
      'The U.S. Supreme Court ruled 6-3 to uphold tax credits for Americans purchasing insurance through the federal exchange, preserving affordability for millions in states that use the federal Marketplace rather than running their own.',
    url: 'https://ballotpedia.org/Supreme_Court_rules_on_Obamacare_tax_credits',
    category: 'Legal',
  },
];

export interface CryptoOption {
  id: string;
  name: string;
  symbol: string;
  address: string;
  network: string;
  color: string;
  bgColor: string;
}

export const cryptoOptions: CryptoOption[] = [
  {
    id: 'bitcoin',
    name: 'Bitcoin',
    symbol: 'BTC',
    address: 'bc1q3xjzylatzlacm9clruepv22pqm5tzkjym4ynn5',
    network: 'Bitcoin Network',
    color: '#f7931a',
    bgColor: '#f7931a15',
  },
  {
    id: 'ethereum',
    name: 'Ethereum',
    symbol: 'ETH',
    address: '0xEf80999E7D141f7A9158C4333A6a906E6776e147',
    network: 'ERC-20 / Ethereum',
    color: '#627eea',
    bgColor: '#627eea15',
  },
  {
    id: 'solana',
    name: 'Solana',
    symbol: 'SOL',
    address: 'E8MKbuvjXEKX8zgjhyNuWYoTBmxGCjkdNx8uYdRBuV7t',
    network: 'Solana Network',
    color: '#14f195',
    bgColor: '#14f19515',
  },
];

export const bankInfo = {
  organization: 'The Barack Obama Foundation',
  taxStatus: '501(c)(3) non-profit organization',
  ein: '46-4950751',
  mailTo: 'The Barack Obama Foundation',
  mailingAddress: 'PO Box 779056, Chicago, IL 60677-9056',
  phone: '844-310-0900',
  email: 'donate@obama.org',
  website: 'https://www.obama.org',
  visitAddress: '6001 S. Stony Island Ave., Chicago, IL',
};

export type BlogPost = {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  category: 'Enrollment' | 'Policy' | 'Subsidies' | 'Preventive Care' | 'Community';
  author: string;
  date: string;
  readTime: string;
  body: string[];
  source: { label: string; url: string };
  image?: string;
};

export const blogPosts: BlogPost[] = [
  {
    id: 'blog-1',
    slug: 'aca-open-enrollment-2027-deadlines',
    title: 'ACA Open Enrollment for 2027: Key Dates and What to Know',
    excerpt:
      'Open enrollment runs November 1, 2026 through January 15, 2027. Enroll by December 15 for coverage starting January 1 — here is how the window works and what changed this year.',
    category: 'Enrollment',
    author: 'Obamacare.vote Editorial',
    date: 'November 12, 2026',
    readTime: '4 min read',
    image: '/enrollment-form.webp',
    body: [
      'For 2027 coverage, the federal Marketplace open enrollment window runs from November 1, 2026 through January 15, 2027. If you enroll by December 15, 2026, your coverage begins January 1, 2027. Plans selected between December 16 and January 15 take effect February 1, 2027.',
      'A federal rule finalized in 2025 shortened the open enrollment period starting in the fall of 2026. The previous extended window has been rolled back, so the December 15 cutoff for January 1 coverage matters more than ever.',
      'These deadlines apply to new applicants and anyone changing plans. If you are auto-re-enrolling, you still have a chance to switch plans during the window — and you should, since plan pricing and networks change every year.',
      'If you owe a first premium, pay it by your insurer\u2019s deadline to activate coverage. A plan selection is not the same as active coverage.',
    ],
    source: {
      label: 'Marketplace Insurance Advisors',
      url: 'https://marketplaceinsuranceadvisors.com/aca-open-enrollment-2027',
    },
  },
  {
    id: 'blog-2',
    slug: 'subsidy-cliff-returns-2026',
    title: 'The Subsidy Cliff Is Back: What It Means for 2026 Coverage',
    excerpt:
      'Enhanced ACA subsidies expired at the end of 2025. With the 400% FPL cliff restored, 23.1 million people selected plans for 2026 — down from 24.3 million the year before.',
    category: 'Subsidies',
    author: 'Obamacare.vote Editorial',
    date: 'November 8, 2026',
    readTime: '5 min read',
    image: '/family-health-consultation.webp',
    body: [
      'The enhanced premium tax credits that expanded subsidy eligibility since 2021 expired at the end of 2025. For 2026 coverage, the "subsidy cliff" has returned — meaning federal subsidies are no longer available to households with income above 400% of the 2025 federal poverty level.',
      'For applicants under that threshold, subsidies still help, but households are expected to pay a larger share of their own premiums than they did during the enhanced subsidy years.',
      'Of the nearly 23.1 million people who selected plans during open enrollment for 2026 coverage, 20 million — about 87% — were receiving premium subsidies. That share is similar to 2021, before the enhancements were put in place.',
      'The drop from 24.3 million enrollees for 2025 to 23.1 million for 2026 was driven primarily by higher net premiums after the enhancements ended. Some states offer their own subsidies that soften the impact.',
    ],
    source: {
      label: 'healthinsurance.org',
      url: 'https://www.healthinsurance.org/obamacare/subsidy-calculator',
    },
  },
  {
    id: 'blog-3',
    slug: 'house-votes-to-revive-subsidies',
    title: 'House Votes to Revive Enhanced ACA Subsidies; Senate Action Pending',
    excerpt:
      'In January 2026 the House passed a three-year extension of enhanced ACA subsidies 230–196, with 17 Republicans joining. The Senate has not yet acted on the measure.',
    category: 'Policy',
    author: 'Obamacare.vote Editorial',
    date: 'January 20, 2026',
    readTime: '3 min read',
    image: '/community-health-center.webp',
    body: [
      'The House of Representatives voted in January 2026 to revive the enhanced ACA premium subsidies, passing a three-year extension 230 to 196. Seventeen Republicans joined Democrats in support.',
      'The Senate has not yet taken up the measure. Competing proposals in December 2025 failed to reach the 60-vote threshold needed to advance, leaving the enhancements expired going into 2026 coverage.',
      'If the Senate acts and the extension is signed into law, subsidy eligibility would expand again — but any change would apply prospectively and would not automatically refund higher premiums paid earlier in the year.',
      'Watch for state-level fixes in the meantime. Several states have proposed or enacted their own subsidies to bridge the gap left by the expired federal enhancements.',
    ],
    source: {
      label: 'Take Command Health',
      url: 'https://www.takecommandhealth.com/blog/aca-2026-updates-in-review',
    },
  },
  {
    id: 'blog-4',
    slug: 'transparency-in-coverage-updates',
    title: 'New Transparency in Coverage Rules Finalized October 2026',
    excerpt:
      'HHS, DOL, and Treasury issued updated Transparency in Coverage regulations on October 5, 2026 — building on requirements that have been in place since 2022.',
    category: 'Policy',
    author: 'Obamacare.vote Editorial',
    date: 'October 18, 2026',
    readTime: '4 min read',
    image: '/medical-stethoscope.webp',
    body: [
      'On October 5, 2026, the Departments of Health and Human Services, Labor, and Treasury announced updated Transparency in Coverage (TiC) regulations. The new rules build on requirements health plans have faced since 2022.',
      'The October 2026 regulations do not create an entirely new framework — they refine existing machine-readable file requirements, strengthen public disclosure obligations, and clarify how plans must report negotiated rates and out-of-network allowed amounts.',
      'For consumers, the practical effect is better access to pricing data before care. Use the transparency tools your plan is required to publish to compare costs for planned services.',
      'The Word & Brown analysis notes the rules continue a multi-year evolution: TiC is not new, but each iteration tightens enforcement and expands what must be disclosed.',
    ],
    source: {
      label: 'Word & Brown',
      url: 'https://www.wordandbrown.com/NewsPost/The-ACA-Is-Still-Evolving-A-Fresh-Look-at-Transpar',
    },
  },
  {
    id: 'blog-5',
    slug: 'preventive-care-no-cost-2026',
    title: 'Preventive Care Still Covered at No Cost Under ACA Plans in 2026',
    excerpt:
      'Colonoscopies, mammograms, cardiovascular screenings, annual wellness visits, and recommended vaccinations remain covered with no deductible or copay when you use in-network providers.',
    category: 'Preventive Care',
    author: 'Obamacare.vote Editorial',
    date: 'October 6, 2026',
    readTime: '3 min read',
    image: '/stethoscope-care.webp',
    body: [
      'One of the most popular ACA protections — no-cost preventive care — remains in force for 2026. ACA-compliant plans must cover a range of preventive services without charging a deductible or copay, as long as you use in-network providers.',
      'Covered services include colonoscopies, mammograms, cardiovascular screenings, annual wellness visits, vaccinations (including flu shots), well-child visits, and certain birth control and family planning services.',
      'Preventive care helps catch health issues early, when they are often easier and less costly to treat. Skipping these visits because of cost concerns should not be necessary on an ACA plan.',
      'Always confirm your provider is in-network before the visit. Out-of-network preventive care is not guaranteed the same no-cost treatment.',
    ],
    source: {
      label: 'ReferralMD',
      url: 'https://referralmd.com/the-affordable-care-act-in-2026',
    },
  },
  {
    id: 'blog-6',
    slug: 'democrats-crypto-policy-is-more-complicated-than-you-think',
    title: 'Democrats and Crypto: Not Anti-Innovation, but Focused on Guardrails',
    excerpt:
      'Democratic lawmakers are divided on crypto policy, but their public record is more nuanced than “for” or “against”: many support responsible digital-asset innovation while pushing for consumer protection, oversight, and ethics rules.',
    category: 'Policy',
    author: 'Obamacare.vote Editorial',
    date: 'November 17, 2026',
    readTime: '5 min read',
    image: '/images.jpg',
    body: [
      'The short answer is that Democrats are not uniformly against cryptocurrency. The party has no single crypto position shared by every elected official, and lawmakers have taken different approaches to stablecoins, exchanges, decentralized finance, mining, and digital payments. But the broad Democratic argument is increasingly clear: digital assets can have a place in the economy if the rules protect consumers and keep markets accountable.',
      'That position is visible in congressional work on market-structure legislation. Democratic lawmakers have proposed or supported ideas that would give consumers stronger protections, including clearer disclosures, safeguards for customer assets, proof-of-reserves requirements, anti-front-running rules, and more resources for financial regulators. Those proposals do not reject crypto; they aim to make participation safer and give legitimate businesses more predictable rules.',
      'The disagreement is over how those rules should work and who should enforce them. Some Democrats worry that broad exemptions could leave investors exposed to fraud, conflicts of interest, market manipulation, and illicit finance. Others argue that a workable framework would help responsible companies operate in the United States instead of pushing innovation overseas. This is why Democratic votes and statements can look inconsistent: support for the technology does not always mean support for a particular bill.',
      'Democrats have also emphasized that public officials and political campaigns should not receive special treatment. Ethics provisions, conflict-of-interest rules, and transparency around crypto-related political spending are part of the debate. Those concerns are about accountability and concentrated influence, not necessarily opposition to blockchain technology or digital assets themselves.',
      'The practical takeaway is simple: describing Democrats as “anti-crypto” leaves out too much. A more accurate description is that many Democratic policymakers support responsible innovation while favoring stronger consumer protections, regulator authority, and ethics standards. The details will continue to change as Congress debates market structure and stablecoin legislation, so readers should look at the text of each proposal rather than rely on party labels alone.',
    ],
    source: {
      label: 'Congress.gov, House digital-assets hearing record',
      url: 'https://www.congress.gov/event/119th-congress/house-event/LC75086/text',
    },
  },
  {
    id: 'blog-7',
    slug: 'remembering-sunny-obama',
    title: 'Remembering Sunny Obama, the Family Dog Who Stole America’s Hearts',
    excerpt:
      'The Obama family announced that Sunny, their beloved Portuguese Water Dog, died on September 16, 2026, at age 13.',
    category: 'Community',
    author: 'Obamacare.vote Editorial',
    date: 'September 16, 2026',
    readTime: '3 min read',
    image: '/HSWRgFsaMAAIuxQ.jpg',
    body: [
      'The Obama family announced on September 16, 2026, that Sunny, their beloved Portuguese Water Dog, had died at age 13. Sunny joined the family in 2013 and became a familiar presence during their years in the White House and beyond.',
      'Known for her playful energy and affectionate personality, Sunny was often photographed with the Obama family and became one of the most recognizable presidential pets in modern American life.',
      'The family remembered Sunny as a joyful companion who brought warmth, laughter, and comfort to their home. Her story also reflects the special place that family pets hold in public and private life alike.',
    ],
    source: {
      label: 'ABC News',
      url: 'https://abcnews.com/GMA/Culture/barack-michelle-obama-announce-death-cherished-dog-sunny/story?id=136496594',
    },
  },
];

