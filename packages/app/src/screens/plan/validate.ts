import * as Yup from 'yup';
export const validateCallLog = Yup.object().shape({
  contactName: Yup.string().required('This field is required'),
  description: Yup.string().required('This field is required'),
  endDate: Yup.string().required('This field is required'),
  location: Yup.string().required('This field is required'),
  account: Yup.string().required('This field is required'),
  subject: Yup.string().required('This field is required'),
});
