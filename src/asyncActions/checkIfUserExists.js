const { createAsyncThunk } = require("@reduxjs/toolkit");

export const checkIfUserExists = createAsyncThunk(
  "formReducer/checkIfUserExists",
  async (value) => {
    try {
      const response = await fetch("/userExists", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username: value }),
      });
      return await response.json();
    } catch (err) {
      console.log(err);
    }
  }
);

// async function checkIfUserExists(value) {
//   const response = await fetch("/userExists", {
//     method: "POST",
//     headers: {
//       Accept: "application/json",
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({ username: value }),
//   });
//   const data = await response.json();
//   setUserExists(data.userExists);
//   console.log(userExists);
// }
