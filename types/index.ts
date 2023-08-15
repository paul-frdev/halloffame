export type Language = 'en' | 'uk' | 'sp';

export type Event = {
  id: number;
  src: string;
  title: string;
  description: string;
};


export type Subscribe = {
  name: string;
  email: string;
}