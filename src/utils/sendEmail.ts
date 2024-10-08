
import axios from 'axios';
import { IFormValues } from '@/@types';

const sendEmail = async (formData: IFormValues): Promise<void> => {
  await axios.post('/api/nodemailer', formData);
};

export default sendEmail;
