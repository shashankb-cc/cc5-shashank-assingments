/**
 * Represents a high-level query.
 */
export interface HighLevelQuery {
  type: "high";
}

/**
 * Represents a low-level query.
 */
export interface LowLevelQuery {
  type: "low";
}

/**
 * Represents a shallow result.
 */
export interface ShallowResult {
  shallow: boolean;
}

/**
 * Represents a deep result.
 */
export interface DeepResult {
  deep: boolean;
}

/**
 * Processes a high-level query and returns a shallow result.
 *
 * @param {HighLevelQuery} query - The high-level query to process.
 * @returns {ShallowResult} The result of processing the high-level query.
 */
export function processQuery(query: HighLevelQuery): ShallowResult;

/**
 * Processes a low-level query and returns a deep result.
 *
 * @param {LowLevelQuery} query - The low-level query to process.
 * @returns {DeepResult} The result of processing the low-level query.
 */
export function processQuery(query: LowLevelQuery): DeepResult;

/**
 * Processes a query and returns a result based on the query type.
 *
 * @param {HighLevelQuery | LowLevelQuery} query - The query to process.
 * @returns {ShallowResult | DeepResult} The result of processing the query.
 */
export function processQuery(
  query: HighLevelQuery | LowLevelQuery
): ShallowResult | DeepResult {
  return query.type === "high"
    ? ({ shallow: true } as ShallowResult)
    : ({ deep: true } as DeepResult);
}
