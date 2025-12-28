# @3viky/mcp-common

Shared utilities for MCP (Model Context Protocol) servers.

## Installation

```bash
npm install @3viky/mcp-common
```

## Usage

```typescript
import { createVersionInfo, getMCPServiceDataDir } from '@3viky/mcp-common';

// Get version info
const version = createVersionInfo(import.meta.url);
console.log(version);

// Get data directory
const dataDir = getMCPServiceDataDir('my-service');
console.log(dataDir);
```

## API

### Version Utilities

- **`getPackageJsonPath(importMetaUrl: string): string`** - Get path to package.json
- **`createVersionInfo(importMetaUrl: string): VersionInfo`** - Create version info object from package.json

### Data Directory Utilities

- **`getMCPServicesCacheDir(): string`** - Get OS-specific cache directory for MCP services
- **`getMCPServiceDataDir(serviceName: string): string`** - Get data directory for specific MCP service

## License

MIT
