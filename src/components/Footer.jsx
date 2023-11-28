import React from 'react'
import { NavLink } from 'react-router-dom'
import footer1 from '../assets/footer1.jpg'
import footer2 from '../assets/footer2.jpg'
import footer3 from '../assets/footer3.jpg'
import footer4 from '../assets/footer4.jpg'



const Footer = () => {
  return (
    <footer className='bg-navbarColor flex items-center justify-center flex-col py-24'>
      <section className='flex w-2/3  justify-between'>
        <div className='flex gap-4'>
          <h1 className='font-secondryTitleFont text-3xl font-medium text-gray-500'>Instagramdan Takip Edin</h1>
          <p className='font-mainTextFont text-xl font-medium text-gray-800'> -@instagramadress</p>
        </div>

        <div className='flex gap-4'>
          <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
            width="24" height="24" viewBox="0 0 439.000000 452.000000"
            preserveAspectRatio="xMidYMid meet">

            <g transform="translate(0.000000,452.000000) scale(0.100000,-0.100000)"
              fill="#000000" stroke="none">
              <path d="M576 4194 c-199 -43 -351 -186 -415 -389 -14 -44 -16 -222 -18 -1560
-3 -1280 -1 -1521 11 -1586 42 -221 212 -392 433 -435 111 -21 2995 -21 3105
0 223 43 392 212 434 435 20 106 16 3073 -4 3136 -67 209 -188 330 -397 397
-32 10 -361 13 -1560 15 -1314 1 -1529 0 -1589 -13z m806 -761 c65 -30 129
-92 164 -160 40 -79 46 -191 14 -275 -42 -112 -147 -198 -264 -216 -156 -25
-304 55 -372 201 -34 73 -34 200 0 272 41 90 121 162 210 191 60 20 189 13
248 -13z m1573 -792 c232 -60 361 -222 410 -515 12 -71 15 -192 15 -607 0
-506 -1 -520 -20 -539 -19 -19 -33 -20 -248 -20 l-229 0 -24 26 -24 26 -2 466
c-2 294 -6 484 -13 513 -18 76 -64 145 -117 176 -43 25 -57 28 -138 28 -100 0
-128 -10 -184 -67 -36 -36 -64 -86 -89 -157 -13 -39 -16 -117 -19 -506 -4
-452 -4 -460 -25 -482 -21 -23 -26 -23 -240 -23 l-219 0 -24 25 -25 24 0 789
c0 763 1 791 19 813 19 24 20 24 246 24 226 0 227 0 246 -24 15 -18 19 -39 19
-98 l0 -74 55 59 c62 67 147 117 245 143 92 25 290 25 385 0z m-1501 -11 c58
-22 57 2 54 -846 l-3 -776 -28 -24 c-28 -24 -30 -24 -242 -24 l-213 0 -26 31
-26 31 0 777 c0 844 -2 809 54 831 29 12 399 12 430 0z"/>
            </g>
          </svg>
          <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
            width="24" height="24" viewBox="0 0 416.000000 411.000000"
            preserveAspectRatio="xMidYMid meet">

            <g transform="translate(0.000000,411.000000) scale(0.100000,-0.100000)"
              fill="#000000" stroke="none">
              <path d="M1050 4003 c-253 -27 -440 -106 -623 -261 -183 -155 -317 -393 -360
-636 -17 -102 -17 -2090 0 -2192 70 -398 352 -723 739 -849 153 -50 151 -50
1244 -50 766 0 1043 3 1096 12 452 79 808 435 887 887 17 102 17 2090 0 2192
-78 444 -422 794 -872 886 -39 8 -358 12 -1066 13 -555 1 -1026 1 -1045 -2z
m2125 -251 c312 -88 535 -313 617 -622 l23 -85 0 -1035 0 -1035 -22 -85 c-82
-309 -313 -540 -623 -622 l-85 -23 -1035 0 c-954 0 -1040 1 -1103 18 -323 82
-555 311 -639 627 l-23 85 0 1035 0 1035 23 85 c89 335 346 573 685 635 57 11
285 13 1087 12 l1015 -2 80 -23z"/>
              <path d="M3073 3472 c-201 -72 -282 -293 -173 -471 109 -177 353 -202 501 -50
92 94 114 228 57 350 -67 147 -239 223 -385 171z m160 -240 c10 -10 20 -35 24
-55 5 -31 1 -40 -25 -67 -41 -40 -83 -41 -123 -1 -63 63 -12 160 76 146 16 -3
38 -14 48 -23z"/>
              <path d="M1910 3093 c-19 -2 -72 -13 -117 -24 -393 -93 -701 -403 -805 -807
-32 -125 -32 -377 0 -504 103 -405 405 -707 810 -810 127 -32 379 -32 504 0
406 104 707 405 810 810 32 126 32 378 0 504 -103 403 -405 707 -805 809 -81
20 -313 34 -397 22z m270 -233 c270 -39 516 -219 640 -469 284 -572 -133
-1240 -775 -1241 -321 0 -621 188 -766 481 -212 427 -33 943 399 1153 157 76
325 102 502 76z"/>
            </g>
          </svg>
          <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
            width="24" height="24" viewBox="0 0 415.000000 418.000000"
            preserveAspectRatio="xMidYMid meet">

            <g transform="translate(0.000000,418.000000) scale(0.100000,-0.100000)"
              fill="#000000" stroke="none">
              <path d="M700 4043 c-61 -10 -114 -28 -189 -64 -90 -44 -115 -62 -195 -142
-80 -80 -98 -105 -143 -197 -31 -63 -57 -133 -65 -175 -19 -103 -19 -2707 0
-2810 8 -41 35 -114 64 -175 44 -92 61 -115 142 -196 81 -80 105 -98 196 -142
58 -28 134 -57 170 -64 95 -19 2725 -19 2820 0 36 7 112 36 169 63 90 44 115
62 196 143 78 78 100 108 140 188 84 170 78 58 82 1540 4 1526 8 1453 -79
1628 -45 91 -65 117 -143 195 -78 79 -104 98 -195 142 -177 87 -99 83 -1589
82 -1091 -1 -1309 -3 -1381 -16z m2021 -993 c74 -14 163 -58 231 -113 l57 -47
86 25 c47 14 123 43 168 64 45 22 84 37 86 35 8 -7 -60 -134 -94 -174 -19 -22
-53 -57 -77 -77 l-43 -36 48 6 c27 4 89 20 139 37 50 17 92 29 94 27 10 -9
-132 -170 -194 -221 l-72 -58 0 -108 c0 -577 -383 -1158 -915 -1388 -208 -90
-386 -126 -630 -126 -205 -1 -312 15 -485 70 -99 32 -301 125 -345 158 -18 14
-14 15 55 10 88 -7 286 17 376 45 87 28 187 74 273 128 83 52 83 52 -20 71
-150 28 -308 153 -375 297 -13 28 -24 55 -24 60 0 6 30 9 78 7 42 -2 88 1 102
6 24 9 23 9 -15 22 -81 26 -142 65 -217 137 -108 105 -168 234 -168 358 l0 33
83 -28 c45 -16 101 -31 124 -35 l42 -7 -72 74 c-134 134 -185 313 -142 496 15
61 53 162 62 162 2 0 43 -41 91 -91 206 -217 488 -376 787 -443 52 -12 215
-36 242 -36 1 0 2 46 2 103 0 56 5 124 11 152 27 119 124 256 232 328 51 33
147 72 198 80 52 9 169 7 221 -3z"/>
            </g>
          </svg>
        </div>
      </section >
      <section className='w-2/3 grid grid-cols-4 grid-rows-1 gap-4'>
        <div >
          <img src={footer1} className='w-full aspect-square rounded-2xl' />
        </div>
        <div>
          <img src={footer2} className='w-full aspect-square rounded-2xl' />

        </div>
        <div>
          <img src={footer3} className='w-full aspect-square rounded-2xl' />

        </div>
        <div>
          <img src={footer4} className='w-full aspect-square rounded-2xl' />

        </div>


      </section>

      <section className='flex w-2/3  justify-evenly my-6'>

        <ul className='flex flex-col gap-4 my-4 font-mainTextFont font-medium text-gray-500 text-lg'>
          <li>Home</li>
          <li>About</li>
        </ul>


        <div className='text-center'>
          <h1 className='font-footerTitleTextFont text-4xl text-gray-600 my-4'>Diyetisyen Mustafa</h1>
          <h1 className=' font-mainTextFont text-2xl text-gray-600 mb-2'>Nutritionist & Health Coach</h1>
          <p className='text-black font-mainTextFont text-sm'>
            Write a summary of your business here. Exercise the imagination, <br />experimenting with talents, being creative.
          </p>
        </div>
        <ul className='flex flex-col gap-4 my-4 font-mainTextFont font-medium text-gray-500 text-lg'>
          <li>Services</li>
          <li>Contact</li>
        </ul>

      </section>

    </footer>
  )
}

export default Footer
