export const token = (mode) => ({
  ...(mode === "dark"
    ? {
        main: "0f172a",
        secondary: "5fb3c9",
        btnClr: "f5ee9e",
        borderClr: "fbbf24",
        errorClr: "ef4444",
        textPrim: "f8fafc",
      }
    : {
        main: "2d728f",
        secondary: "3b8ea5",
        btnClr: "f5ee9e",
        borderClr: "f49e4c",
        errorClr: "ab3428",
        textPrim: "000000",
      }),
});
