'use client'

import TrendingFlatIcon from '@mui/icons-material/TrendingFlat';
import Link from 'next/link';
import TextShowCase from '../../Utils/Motions/TextShowCase'
import Image from 'next/image';
import { nftCards } from '@/Constant/Data';
import VerifiedIcon from '@mui/icons-material/Verified';
import {motion} from 'framer-motion'
import SectionWrapper from '@/HOC/SectionWrapper';
import { fadeIn } from '@/Utils/Motions/motion';

const NftCards = () => {
  return (
    <section className="sm:px-20 px-6 sm:py-16 py-6">
    <div className='flex justify-between items-center text-[#fff] sm:text-[1.3em] xm:text-[1em] text-[12px] font-semibold'>
        <TextShowCase fontSize=''>Top <span className='font-serif'>NFT's</span> now</TextShowCase>

        <Link href="/viewcards">
        <TextShowCase fontSize='cursor-pointer'>View all <TrendingFlatIcon /></TextShowCase>
        </Link>
        </div>

        <section className="flex flex-wrap mt-12 justify-center">
          {nftCards.map((item, index) => (
        <motion.div variants={fadeIn("up", "spring", index * 0.45, 0.70 )} className='text-white py-5 px-2' key={item.id}>        
        <Image src={item.TopNft} alt="NFT's" width={1000} height={1000} className='w-[322px] h-[305px] object-cover' />
     <div className="p-4 shadow-sm shadow-neutral-400 nft__gradient">
        <div className="p-0">
        <div className="flex justify-between py-3 items-center">
          <TextShowCase fontSize='font-bold sm:text-[1em] xm:text-[14px] text-[9px]'>{item.Desc}</TextShowCase>
          <p className='sm:text-xs xm:text-[12px] text-[8px] text-neutral-400'>Auction Ends in</p>
        </div>

        <div className="flex items-center justify-between">
          <div className='flex items-center'>
          <Image src={item.userPic} alt='avater' width={500} height={500} className='rounded-[50%] xm:h-[36px] h-[25px] xm:w-[36px] w-[25px] object-cover' />
          <h2 className='font-medium sm:text-sm xm:text-sm text-xs'>{item.UserName} <VerifiedIcon style={{ color: ' #4671ff'}} className='xm:text-[15px] text-[11px]'/></h2>
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
        <p className='mt-5 text-[11px] text-neutral-300'>Reserve price</p>

        <div className="flex justify-between items-center py-[1.2px]">
          <div className='flex items-center'>
          <Image src='/Ethereum-logo.png' alt='' width={500} height={500} className='w-6 h-6 object-cover xm:flex hidden' />
          <p className='text-[12px] font-bold'>{item.crypto} <span className="text-neutral-400 xm:text-[10px] text-[7px]">{item.cryptoNum}</span></p>
          </div>
          <a href="https://www.behance.net/search/projects/nft%20website%20ui%20ux" target='_blank'>
          <TextShowCase fontSize='xm:p-2 p-[2px] font-bold text-center sm:text-[15px] xm:text-[14px] text-[10px] button___gradient border-y-2 border-r-2 border-l-2 border-l-[#5e66ff] border-fuchsia-300'>Place Bid <TrendingFlatIcon /></TextShowCase>
          </a>
        </div>
        </div>
        </motion.div>
              ))};
  
        </section>

    </section>
  
)}

export default SectionWrapper(NftCards);