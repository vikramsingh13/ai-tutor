// Creates a row in the given table in the database with the provided key value pairs.
// Takes the name of the table and a JSON object called dataKeyValuePairs with the column names as keys, and column values as values.
// If the table name is not found, the row is not added.
// If they key/value pairs in the matchKeyValuePairs exactly match the any row's column name and values in the table, the new row is not added.
// If a key in dataKeyValuePairs doesn't match a column name in the table, then that key is skipped.
export const createRowInTableWithKeyValuePairs = async ({
  tableName,
  dataKeyValuePairs,
  matchKeyValuePairs,
}: {
  tableName: string;
  dataKeyValuePairs: {};
  matchKeyValuePairs: {};
}) => {
  console.log(
    `creating row in table : ${tableName} with values: `,
    dataKeyValuePairs
  );
  return {};
};

// Fetches/reads a row/rows from a given table name where the column names and values exactly match the key/value pairs in matchKeyValuePairs.
export const readRowInTableWithKeyValuePairs = async ({
  tableName,
  matchKeyValuePairs,
}: {
  tableName: string;
  matchKeyValuePairs: {};
}) => {
  console.log(
    `reading row in table : ${tableName} with values: `,
    matchKeyValuePairs
  );
  return {};
};

// Updates a row in the given table in the database with the provided key value pairs.
// Takes the name of the table and a JSON object called dataKeyValuePairs with the column names as keys, and column values as values. Also takes a similar JSON object called matchKeyValuePairs -- consists of the column and values that need to be matched exactly in a row or rows in the table so the row/rows can be updated.
// If the table name is not found, nothing is updated.
// If a row's column and values match exactly with the key/value pairs in the matchKeyValuePairs, then that rows' columns will be updated with the key/value pairs in dataKeyValuePairs. If multiple rows match, then all of the matching rows will be updated.
// If no rows have the exact column and values in the matchKeyValuePairs then no rows are updated.
// If a key in dataKeyValuePairs doesn't match a column name in the table, then that key is skipped.
export const updateRowInTableWithKeyValuePairs = async ({
  tableName,
  dataKeyValuePairs,
  matchKeyValuePairs,
}: {
  tableName: string;
  dataKeyValuePairs: {};
  matchKeyValuePairs: {};
}) => {
  console.log(
    `updating row in table : ${tableName} with values: `,
    dataKeyValuePairs
  );
  return {};
};

// Deletes a row/rows from a given table name where the column names and values exactly match the key/value pairs in matchKeyValuePairs.
export const deleteRowInTableWithKeyValuePairs = async ({
  tableName,
  matchKeyValuePairs,
}: {
  tableName: string;
  matchKeyValuePairs: {};
}) => {
  console.log(
    `deleting row in table : ${tableName} with values: `,
    matchKeyValuePairs
  );
  return {};
};
