import { getProviders, signIn } from 'next-auth/react';
import { useEffect } from 'react';


function Login({providers}) {
  useEffect(() => {
    alert("Make sure you are Singed In and active on your Spotify Account on any device, preferably on the device you are using now, before you try this app. \n\nYou can click on the playlists to change them, click on the songs to play them, logout and use the Play/Pause & Volume buttons. Other tabs and buttons will be functional in the next update since this app is a WorkInProgress. Thank you.");
  }, []);
  
  return (
    <div className='flex flex-col items-center bg-black min-h-screen w-full justify-center'>
      <img className='mb-10' src='https://live.staticflickr.com/65535/51782275594_6e11b2de15_n.jpg' alt='Logo' />
      {Object.values(providers).map((provider) => (
        <div key={provider.name}>
          <button
            className='p-5 bg-[#1c2c80] rounded-lg text-white'
            onClick={() => signIn(provider.id, { callbackUrl: '/' })}
          >
            Login with {provider.name}
          </button>
        </div>
      ))}
    </div>
  );
}

export default Login;

export async function getServerSideProps() {
  const providers = await getProviders();
  return {
    props: {providers},
  };
}