import * as sdk from "node-appwrite";

export const {
  NEXT_PUBLIC_APPWRITE_ENDPOINT: ENDPOINT,
  APPWRITE_PROJECT_ID,
  APPWRITE_API_KEY,
  APPWRITE_DATABASE_ID,
  APPWRITE_PATIENT_COLLECTION_ID,
  APPWRITE_DOCTOR_COLLECTION_ID,
  APPWRITE_APPOINTMENT_COLLECTION_ID,
  NEXT_PUBLIC_APPWRITE_BUCKET_ID: BUCKET_ID,
} = process.env;

const client = new sdk.Client();

client
  .setEndpoint(ENDPOINT!)
  .setProject(APPWRITE_PROJECT_ID!)
  .setKey(APPWRITE_API_KEY!);

export const databases = new sdk.Databases(client);
export const users = new sdk.Users(client);
export const messaging = new sdk.Messaging(client);
export const storage = new sdk.Storage(client);
