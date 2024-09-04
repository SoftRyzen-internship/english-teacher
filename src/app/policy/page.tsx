import { policyQuery } from '@/api/queries';
import { PolicyQueryResult } from '@/api/types';
import { ErrorFetchDataMessage } from '@/components/common/error-fetch-data-message/error-fetch-data-message';
import { Policy } from '@/sections/policy/policy';
import { executeQuery } from '@datocms/cda-client';

const PolicyPage = async () => {
  let result: PolicyQueryResult | null = null;
  try {
    const token = process.env.DATOCMS_READONLY_TOKEN;

    if (!token) {
      throw new Error('DATOCMS_READONLY_TOKEN is not defined');
    }

    result = await executeQuery(policyQuery, {
      token: token,
    });
  } catch (err) {}

  return (
    <main>
      {result ? <Policy policyData={result} /> : <ErrorFetchDataMessage />}
    </main>
  );
};
export default PolicyPage;
