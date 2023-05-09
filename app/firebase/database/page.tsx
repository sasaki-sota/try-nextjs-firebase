'use client';
import DatabaseForm from '@/app/components/firebase/database/DatabaseForm';
import { NextPage } from 'next';

interface DatabasePageProps {}

const DatabasePage: NextPage<DatabasePageProps> = () => {
  return (
    <>
      <DatabaseForm />
    </>
  );
};
export default DatabasePage;
