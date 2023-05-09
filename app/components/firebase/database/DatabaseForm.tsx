import { db } from '@/firebase';
import { ref, set } from 'firebase/database';
import { NextPage } from 'next';
import { useForm } from 'react-hook-form';

interface DatabaseFormProps {}

interface FormData {
  name: string;
  email: string;
  role: string;
}

const DatabaseForm: NextPage<DatabaseFormProps> = () => {
  const { register, handleSubmit } = useForm<FormData>();
  const onSubmit = handleSubmit(async (data) => {
    await set(ref(db, 'users/'), {
      name: data.name,
      email: data.email,
      role: data.role,
    });
  });
  return (
    <form onSubmit={onSubmit} className="mt-5 container">
      <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
        name
      </label>
      <input
        {...register('name')}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      />
      <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
        email
      </label>
      <input
        {...register('email')}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      />
      <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
        role
      </label>
      <input
        {...register('role')}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      />
      <input type="submit" />
    </form>
  );
};

export default DatabaseForm;
