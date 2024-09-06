import { executeQuery } from '@datocms/cda-client';

export const fetchData = async (query: string) => {
  const token = process.env.DATOCMS_READONLY_TOKEN;

  if (!token) {
    throw new Error('DATOCMS_READONLY_TOKEN is not defined');
  }

  try {
    const result = await executeQuery(query, {
      token: token,
    });
    return result;
  } catch (err) {
    console.error('Error fetching data:', err);
    return null;
  }
};
