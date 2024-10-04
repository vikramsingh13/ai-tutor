// Import the CRUD db actions that take key values: matchKeyValuePairs to match column names and values, and dataKeyValuePairs to add/update values of columns whose names are the same as the key.
import {
  createRowInTableWithKeyValuePairs,
  readRowInTableWithKeyValuePairs,
  updateRowInTableWithKeyValuePairs,
  deleteRowInTableWithKeyValuePairs,
} from "@/lib/actions/db-actions";

// Function to add an user to the users table in the db if the user doesn't exist. If the user exists, update the user's column values.
// The column names and values are provided from the dataKeyValuePairs object.
// The user is matched with the given user email in the dataKeyValuePairs. This email is not a primary key on its own but it is unique in the user table.
// The table name in the database is users.
export const addOrUpdateUserWithEmail = ({
  dataKeyValuePairs,
}: {
  dataKeyValuePairs: {};
}) => {
  console.log("user in login-actions: ", dataKeyValuePairs);
  // The table name in the database is users.
  const tableName = "users";
  // The user's email. The dataKeyValuePairs param must come with it.
  const userEmail = "emailbtw"; //dataKeyValuePairs["email"];
  // Object that will have the key/value pairs to match and find the row in the table.
  const matchKeyValuePairs = { email: userEmail };
  // Try to fetch the user with the given key/value pairs from the table.
  // TODO add await to resolve the promises
  let result = readRowInTableWithKeyValuePairs(tableName, matchKeyValuePairs);
  // result will have error property if user table row with the userEmail already exists.
  if (result.hasOwnProperty("error")) {
    // Since the user already exists in the users table with the given userEmail, update the user row instead.
    // TODO add await to resolve the promises
    result = updateRowInTableWithKeyValuePairs(
      tableName,
      matchKeyValuePairs,
      dataKeyValuePairs
    );
    return { success: "User updated." };
  } else {
    // Add the user row to the users table since the user doesn't exist in the table yet.
    // TODO add await to resolve the promises
    result = createRowInTableWithKeyValuePairs(tableName, dataKeyValuePairs);
    return { success: "User added." };
  }
};
