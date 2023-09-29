import { Kysely } from "kysely";

import { Complaint, ContactSearch } from "@generated/kysely/types";

interface DB {
  "marks.ContactSearch": ContactSearch;
  "marks.Complaint": Complaint;
}

export class Database extends Kysely<DB> {}
