import JsLogo from "@/components/logos/JsLogo";
import Link from 'next/link';
import NextLogo from '@/components/logos/NextLogo';
import ReactLogo from '@/components/logos/ReactLogo';
import AngularLogo from '@/components/logos/AngularLogo';
import CLogo from '@/components/logos/CLogo';
import LetrasEffect from "@/components/LetraseEffect";


const Proyectos = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-10 w-auto">
    <LetrasEffect/>
    <div className='container flex justify-center w-auto'>
    <Link href="/proyectos/next" className='logo ml-8'>
    <NextLogo></NextLogo>
   </Link>
    </div>
    <div className="container flex justify-center w-full md:gap-72 overflow-visible">
   <Link href="/proyectos/javaScript" className='logo js  '>
   <JsLogo></JsLogo>
   </Link> 
   <Link href="/proyectos/react" className='logo react '>
    <ReactLogo></ReactLogo>
   </Link>
   <Link href="/proyectos/angular" className='logo ng '>
   <AngularLogo></AngularLogo>
   </Link>
    </div>
    <div className='container flex justify-center mb-[30px] mt-16'>
    <Link href="/proyectos/c" className='logo c'>
     <CLogo></CLogo>
   </Link>
    </div>
    </main>
  )
}

export default Proyectos