window.DionQuestionKey = function (prompt) {
  const normalized = String(prompt).normalize('NFKC').replace(/\s+/g, ' ').trim();
  let first = 0x811c9dc5;
  let second = 0x9e3779b9;
  for (let i = 0; i < normalized.length; i++) {
    const code = normalized.charCodeAt(i);
    first = Math.imul(first ^ code, 0x01000193);
    second = Math.imul(second ^ code, 0x85ebca6b);
  }
  return `dq-${(first >>> 0).toString(36)}-${(second >>> 0).toString(36)}`;
};
