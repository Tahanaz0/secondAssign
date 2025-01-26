
import { Suspense } from 'react';
import Homepage from './component/home'
export default function Home() {
  return (
    <>
    <Suspense>
  <Homepage/>
  </Suspense>
    </>
  );
}
