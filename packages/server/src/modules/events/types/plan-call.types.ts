export enum PlanCallStatus {
  COMPLETED = 'COMPLETED',
  CANCELLED = 'CANCELLED',
  IN_PROGRESS = 'In Progress',
}

export enum PlanCallActivityType {
  TASK = 'TASK',
  EVENT = 'EVENT',
}

export enum PlanCallActivitySubtype {
  CALL = 'Call',
  CASE_SUPPORT = 'Case Support',
  EDETAILING = 'edetailing',
  EDETAILING_VIRTUAL = 'edetailing virtual',
  EMAIL = 'E-Mail',
  MEETING = 'Meeting',
  OTHER = 'Other',
  PRECEPTORSHIP = 'Preceptorship',
  PROCTORSHIP = 'Proctorship',
  PRODUCT_DEMO = 'Product Demo',
  REMOTE_CASE_SUPPORT = 'Remote Case Support',
  WEBINARS = 'Webinars',
  FOLLOW_UP = 'Follow-up',
  MARKETING_MATERIAL_PREPARATION = 'Marketing Material Preparation',
  SEND_LETTER = 'Send Letter',
  SEND_QUOTE = 'Send Quote',
}
