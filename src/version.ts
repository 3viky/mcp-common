import { readFileSync } from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

/**
 * Get the path to package.json for the calling module
 */
export function getPackageJsonPath(importMetaUrl: string): string {
  const __dirname = dirname(fileURLToPath(importMetaUrl));
  return join(__dirname, '..', 'package.json');
}

/**
 * Create version info object from package.json
 */
export function createVersionInfo(importMetaUrl: string) {
  try {
    const packagePath = getPackageJsonPath(importMetaUrl);
    const packageJson = JSON.parse(readFileSync(packagePath, 'utf-8'));

    return {
      name: packageJson.name || 'unknown',
      version: packageJson.version || '0.0.0',
      description: packageJson.description || '',
      author: packageJson.author || 'unknown',
      license: packageJson.license || 'UNLICENSED',
    };
  } catch (error) {
    return {
      name: 'unknown',
      version: '0.0.0',
      description: 'Failed to load version info',
      author: 'unknown',
      license: 'UNLICENSED',
      error: error instanceof Error ? error.message : 'Unknown error',
    };
  }
}
