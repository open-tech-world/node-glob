import getFinalPatterns from './getFinalPatterns';
import run from './run';
import IOptions from './IOptions';

function globSync(
  patterns: string | string[],
  options?: Partial<IOptions>
): string[] {
  const result: string[] = [];
  const defaultOptions: IOptions = {
    cwd: process.cwd(),
    dot: false,
    absolute: false,
    dirs: true,
    files: true,
  };
  const currentOptions = Object.assign(defaultOptions, options);
  const finalPatterns = getFinalPatterns(patterns);

  run('', finalPatterns, result, currentOptions);

  return result;
}

export default globSync;
