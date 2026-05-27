export interface EvidenceItem {
  id: string;
  sourceName: string;
  publisher: string;
  sourceUrl: string;
  quote: string;
  body: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export interface MissionItem {
  id: string;
  num: string;
  title: string;
  body: string;
}
