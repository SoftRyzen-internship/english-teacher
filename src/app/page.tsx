import { ScrollButton } from '@/components/ui/scroll-button/scroll-button';
import { Logo } from '@/components/ui/logo/logo';
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
      <div className="container font-montserrat">
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
        <br />

        <ScrollButton section="header" href="contacts">
          Записатись
        </ScrollButton>
        <br />
        <ScrollButton section="mobile-menu" href="contacts">
          Записатись
        </ScrollButton>
        <br />
        <ScrollButton section="hero" href="contacts">
          Безплатна консультація
        </ScrollButton>

        <p className="font-montserrat bg-accent1">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab,
          architecto minima. Nihil inventore tempora minus similique eaque ea
          voluptate, laboriosam quis quia molestias deserunt fugiat asperiores
          repellendus molestiae esse eveniet?
        </p>

        <h2>Title h2</h2>
        <h3>Title h3</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab,
          architecto minima. Nihil inventore tempora minus similique eaque ea
          voluptate, laboriosam quis quia molestias deserunt fugiat asperiores
          repellendus molestiae esse eveniet?
        </p>
      </div>
    </main>
  );
}
