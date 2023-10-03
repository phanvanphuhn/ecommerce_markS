import { Kysely } from "kysely";

import { Complaint, ContactSearch, UserProfile } from "@generated/kysely/types";

interface DB {
  "marks.ContactSearch": ContactSearch;
  "marks.Complaint": Complaint;
  "marks.UserProfile": UserProfile;
}

export class Database extends Kysely<DB> {}
