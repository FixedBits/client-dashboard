export function getEmailError(email) {
  if (!email.trim()) return "Email is required";
  if (email.includes(" ")) return "Email must not have spaces";
  if (!email.includes("@")) return "Email must contain '@'";
  if (!email.includes(".")) return "Email must contain a dot";
  if (email.endsWith(".")) return "Email can't end with a dot";
  return null;
}
