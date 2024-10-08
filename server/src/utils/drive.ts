import { google } from "googleapis";
import path from "path";

// const KEY_FILE_PATH = path.join("credentials.json");
const SCOPES = ["https://www.googleapis.com/auth/drive"];

const googleCredentials = {
  type: "service_account",
  project_id: "productive-ielts",
  private_key_id: "5073f6e8d55b77b64ffdcf595699410060e89c3c",
  private_key:
    "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQCO8HeZTbLxI7s0\nJrhOqJ/s/5IrSKDgtBr9BJzqcaLitsDus057J8ooRr8uCyWnTwcLWZY4XEJZh/KS\nhnYMz9iJYm2jcj88iuFWpojczbNmpmfEkETOxi5PZmzSSWr0jq8LNsQRx3+3I8y5\nVQdLp5xEfc7Xt922VAFsz+HpWAJIQ6BWywb+rdKc7fn4yACn7AkcMDi6EBdxEFFN\nMTRhMVjoq5Xof1zS2o5hppBGPM9yZYyLHzpkY5OIl2eQ+KRDiuGAqhXTq4d+U6wa\niW1ISw756UXN1JaNSI4axWkEWFS3TQwCpoQE/BGYP2GPBj3vVP4hiIhYG7mZqJIH\nY9MfcoUfAgMBAAECggEAM/jhM5+Zwa4BQkwV1ZvgUlb2ucA1pp419et4dpIM7KwQ\naHpPvd3Q1mYq2z34WeYVJJ5VTXbWNSGGJJq5T50/GWztenFu5r+EgXIZ71bntRoq\nPsFKE3jhm8MdLDS/q945bTVjgydrm5ZruLNe7LYrzoeD7tGOzt2qivrnJGX4pndN\nDyO3/L2jvw7WCgN+PhblqI0f8YDrO0yLf6G4PHSyeBxWgIiclV8u2VZYVcXqzFVp\nuXVE/VE+ezkNnL3vXK+P9kQ7gw8cfFdlFAo7tndjXS3h3f5Kgfl0oRwwYqlYFV3m\n0dnDVVInfRV1PZce2d1+bTSbomoOHZ4diKObRm3IWQKBgQDIxFKJLy1px+YQ26EM\nza9kB81UmMOiE3bDCdkqvsGTrehnLDEErLWVBNDZMEZFSqmeyHi8SoMmwTLEInGO\nQknToLg1ujoSfucYo6sv3tbfQkXq7eTYWhsbocOlDiqqLrkrN2zIDkBH2BdqicLV\ntR/tw6HyMTwe7fWZfVLJbythLQKBgQC2Q3IsTr+KyLEB+awfZjKth5wM6lD+tFqJ\nx/+tFzHN7EDL3f7aouApU1MzDOogB/QSeKaz4BNfE4ZG9NVcIUJLH6klbtWT8a9R\nsJEKtQrBHCChjkEQTrO4VygwSXvxpVvfKd3xN42HpSMzwx0Mk8JNQzbXDSWUa/JH\nayrlzk32+wKBgDOFPfD6bFsC82VMF04j0miHIAgfk8SZ3hY7BsHTZfWx4TvouUOL\n1qVBMR8rJj1N5a1boLAhJvrhBVgTxrRNCokGa39OJOzuJ/vItHt6YgW1CiA5oEpt\nBRvYLU7EDerSRq5ycLX+AjztlUS/yYHyExl+5KY0QEtnoWkcIgyTPLyZAoGBAJRI\nxS/lFZLM+q23umCFXf+uT7h2PlUq2Go2S/4/26ZEaucyAnFQh/03LH5hKG3M6rbI\ncB/x0vDMSreZ46gj6vKBnLS2uo6118QnWamTZ197CdVGjgq9bRwx1KGMd4k+1kL2\npfnlD4FnSf+H4y9jW3ZOk+RcbtGVDTUrrGfw859XAoGBAIW6BeOo8hN4dBTIQaRF\n7FQFqCHqLgr5rvTCtWhzsu5LN7NbgO3hRT58DTK1rUSHOUhdr5xedsJZpFfwUyOC\n/Uor+xh5m5odKt6G5vosuD930r5SsqGC/mWFDMcuLKSeRAz+6gXn4iEuDc+TDg3V\nSw6GEJosJH4BJgkd1k9znhKn\n-----END PRIVATE KEY-----\n",
  client_email:
    "productive-ielts-videos@productive-ielts.iam.gserviceaccount.com",
  client_id: "102001353148131457402",
  auth_uri: "https://accounts.google.com/o/oauth2/auth",
  token_uri: "https://oauth2.googleapis.com/token",
  auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
  client_x509_cert_url:
    "https://www.googleapis.com/robot/v1/metadata/x509/productive-ielts-videos%40productive-ielts.iam.gserviceaccount.com",
  universe_domain: "googleapis.com",
};

const auth = new google.auth.GoogleAuth({
  credentials: googleCredentials,
  // keyFile: KEY_FILE_PATH,
  scopes: SCOPES,
});

const drive = google.drive({ version: "v3", auth: auth });

export default drive;
