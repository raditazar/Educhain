import Link from 'next/link'
export default function Home() {
  return (
    <>
      <div className='flex flex-col items-center justify-center h-screen'>
        <h1 className='text-3xl font-bold mb-6'>Home</h1>
        <Link href="/creator">
          <button className='px-6 py-2 rounded-md text-white hover:bg-red transition cursor-pointer'>
              Try making content
          </button>
        </Link>
      </div>
      
    </>
  );
}
