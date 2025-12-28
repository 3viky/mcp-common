/**
 * Common types shared across MCP servers
 */

/**
 * Version information object
 */
export interface VersionInfo {
  name: string;
  version: string;
  description: string;
  author: string;
  license: string;
  error?: string;
}

/**
 * MCP tool result success
 */
export interface ToolResultSuccess {
  content: Array<{ type: 'text'; text: string }>;
  isError?: false;
}

/**
 * MCP tool result error
 */
export interface ToolResultError {
  content: Array<{ type: 'text'; text: string }>;
  isError: true;
}

/**
 * MCP tool result (union type)
 */
export type ToolResult = ToolResultSuccess | ToolResultError;
