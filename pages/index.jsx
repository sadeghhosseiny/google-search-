import Head from 'next/head';
import { ViewGridIcon, UserIcon } from '@heroicons/react/outline';
import SearchSection from '../components/searchSection/searchSection';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Google</title>
        {/* <meta name="description" content="Generated by create next app" /> */}
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className='flex h-12 space-x-4 mt-4 mr-4 justify-end text-gray-500'>
        <span>Gmail</span>
        <span>Images</span>
        <div>
          <ViewGridIcon className='h-6' />
        </div>
        <div>
          <UserIcon className='h-6' />
        </div>
      </header>
      <SearchSection />
      <footer className='flex bg-zinc-100 text-gray-500 justify-between gap-y-3 flex-col py-3 md:flex-row px-4 items-center'>
        <div className='space-x-5'>
          <span>About</span>
          <span>Advertising</span>
          <span>Business</span>
          <span>How Search works</span>
        </div>
        <div className='space-x-5'>
          <span>Privacy</span>
          <span>Terms</span>
          <span>Settings</span>
        </div>
      </footer>
    </div>
  );
}
