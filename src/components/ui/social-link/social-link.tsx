// import React from 'react';

// interface SocialLinkProps {
//   name: string;
//   link: string;
//   ariaLabel: string;
//   IconComponent: React.FC<React.SVGProps<SVGSVGElement>>;
//   section?: string;
// }

// export const SocialLink: React.FC<SocialLinkProps> = ({
//   name,
//   link,
//   ariaLabel,
//   IconComponent,
//   section,
// }) => (
//   <li className="flex items-center">
//     <a
//       href={link}
//       aria-label={ariaLabel}
//       target="_blank"
//       rel="noopener noreferrer"
//       className="flex items-center space-x-2"
//     >
//       {IconComponent && <IconComponent className="w-6 h-6" />}
//       {section === 'contacts' && <span>{link}</span>}
//     </a>
//   </li>
// );
