// Wraps quotations from sources ("..." or “...”, at least MIN characters) in
// <span class="source-quote"> so they render in a distinct color. Skips headings,
// link text, code, and Sources tables (whose cells hold titles, not quotations).
const MIN = 25;
const PATTERN = /“[^“”]+”|"[^"\n]+"/g;

function cellText(node) {
  if (!node) return '';
  if (node.type === 'text') return node.value;
  return (node.children || []).map(cellText).join('');
}

function isSourcesTable(node) {
  const first = node.children?.[0]?.children?.[0];
  return cellText(first).trim() === 'Source';
}

function splitText(value) {
  const out = [];
  let last = 0;
  for (const m of value.matchAll(PATTERN)) {
    if (m[0].length - 2 < MIN) continue;
    if (m.index > last) out.push({ type: 'text', value: value.slice(last, m.index) });
    out.push({ type: 'html', value: '<span class="source-quote">' });
    out.push({ type: 'text', value: m[0] });
    out.push({ type: 'html', value: '</span>' });
    last = m.index + m[0].length;
  }
  if (last === 0) return null;
  if (last < value.length) out.push({ type: 'text', value: value.slice(last) });
  return out;
}

function walk(node) {
  if (!node.children) return;
  if (['heading', 'link', 'linkReference', 'code', 'inlineCode'].includes(node.type)) return;
  if (node.type === 'table' && isSourcesTable(node)) return;
  const next = [];
  for (const child of node.children) {
    if (child.type === 'text') {
      const parts = splitText(child.value);
      if (parts) { next.push(...parts); continue; }
    } else {
      walk(child);
    }
    next.push(child);
  }
  node.children = next;
}

export default function remarkSourceQuotes() {
  return (tree) => walk(tree);
}
