export const stringSlice = (text: string) => {
  let sliceName = "";

  if (text.length > 12) {
    sliceName = text.substring(0, 12) + "...";
  } else {
    sliceName = text;
  }
  return sliceName;
};
