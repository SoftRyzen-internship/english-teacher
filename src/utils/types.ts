export interface AnimationHeroProps {
  elements: React.MutableRefObject<HTMLElement | null>[];
  isDesktop: boolean;
}

export interface OptionsCardProps {
  card: HTMLElement;
  index: number;
}
