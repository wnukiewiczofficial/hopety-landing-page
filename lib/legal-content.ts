import fs from "node:fs";
import path from "node:path";

const root = process.cwd();

export const LEGAL_PRIVACY_TITLE = "Polityka Prywatności";
export const LEGAL_TERMS_TITLE = "Regulamin świadczenia usług";

export const LEGAL_PRIVACY_CONTENT = fs.readFileSync(path.join(root, "hopety-privacy-policy.md"), "utf-8");

export const LEGAL_TERMS_CONTENT = fs.readFileSync(path.join(root, "hopety-terms.md"), "utf-8");
