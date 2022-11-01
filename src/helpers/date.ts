export const isAfterNow = (date: Date) => {
  return new Date(date).getTime() - new Date().getTime() <= 0;
};
