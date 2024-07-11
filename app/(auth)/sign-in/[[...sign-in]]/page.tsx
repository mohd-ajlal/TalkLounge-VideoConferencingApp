import { SignIn} from '@clerk/nextjs';

export default function SigInInPage() {
  return (
    <main className="flex h-screen w-full items-center justify-center">
      {/* <SignUp/> */}
      <SignIn />
    </main>
  );
}