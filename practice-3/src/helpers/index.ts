const setFieldsValue = (fieldsValue, value, fieldName) => {
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
