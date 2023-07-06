import Image from 'next/image'

export default function Home() {
  return (
    <main className="bg-[var(--Dark-Blue)] w-screen h-screen flex items-center justify-center">
      <div className="flex flex-col items-center justify-center w-full max-w-lg m-4 p-8 bg-[var(--Dark-Grayish-Blue)] rounded-lg text-center">
        <div className="flex flex-col items-center" id="content">
          <span className="text-[var(--Neon-Green)] tracking-[0.4em] uppercase text-xs my-4">Ean</span>
          <strong className="relative text-xl text-[var(--Light-Cyan)] font-extrabold">"Pressione o botão para gerar um novo EAN..."</strong>  
        </div>        
        
        <Image 
          src={'./pattern-divider-desktop.svg'}
          alt="Divisor de página"
          width={0}
          height={0}
          className="block my-6 w-full"
        />

        <svg className="hidden" id="barcode"></svg>

        <button className="p-5 bg-[var(--Neon-Green)] bg-no-repeat bg-center rounded-full -mb-16 hover:cursor-pointer hover:opacity-70">
          <Image 
            src={'./icon-dice.svg'}
            alt="Icone de um dado"
            width={40}
            height={40}
          />  
        </button>      
      </div>
    </main>
  )
}
