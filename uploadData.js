const firestoreService = require("firestore-export-import");
const serviceAccount = require("./service-account-file.json");

const args = process.argv.slice(2);
if (args.includes("emulate")) {
  process.env.FIRESTORE_EMULATOR_HOST = "localhost:8080";
}
firestoreService.initializeApp(
  serviceAccount,
  `https://${serviceAccount.project_id}.firebaseio.com`
);
firestoreService.restore("data.json");
