import { google } from "googleapis";
import path from "path";

const KEY_FILE_PATH = path.join("credentials.json");
const SCOPES = ["https://www.googleapis.com/auth/drive"];

const auth = new google.auth.GoogleAuth({
  keyFile: KEY_FILE_PATH,
  scopes: SCOPES,
});

const drive = google.drive({ version: "v3", auth: auth });

export default drive;
