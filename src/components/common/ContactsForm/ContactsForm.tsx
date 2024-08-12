'use client'

import { Path, useForm, UseFormRegister, SubmitHandler } from "react-hook-form";

interface IFormValues {
  "First Name": string;
  
}

type InputProps = {
  label: Path<IFormValues>;
  register: UseFormRegister<IFormValues>;
  required: boolean;
};


const Input = ({ label, register, required }: InputProps) => (
  <>
    <label>{label}</label>
    <input {...register(label, { required })} />
  </>
);

const ContactsForm = () => {
  const { register, handleSubmit } = useForm<IFormValues>();

  const onSubmit: SubmitHandler<IFormValues> = data => {
    alert(JSON.stringify(data));
  };

 
  return (
    <div>
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input label="First Name" register={register} required />
   
      <input type="submit" />
    </form>
    </div>
  );
};

export default ContactsForm;
