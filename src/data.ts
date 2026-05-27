import { EvidenceItem, FaqItem, MissionItem } from './types';

export const MISSION_ITEMS: MissionItem[] = [
  {
    id: 'm1',
    num: '01',
    title: 'Ask the questions nobody wants to ask.',
    body: "Is AI making us lonelier? Are our kids worse off? Is the information we consume more or less trustworthy than it was? These are human questions. They deserve serious attention."
  },
  {
    id: 'm2',
    num: '02',
    title: 'Cut through the noise.',
    body: "The loudest voices want you excited or afraid — and primarily, they want you to listen to them. We're interested in something harder to find: grounded conversation about what is actually changing."
  },
  {
    id: 'm3',
    num: '03',
    title: 'Build a community that thinks for itself.',
    body: "Not confined to researchers, tech insiders, or journalists. This is for everyone who wants to engage carefully with one of the defining questions of our time: is this good for us?"
  }
];

export const EVIDENCE_ITEMS: EvidenceItem[] = [
  {
    id: 'ev1',
    sourceName: 'Journal of Public Health',
    publisher: 'Springer Nature.',
    sourceUrl: 'https://link.springer.com/article/10.1007/s10389-025-02554-6',
    quote: 'Adults using AI tools for personal conversation weekly showed <span class="accent">markedly worse social disconnectedness</span> than non-users.',
    body: 'A peer-reviewed study comparing self-reported loneliness and social connection outcomes between weekly AI-conversation users and non-users, controlled for age, income, and baseline social activity.'
  },
  {
    id: 'ev2',
    sourceName: 'Gerlich, Societies',
    publisher: 'MDPI, 2025.',
    sourceUrl: 'https://www.mdpi.com/2075-4698/15/1/6',
    quote: 'A <span class="accent">significant negative correlation</span> between frequent AI tool usage and critical thinking abilities, mediated by cognitive offloading.',
    body: 'Researchers tracked how often subjects deferred reasoning tasks to AI assistants and found measurable reductions in independent critical-thinking performance over the study period.'
  },
  {
    id: 'ev3',
    sourceName: 'PMC',
    publisher: 'Adolescent Health & Generative AI.',
    sourceUrl: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC12621494/',
    quote: 'AI tools may <span class="accent">inhibit cognitive development</span> as adolescents rely on AI instead of their own reasoning.',
    body: 'A review of emerging clinical and educational literature on generative AI use among adolescents, warning that habitual reliance during formative years may compound across critical thinking, memory, and emotional regulation.'
  },
  {
    id: 'ev4',
    sourceName: 'SHRM',
    publisher: 'Automation / AI Survey of U.S. workers.',
    sourceUrl: 'https://www.shrm.org/about/press-room/ai-s-wake-up-call--new-shrm-research-reveals-23-2-million-americ',
    quote: 'At least <span class="accent">half</span> of all tasks are already automated in roughly 23.2 million American jobs.',
    body: 'A survey of over 20,000 U.S. workers found that automation has already crossed the half-of-tasks threshold for a substantial share of the workforce — well before headline-grabbing roles begin to disappear.'
  }
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    id: 'faq1',
    question: 'What is AI Skepticism?',
    answer: 'AI Skepticism is a community for people who want to think carefully about what artificial intelligence and digital technology are actually doing to human life. The real, everyday stuff — your job, your kids, your attention span, your relationships — is important and underserved in the noise of hype and investment.'
  },
  {
    id: 'faq2',
    question: 'How do you avoid becoming just another echo chamber?',
    answer: "Because we do not start with a conclusion. We ask the question: is this good for us? Sometimes the answer is yes, sometimes no, and sometimes it depends. We welcome people who've been hurt by tech, people who work in tech, and everyone in between. The only thing we don't welcome is certainty that shuts down conversation."
  },
  {
    id: 'faq3',
    question: 'How do you handle disagreement within the community?',
    answer: "We assume the best in others, even when it seems naive. You can think AI is mostly harmless or that it is the plague and still belong here. Both of these perspectives are as important as the other. What we ask is that you extend the same curiosity to other people's experiences that you'd want extended to yours — and that you engage with evidence, not just feelings."
  },
  {
    id: 'faq4',
    question: 'Do I need a technical background to contribute?',
    answer: 'No. Lol.'
  },
  {
    id: 'faq5',
    question: 'What narratives do you challenge most often?',
    answer: 'Loneliness and social connection. Children and development. Work and economic displacement. Attention and critical thinking. Truth and misinformation. And things that have not yet been funnelled into a topic.'
  },
  {
    id: 'faq6',
    question: 'What can I expect from this community?',
    answer: 'The only agenda is figuring out what\'s actually going on. Expect honest and innocent questions, real research, and people who\'d rather understand something than win an argument. We publish writing, host conversations, and gather in person.'
  }
];
