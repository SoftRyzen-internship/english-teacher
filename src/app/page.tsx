import { ScrollButton } from '@/components/ui/scroll-button/scroll-button';
import faq from '@/data/fag.json';

import { Accordion } from '@/components/common/accordion/accordion';

import { Logo } from '@/components/ui/logo/logo';
import { Navigation } from '@/components/ui/navigation/navigation';
import { executeQuery } from '@datocms/cda-client';
import { StructuredText, renderNodeRule } from 'react-datocms';
import {
  isHeading,
  isParagraph,
  isLink,
  isList,
  isListItem,
  isRoot,
} from 'datocms-structured-text-utils';
import React from 'react';
import { query } from '@/api/queries';
import { QueryResult } from '@/api/types';
import { SocialLinks } from '@/components/ui/social-links/social-links';
import { Test } from '@/components/common/test/test';

const renderOptions = [
  renderNodeRule(isHeading, ({ children, key }) => {
    return <h2 key={key}>{children}</h2>;
  }),
  renderNodeRule(isParagraph, ({ children, key }) => {
    return (
      <p key={key} className="text-base leading-6">
        {children}
      </p>
    );
  }),
  renderNodeRule(isLink, ({ node, children, key }) => {
    return (
      <a key={key} href={node.url} className="text-blue-500 underline">
        {children}
      </a>
    );
  }),
  renderNodeRule(isList, ({ node, children, key }) => {
    return (
      <ul key={key} className="list-disc pl-5">
        {children}
      </ul>
    );
  }),
  renderNodeRule(isListItem, ({ children, key }) => {
    return (
      <li key={key} className="mb-2">
        {children}
      </li>
    );
  }),
];

export default async function Home() {
  const token = process.env.DATOCMS_READONLY_TOKEN;

  if (!token) {
    throw new Error('DATOCMS_READONLY_TOKEN is not defined');
  }

  const result: QueryResult = await executeQuery(query, {
    token: token,
  });

  return (
    <main>
      <div className="container">
        <div>
          <h1>{result.privacyPolicyPage.title}</h1>
          <StructuredText
            data={result.privacyPolicyPage.text}
            customNodeRules={renderOptions}
          />
        </div>

        <div>
          {result.teacherSkillsProfile.skillPlate.map((skill) => (
            <div key={skill.id}>
              <p>{skill.number}</p>
              <p>{skill.name}</p>
            </div>
          ))}
        </div>

        <Logo />
        <Navigation />
        <br />
        <ScrollButton borderButton={true} href="contacts">
          Записатись
        </ScrollButton>
        <br />
        <ScrollButton colorButton={true} href="contacts">
          Безплатна консультація
        </ScrollButton>

        <p className="font-montserrat bg-accent1">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab,
          architecto minima. Nihil inventore tempora minus similique eaque ea
          voluptate, laboriosam quis quia molestias deserunt fugiat asperiores
          repellendus molestiae esse eveniet?
        </p>

        <h2 className="section-title">Title h2</h2>
        <h3 className="section-subtitle">Title h3</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab,
          architecto minima. Nihil inventore tempora minus similique eaque ea
          voluptate, laboriosam quis quia molestias deserunt fugiat asperiores
          repellendus molestiae esse eveniet?
        </p>

        <SocialLinks section="footer" />
        <SocialLinks section="contacts" />
        <SocialLinks />
        <Accordion faqs={faq.accordion} />

        <Test />
      </div>
    </main>
  );
}
