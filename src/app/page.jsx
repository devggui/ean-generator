'use client'

import Image from 'next/image'
import JsBarcode from 'jsbarcode'
import { useEffect, useState } from 'react'

export default function Home() {
  const [currentEan, setCurrentEan] = useState('')    

  useEffect(() => {    
    if(currentEan) {
      const barcode = document.getElementById('barcode')              
  
      JsBarcode(barcode, currentEan, {
        format: 'ean13',
        displayValue: true
      })
    }
  }, [currentEan])

  const handleGetEan = () => {
    const currentDate = new Date()
    let ean13 = String(currentDate.getTime()).slice(1, 13)

    // Calcula o dígito de verificação usando o algoritmo EAN-13
    let sum = 0

    for (let i = 0; i < 12; i++) {
      sum += parseInt(ean13.charAt(i)) * (i % 2 === 0 ? 1 : 3)
    }

    const checkDigit = (10 - (sum % 10)) % 10
    
    ean13 += checkDigit  
    
    setCurrentEan(ean13)    
  }

  const downloadEan = () => {
    const canvas = document.getElementById('barcode')    
    const dataURL = canvas.toDataURL('image/png')    
    const link = document.createElement('a')

    link.href = dataURL
    link.download = `${currentEan}.png`
    
    link.click()
    link.remove()
  }

  return (
    <main className="bg-[var(--Dark-Blue)] w-screen h-screen flex items-center justify-center">
      <div className="flex flex-col items-center justify-center w-full max-w-lg m-4 p-8 bg-[var(--Dark-Grayish-Blue)] rounded-lg text-center">
        <div className="flex flex-col items-center" id="content">
          <span className="text-[var(--Neon-Green)] tracking-[0.4em] uppercase text-xs my-4">Código de barras</span>
          <strong className="relative text-xl text-[var(--Light-Cyan)] font-extrabold">"Pressione o botão para gerar um novo código de barras..."</strong>  
        </div>        
        
        <Image 
          src={'./pattern-divider-desktop.svg'}
          alt="Divisor de página"
          width={0}
          height={0}
          className="block my-6 w-full"
        />

        {currentEan && (
          <div>
            <canvas 
              className="my-5" 
              id="barcode"          
            ></canvas>

            <button
              id="btnDownload"
              className="mt-3 mb-10 px-24 py-3 bg-[var(--Neon-Green)] rounded-lg hover:cursor-pointer hover:opacity-70"
              onClick={downloadEan}
            >
              Baixar
            </button>
          </div>
        )}

        

        <button 
          className="p-5 bg-[var(--Neon-Green)] bg-no-repeat bg-center rounded-full -mb-16 hover:cursor-pointer hover:opacity-70"
          onClick={handleGetEan}
        >
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
