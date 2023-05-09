'use client';
import DatabaseForm from '@/app/components/firebase/database/DatabaseForm';
import DatabaseResult from '@/app/components/firebase/database/DatabaseResult';
import { NextPage } from 'next';

interface DatabasePageProps {}

const DatabasePage: NextPage<DatabasePageProps> = () => {
  return (
    <>
      <DatabaseForm />
      <DatabaseResult />
    </>
  );
};
export default DatabasePage;
