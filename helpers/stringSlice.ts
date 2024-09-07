export const stringSlice = (text: string) => {
  let sliceName = "";

  if (text.length > 10) {
    sliceName = text.substring(0, 10) + "...";
  } else {
    sliceName = text;
  }
  return sliceName;
};
