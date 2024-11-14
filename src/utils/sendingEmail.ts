
import axios from 'axios';
import { IFormValues } from '@/@types';

const sendingEmail = async (formData: IFormValues): Promise<void> => {
  await axios.post('/api/contact', formData);
};

export default sendingEmail;
