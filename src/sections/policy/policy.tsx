import { StructuredText, renderNodeRule } from 'react-datocms';
import {
  isHeading,
  isParagraph,
  isLink,
  isList,
  isListItem,
  isRoot,
} from 'datocms-structured-text-utils';
import { PolicyProps } from './types';
import Link from 'next/link';

const renderOptions = [
  renderNodeRule(isHeading, ({ children, key }) => {
    return (
      <h2 key={key} className="section-subtitle mt-[30px] xl:mt-[60px] mb-5 md:mb-7">
        {children}
      </h2>
    );
  }),
  renderNodeRule(
    isParagraph,
    ({ adapter: { renderNode }, node, children, key, ancestors }) => {
      if (isRoot(ancestors[0])) {
        return renderNode(
          'p',
          {
            key,
            className: 'leading-[1.5] text-xs md:text-base mb-[18px] md:mb-6',
          },
          children
        );
      } else {
        return renderNode(
          'p',
          {
            key,
            className: 'leading-[1.5] text-xs md:text-base',
          },
          children
        );
      }
    }
  ),
  renderNodeRule(isLink, ({ node, children, key }) => {
    const isEmail = node.url.includes('@');

    if (isEmail) {
      return (
        <a
          key={key}
          href={node.url}
          className="text-text3 hover:text-buttonClickPink focus:text-buttonClickPink"
        >
          {children}
        </a>
      );
    } else {
      return (
        <Link
          key={key}
          href="/"
          className="text-text3 hover:text-buttonClickPink focus:text-buttonClickPink"
        >
          {children}
        </Link>
      );
    }
  }),
  renderNodeRule(isList, ({ children, key }) => {
    return (
      <ul key={key} className="mb-[18px] md:mb-6">
        {children}
      </ul>
    );
  }),
  renderNodeRule(isListItem, ({ children, key }) => {
    return (
      <li key={key} className="custom-list-item ml-[18px] md:ml-6">
        {children}
      </li>
    );
  }),
];

export const Policy = ({ policyData }: PolicyProps) => {
  return (
    <section className="pt-[129px] md:pt-[134px] xl:pt-[164px] pb-[50px] xl:pb-20">
      <div className="container xl:px-[135px]">
        <h1 className="section-title text-left mb-[30px] xl:mb-16 md:text-[48px] md:leading-[1.1]">
          {policyData.privacyPolicyPage.title}
        </h1>
        <StructuredText
          data={policyData.privacyPolicyPage.text}
          customNodeRules={renderOptions}
        />
      </div>
    </section>
  );
};
