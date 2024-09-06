import { fetchData } from '@/api/api';
import { policyQuery } from '@/api/queries';
import { PolicyQueryResult } from '@/api/types';
import { ErrorFetchDataMessage } from '@/components/common/error-fetch-data-message/error-fetch-data-message';
import { Policy } from '@/sections/policy/policy';

const PolicyPage = async () => {
  let result: PolicyQueryResult | null = null;

  result = (await fetchData(policyQuery)) as PolicyQueryResult;

  return (
    <main>
      {result ? <Policy policyData={result} /> : <ErrorFetchDataMessage />}
    </main>
  );
};
export default PolicyPage;
