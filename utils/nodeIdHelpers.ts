/**
 * Utility functions for working with GraphQL node IDs
 */

/**
 * Extracts the numeric ID from a base64 encoded nodeId
 * @param nodeId The base64 encoded nodeId (e.g., "WyJwdWJsaWMiLCAicmVjaXBlIiwgMV0=")
 * @returns The numeric ID (e.g., "1")
 */
export function getNumericId(nodeId: string): string {
  try {
    // Decode the base64 string to get ["public", "recipe", 1]
    const decoded = JSON.parse(atob(nodeId));
    // Return the last element as string
    return String(decoded[decoded.length - 1]);
  } catch (error) {
    console.error("Error extracting numeric ID:", error);
    return "";
  }
}

/**
 * Creates a nodeId from entity type and numeric ID
 * @param entityType The type of entity (e.g., "recipe")
 * @param id The numeric ID (e.g., "1")
 * @returns The base64 encoded nodeId
 */
export function createNodeId<T extends string | number>(entityType: string, id: T): string {
  // Create the array ["public", entityType, id]
  const nodeIdArray = ["public", entityType, id];
  // Convert to JSON and encode as base64
  return btoa(JSON.stringify(nodeIdArray));
}

/**
 * Extracts entity information from a nodeId
 * @param nodeId The base64 encoded nodeId
 * @returns Object containing schema, table, and id
 */
export function parseNodeId(nodeId: string): { schema: string; table: string; id: string | number } | null {
  try {
    const decoded = JSON.parse(atob(nodeId));
    return {
      schema: decoded[0],
      table: decoded[1],
      id: decoded[2]
    };
  } catch (error) {
    console.error("Error parsing nodeId:", error);
    return null;
  }
} 