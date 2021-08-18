export const validatePackageName = (value: string): boolean | string => {
  if (/^([a-zA-Z0-9-]+)$/.test(value)) {
    return true;
  }
  return "Name cannot have spaces or special characters other than dashes.";
};
