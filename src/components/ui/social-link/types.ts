export type SocialLinkProps = {
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
  link: string;
  ariaLabel: string;
  displayText?: string;
  section?: string;
}