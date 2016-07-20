/**
 * Created by josh.welham on 20/07/16.
 */

const newContext = (schema) => {
  const context = schema.newContext();
  context.resetValidation();

  return context;
};

export const forumFieldsExist = (forumFields) => {
  return typeof forumFields === 'object' && Object.keys(forumFields).length !== 0;
};

export const validate = (schema, forumFields) => {
  const context = newContext(schema);

  context.validate(forumFields);

  return context;
};

export const validateUpdate = (schema, forumFields) => {
  const context = newContext(schema);

  Object.keys(forumFields).map((field) =>
  {
    context.validateOne(forumFields, field);
  });

  return context;
};

// const context = validateOnly(HelpDeskSchema, forumFields, ['name', 'description']);
export const validateOnly = (schema, forumFields, useFields) => {
  const context = newContext(schema);

  useFields.map((field) =>
  {
    context.validateOne(forumFields, field);
  });

  return context;
};

export const invalidKeys = (context) => {
  const invalidKeys = context.invalidKeys();

  Object.keys(invalidKeys).map((field) =>
  {
    invalidKeys[field].message = context.keyErrorMessage(invalidKeys[field].name);
  });

  return invalidKeys;
};
