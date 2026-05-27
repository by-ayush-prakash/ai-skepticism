import { readFileSync } from 'fs';

const html = readFileSync('decoded_template.html', 'utf-8');

console.log('--- HEAD section ---');
const headMatch = html.match(/<head[^>]*>([\s\S]*?)<\/head>/i);
if (headMatch) {
  console.log(headMatch[1].slice(0, 2000));
}

console.log('\n--- BODY section (first 3000 chars) ---');
const bodyMatch = html.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
if (bodyMatch) {
  console.log(bodyMatch[1].slice(0, 3000));
  console.log('\n... [TRUNCATED] ...');
  console.log('BODY last 2000 chars:');
  console.log(bodyMatch[1].slice(-2000));
} else {
  console.log('No body element found? Total content length:', html.length);
  console.log(html.slice(0, 2000));
}
