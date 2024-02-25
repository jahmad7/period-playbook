'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'

import { Container } from '@/components/Container'
import backgroundImage from '@/images/background-features.png'
import screenshotExpenses from '@/images/screenshots/expenses.png'
import screenshotPayroll from '@/images/screenshots/payroll.png'
import screenshotReporting from '@/images/screenshots/reporting.png'
import screenshotVatReturns from '@/images/screenshots/vat-returns.png'

import pad from '@/images/promos/pad.png'
import tampon from '@/images/promos/tampon.png'
import cup from '@/images/promos/cup.png'
import underwear from '@/images/promos/underwear.png'
import control from '@/images/promos/control.png'

const products = [
  {
    title:
      'Disposable pads can be a great place to start as a first-time menstruator.',
    description:
      'Pads can be safely worn for 4-6 hours and it is not recommended to exceed 8 hours. When changing your pad, your used pad can be disposed of in the garbage. One side of a disposable pad has a soft absorbent paper-like material and the other has sticky strips (almost like tape!) and this side is attached to your underwear.',
    image: pad,
    altText: 'disposable pad',
    buttonText: 'Explore Pads',
    optimized: ['Ease of Use'],
  },
  {
    title:
      'A tampon is inserted inside of the vagina and absorbs blood internally',
    description:
      'A thin bundle of cotton and absorbent materials that is inserted inside of the vagina. Since the tampon is inserted inside the vagina and absorbs blood internally, it is generally preferred for activities such as swimming. Since a tampon is inserted inside your body, more care may need to be taken when using tampons to lessen the risk of TTS',
    image: tampon,
    altText: 'tampon',
    buttonText: 'Explore Tampons',
    optimized: ['Activity'],
  },
  {
    title: 'A menstrual cup can be reused time and time again',
    description:
      'Small cup-shaped silicone device that is inserted into the vagina. When inserted properly the cup-shape of the device creates a seal around the vaginal wall and the cup sits in place collecting menstrual blood until the user removes it. There is often more of a learning curve with menstrual cups than with disposable menstrual management options.',
    image: cup,
    altText: 'cup',
    buttonText: 'Explore Cups',
    optimized: ['Re-Usability'],
  },
  {
    title:
      'Financially & environmentally sustainable option for the disposable pad user',
    description:
      'Reusable pads, menstrual underwear, and menstrual rags are all made from an absorbent material and are used externally. Reusable pads are generally shaped just like disposable pads with two wings and some way to fasten the pad to your underwear. Menstrual underwear works in the same way but has absorbent material sewn into a pair of underwear.',
    image: underwear,
    altText: 'underwear',
    buttonText: 'Explore Underwear',
    optimized: ['Sustainability', 'Re-Usability'],
  },
  {
    title:
      'Hormonal birth control can help with heavy, long, painful, or unpredictable cycles',
    description:
      'There are two types of hormonal birth control that can be used to manage menstruation. The first is the hormonal birth control pill. This is an oral contraceptive that is taken daily for three weeks, with one week off. The birth control pill usually referred to as “the pill” contains small amounts of estrogen and progestin which affect your menstrual cycle in a couple of ways.',
    image: control,
    altText: 'birth control',
    buttonText: 'Explore Birth Control',
    optimized: ['Pain Relief', 'Reduction'],
  },
]

export function PrimaryFeatures() {
  let [tabOrientation, setTabOrientation] = useState<'horizontal' | 'vertical'>(
    'horizontal',
  )

  useEffect(() => {
    let lgMediaQuery = window.matchMedia('(min-width: 1024px)')

    function onMediaQueryChange({ matches }: { matches: boolean }) {
      setTabOrientation(matches ? 'vertical' : 'horizontal')
    }

    onMediaQueryChange(lgMediaQuery)
    lgMediaQuery.addEventListener('change', onMediaQueryChange)

    return () => {
      lgMediaQuery.removeEventListener('change', onMediaQueryChange)
    }
  }, [])

  return (
    <section
      id="options"
      aria-label="option that suits your body, cycle, and lifestyle"
      className="relative overflow-hidden bg-[#BF0A34] pb-28 sm:py-32"
    >
      {/* <Image
        className="absolute left-1/2 top-1/2 max-w-none translate-x-[-44%] translate-y-[-42%]"
        src={backgroundImage}
        alt=""
        width={2245}
        height={1636}
        unoptimized
      /> */}
      <Container className="relative">
        {products.map((product, productIndex) => (
          <div
            className="flex max-w-2xl flex-row pt-20 md:mx-auto md:text-center xl:max-w-none"
            key={productIndex}
          >
            <div className="basis-1/3 pr-10">
              <Image
                src={product.image}
                alt={product.altText}
                unoptimized
                className="rounded-lg"
                // height={500}
              />
            </div>
            <div className="basis-2/3 text-left">
              <h2 className="font-display text-3xl tracking-tight text-white sm:text-4xl md:text-5xl">
                {product.title}
              </h2>
              <p className="mt-6 text-lg tracking-tight text-red-100">
                {product.description}
              </p>
              <div className="flex flex-row pt-5 font-bold text-white">
                <p>Optimized for: </p>
                {product.optimized.map((op, opIndex) => (
                  <div
                    className="ml-2 rounded-md bg-red-200 pl-2 pr-2 text-sm text-black"
                    key={opIndex}
                  >
                    <p>{op}</p>
                  </div>
                ))}
              </div>
              <div className="pt-12">
                <button
                  type="button"
                  className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                >
                  {product.buttonText}
                </button>
              </div>
            </div>
          </div>
        ))}
      </Container>
    </section>
  )
}
