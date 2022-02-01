import { useActionData, Form, ActionFunction } from "remix";
type ActionData = {
  formError?: string;
  fieldErrors?: { name: string | undefined; password: string | undefined };
  fields?: {
    name: string;
    password: string;
  };
};
function validateName(name: string) {
  if (name.length < 5) {
    return `the username already exist`;
  }
}
function validatePassword(password: string) {
  if (password.length < 5) {
    return `password is too short`;
  }
}

export let action: ActionFunction = async ({ request }) => {
  let { name, password } = Object.fromEntries(await request.formData());
  if (typeof name !== "string" || typeof password !== "string") {
    return { formError: `Form not submitted correctly.` };
  }

  let fieldErrors = {
    name: validateName(name),
    password: validatePassword(password),
  };
  let fields = { name };
  console.log("Fields", fields, fieldErrors, name);
  if (Object.values(fieldErrors).some(Boolean)) {
    return { fieldErrors, fields };
  }
  return true;
};

export default function AddNew() {
  let actionData = useActionData<ActionData | undefined>();

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div style={{ width: 800 }}>
        <h1>Form</h1>
        <Form method="post">
          <div>
            <label>
              Username:{" "}
              <input
                type="text"
                defaultValue={actionData?.fields?.name}
                name="name"
                aria-invalid={Boolean(actionData?.fieldErrors?.name)}
                aria-describedby={
                  actionData?.fieldErrors?.name ? "name-error" : undefined
                }
              />
            </label>
            {actionData?.fieldErrors?.name ? (
              <p className="form-validation-error" role="alert" id="name-error">
                {actionData?.fieldErrors?.name}
              </p>
            ) : null}
          </div>
          <div>
            <label>
              Password:{" "}
              <input
                defaultValue={actionData?.fields?.password}
                name="password"
                type="password"
                aria-invalid={Boolean(actionData?.fieldErrors?.password)}
                aria-describedby={
                  actionData?.fieldErrors?.password
                    ? "password-error"
                    : undefined
                }
              />
            </label>
            {actionData?.fieldErrors?.password ? (
              <p
                className="form-validation-error"
                role="alert"
                id="password-error"
              >
                {actionData?.fieldErrors?.password}
              </p>
            ) : null}
          </div>
          <button type="submit" className="button">
            Login
          </button>
        </Form>
      </div>
    </div>
  );
}
