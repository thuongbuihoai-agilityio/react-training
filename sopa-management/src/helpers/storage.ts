export const setStorage = (key: string, data: any) => {
  localStorage.setItem(key, JSON.stringify(data));
};

export const getStorage = (key: string) => {
  return JSON.parse(localStorage.getItem(key) as any) || [];
};

export const clearStorage = (key: string) => {
  localStorage.removeItem(key);
};
