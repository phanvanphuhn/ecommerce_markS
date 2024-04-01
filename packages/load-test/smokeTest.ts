import { get, post } from 'k6/http';
import { Options } from 'k6/options';
 
export const options: Options = {
  vus: 1,
  duration: '10s',
};
 
const query =  `
query {
  testGetFilterHospitalList
}
`

const headers = {
  'Content-Type': 'application/json',
  'Authorization': 'Bearer abc'
}

export default () => {
  post(`${__ENV.DEV_API_URL}/graphql`, JSON.stringify({ query: query }), {
    headers: headers,
  });
};