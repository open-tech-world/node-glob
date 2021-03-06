import { matchGlob } from '@open-tech-world/es-glob';

function splitPatterns(patterns: string[]): string[][] {
  const posPats = [];
  const negPats = [];
  for (let i = 0; i < patterns.length; i++) {
    patterns[i][0] === '!'
      ? negPats.push(patterns[i])
      : posPats.push(patterns[i]);
  }

  return [posPats, negPats];
}

function isMatch(entry: string, patterns: string[]): boolean {
  const curEntry = entry.replace(/(?:\\)/g, '/');
  const [posPats, negPats] = splitPatterns(patterns);

  for (let i = 0; i < negPats.length; i++) {
    if (!matchGlob(curEntry, negPats[i])) {
      return false;
    }
  }

  for (let i = 0; i < posPats.length; i++) {
    if (matchGlob(curEntry, posPats[i])) {
      return true;
    }
  }

  return false;
}

export default isMatch;
