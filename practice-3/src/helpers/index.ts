const setFieldsValue = (fieldsValue, value: string, fieldName: string) => {
  const fieldData = fieldsValue[fieldName];
  return {
    ...fieldsValue,
    [fieldName]: {
      ...fieldData,
      value: value,
      error: ""
    }
  };
}

export { setFieldsValue };
