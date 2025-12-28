import { homedir } from 'os';
import { join } from 'path';
import { platform } from 'process';

/**
 * Get the OS-specific data directory for MCP services
 */
function getMCPDataRoot(): string {
  switch (platform) {
    case 'win32':
      return join(process.env.APPDATA || join(homedir(), 'AppData', 'Roaming'), 'Claude', 'mcp');
    case 'darwin':
      return join(homedir(), 'Library', 'Application Support', 'Claude', 'mcp');
    default: // Linux and others
      return join(process.env.XDG_DATA_HOME || join(homedir(), '.local', 'share'), 'claude', 'mcp');
  }
}

/**
 * Get the cache directory for MCP services
 */
export function getMCPServicesCacheDir(): string {
  const root = getMCPDataRoot();
  return join(root, 'cache');
}

/**
 * Get the data directory for a specific MCP service
 */
export function getMCPServiceDataDir(serviceName: string): string {
  const root = getMCPDataRoot();
  return join(root, 'data', serviceName);
}
