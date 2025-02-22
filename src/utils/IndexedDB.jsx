import { openDB } from "idb";

const db = openDB("quizHistory", 1, {
  upgrade(db) {
    db.createObjectStore("scores", { keyPath: "id", autoIncrement: true });
  },
});

export const saveQuizHistoryIndexedDB = async (score) => {
  await db.put("scores", { score, date: new Date().toISOString() });
};
