'use client'

import Link from 'next/link'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import TextShowCase from '@/Utils/Motions/TextShowCase';
import './viewcard.css'
import { nftCards2 } from '@/Constant/Data';
import Image from 'next/image';
import VerifiedIcon from '@mui/icons-material/Verified';
import TrendingFlatIcon from '@mui/icons-material/TrendingFlat';
import SectionWrapper from '@/HOC/SectionWrapper';

const ViewCards = () => {
  return (
    <>
    <section className="bg-[#030014] h-full p-[5px]">
      <div className="flex justify-between items-center p-2">
      <Link href='/' className=''>
        <ArrowBackIosIcon style={{color: 'purple'}} />
      </Link>

      <TextShowCase fontSize='text-white font-bold sm:text-[1.8rem]'>More NFT's</TextShowCase>
      </div>

         <div className="flex justify-center items-center">
      <Image src='/GoogleI.jpg' alt='' width={3000} height={3000} className='sm:w-16 w-10 sm:h-16 h-10 rounded-[50%] sm:mt-0 mt-6' />
       </div>

      <section className="flex flex-wrap sm:mt-12 mt-0 justify-center">
          {nftCards2.map((item) => (
        <div className='text-white py-5 px-2' key={item.id}>        
        <Image src={item.TopNft} alt="NFT's" width={1000} height={1000} className='w-[322px] h-[305px] object-cover' />
     <div className="p-4 shadow-sm shadow-neutral-400 bg-[#00000000]">
        <div className="p-0">
        <div className="flex justify-between py-3 items-center">
          <TextShowCase fontSize='font-bold sm:text-[1em] xm:text-[14px] text-[9px]'>{item.Desc}</TextShowCase>
          <TextShowCase fontSize='sm:text-xs xm:text-[12px] text-[8px] text-neutral-400'>Auction Ends in</TextShowCase>
        </div>

        <div className="flex items-center justify-between">
          <div className='flex items-center'>
          <Image src={item.userPic} alt='avater' width={500} height={500} className='rounded-[50%] xm:h-[36px] h-[25px] xm:w-[36px] w-[25px] object-cover' />
          <TextShowCase fontSize='font-medium sm:text-sm xm:text-sm text-xs'>{item.UserName} <VerifiedIcon style={{ color: ' #4671ff', fontSize: '15px'}}/></TextShowCase>
          </div>
          <div className='font-semibold text-center'>
            <div className="flex xm:gap-4 gap-1 sm:text-sm xm:text-[13px] text-[9px]">
              <div className="flex flex-col">
               <h1>{item.num}</h1>
               <h2 className='text-neutral-400 sm:text-xs xm:text-[12px] text-[9px]'>{item.numDesc}</h2>
              </div>
              <div className="flex flex-col">
               <h1>{item.num2}</h1>
               <h2 className='text-neutral-400 sm:text-xs xm:text-[12px] text-[9px]'>{item.numDesc2}</h2>
              </div>
              <div className="flex flex-col">
               <h1>{item.num3}</h1>
               <h2 className='text-neutral-400 sm:text-xs xm:text-[12px] text-[9px]'>{item.numDesc3}</h2>
              </div>
            </div>
          </div>
        </div>
        </div>
        <TextShowCase fontSize='mt-5 text-[11px] text-neutral-300'>Reserve price</TextShowCase>

        <div className="flex justify-between items-center py-[1.2px]">
          <div className='flex items-center'>
          <Image src='/Ethereum-logo.png' alt='' width={500} height={500} className='w-6 h-6 object-cover xm:flex hidden' />
          <p className='text-[12px] font-bold'>{item.crypto} <span className="text-neutral-400 xm:text-[10px] text-[7px]">{item.cryptoNum}</span></p>
          </div>
          <a href="https://www.behance.net/search/projects/nft%20website%20ui%20ux">
          <TextShowCase fontSize='xm:p-2 p-[2px] font-bold text-center sm:text-[15px] xm:text-[14px] text-[10px]
           button___gradient border-y-2 border-r-2 border-l-2 border-l-[#5e66ff] border-fuchsia-300'>Place Bid <TrendingFlatIcon /></TextShowCase>
           </a>
        </div>
        </div>
        </div>
              ))};
  
        </section>

        <footer className='flex justify-center items-center'>
          <TextShowCase fontSize='text-white capitalize'>&copy; 2024 All rights reserve</TextShowCase>
        </footer>

    </section>
    </>
  )
}
export default SectionWrapper(ViewCards)  