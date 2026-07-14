import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "@/firebase/config";

export interface ContactMessage {
  id: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  user_id: string | null;
  created_at: string;
  is_read: boolean;
}

export type ContactMessageInsert = Omit<ContactMessage, "id" | "created_at" | "is_read">;

const COLLECTION_NAME = "contact_messages";

export const contactService = {
  /**
   * Store a contact-form submission in Firestore.
   * Reading/moderating submissions is done in the Firebase console — the site
   * intentionally ships no client-side admin surface.
   */
  async insertMessage(
    message: ContactMessageInsert
  ): Promise<{ data: ContactMessage | null; error: Error | null }> {
    try {
      const docRef = await addDoc(collection(db, COLLECTION_NAME), {
        ...message,
        created_at: serverTimestamp(),
        is_read: false,
      });

      return {
        data: {
          ...message,
          id: docRef.id,
          created_at: new Date().toISOString(),
          is_read: false,
        },
        error: null,
      };
    } catch (error) {
      return { data: null, error: error as Error };
    }
  },
};
