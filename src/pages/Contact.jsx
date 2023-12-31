import React from 'react'
import photo1 from '../assets/photo1.jpg'
import photo2 from '../assets/photo2.jpg'
import photo3 from '../assets/photo3.jpg'


const Contact = () => {
    return (
        <div className='bg-navbarColor'>
            <section className='grid grid-cols-3 grid-rows-1 gap-4   bg-navbarColor pt-24 pb-24'>
                <div className='flex items-center justify-center'>
                    <img src={photo1} className='w-72 h-72 transform -rotate-10 border-8 border-white' />
                </div>
                <div className='flex flex-col items-center justify-center '>
                    <h1 className=' font-mainTextFont text-2xl font-semibold text-gray-600 my-4'>Sağlıklı Yaşamaya Hemen Bugün Başlayın</h1>
                    <h2 className='font-mainTextFont text-xl  text-gray-800 font-semibold mb-6'><i>test@gmail.com</i></h2>
                    <p className='text-black font-mainTextFont text-base font-medium text-center'>

                        Küçük bir adım atarak, büyük bir fark yaratabilirsiniz. Sağlıklı yaşam tarzı, kendinizi daha iyi hissetmenize ve enerjinizi artırmanıza yardımcı olabilir. Sağlıklı yaşamaya bugün başlayın, daha sağlıklı ve mutlu bir geleceğin temellerini şimdi atın.
                    </p>
                </div>
                <div className='flex items-center justify-center'>
                    <img src={photo2} className='w-72 h-72 transform rotate-10 border-8 border-white' />
                </div>
            </section>

            <section className='w-screen flex items-center justify-center mt-12 pb-24'>
                <div className='w-2/3 flex  items-center justify-evenly'>
                    <div className='flex flex-col items-start justify-center gap-4'>
                        <img src={photo3} className='w-72 rounded-3xl' />
                        <h1 className='flex font-mainTextFont font-semibold'>
                            <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
                                width="24" height="24" viewBox="0 0 499.000000 500.000000"
                                className='mx-2'
                                preserveAspectRatio="xMidYMid meet">

                                <g transform="translate(0.000000,500.000000) scale(0.100000,-0.100000)"
                                    fill="#000000" stroke="none">
                                    <path d="M2324 4850 c-848 -67 -1608 -581 -1967 -1332 -29 -61 -58 -108 -65
-108 -10 0 -12 -7 -9 -21 3 -12 -7 -53 -22 -93 -110 -279 -167 -678 -142 -981
19 -237 78 -505 151 -690 308 -783 977 -1338 1795 -1490 336 -62 632 -56 973
21 672 150 1272 617 1585 1232 176 346 261 698 261 1087 0 232 -16 360 -74
591 -172 690 -671 1283 -1327 1579 -359 162 -774 235 -1159 205z m546 -179
c63 -11 157 -31 208 -45 89 -24 262 -85 262 -92 0 -2 -31 -20 -70 -39 l-70
-35 -163 0 c-122 0 -167 -3 -182 -14 -11 -8 -60 -95 -109 -194 -118 -240 -122
-230 115 -308 l116 -37 159 40 160 40 111 -38 c61 -20 208 -56 327 -79 l216
-43 94 63 c52 34 101 63 109 64 26 2 256 -299 240 -315 -4 -4 -93 -35 -197
-68 l-189 -62 -191 31 c-105 17 -201 33 -214 35 -15 4 -47 43 -99 120 -65 98
-81 117 -112 126 -23 7 -126 9 -278 7 l-243 -3 -139 -139 c-77 -77 -141 -149
-144 -162 -2 -13 14 -154 37 -313 34 -244 44 -293 61 -310 25 -24 582 -261
613 -261 13 0 87 16 165 36 l141 35 86 -58 85 -59 5 -160 5 -159 158 -310 157
-310 0 -164 0 -164 92 -93 91 -93 -29 -43 c-49 -73 -314 -332 -414 -405 -423
-311 -902 -459 -1424 -440 -277 10 -495 55 -740 153 -551 220 -994 649 -1222
1182 -157 367 -215 755 -169 1142 20 173 70 399 84 384 3 -3 22 -51 41 -107
l35 -102 190 -128 c105 -70 199 -134 210 -141 19 -14 18 -16 -35 -70 l-55 -57
-3 -142 -3 -143 90 -180 c66 -133 96 -183 114 -191 14 -7 100 -26 191 -43
l166 -32 0 -376 0 -375 80 -201 c44 -111 87 -211 95 -223 19 -28 284 -118 320
-109 47 12 55 48 55 249 l0 183 150 113 c91 67 155 122 160 137 6 14 10 73 10
131 l0 107 88 86 c48 47 119 120 158 161 l70 74 37 190 c41 208 44 251 23 281
-13 17 -31 20 -173 24 l-158 5 -111 184 c-62 102 -120 191 -130 198 -14 10
-79 13 -286 13 l-269 0 -64 135 c-99 209 -124 223 -228 125 -36 -33 -67 -60
-71 -60 -3 0 -6 34 -6 76 l0 75 -80 84 -81 85 3 67 3 68 232 31 c127 17 243
34 256 38 14 3 119 62 234 131 l208 125 63 103 c35 56 89 144 120 196 l57 94
117 39 c81 27 121 46 131 61 16 25 85 231 88 262 5 60 -20 89 -84 99 -319 48
-434 71 -469 94 -21 14 -38 28 -38 32 0 19 275 81 445 100 128 14 472 4 605
-19z m-1132 -216 l99 -66 189 -30 c104 -16 194 -32 201 -34 9 -3 7 -20 -8 -62
l-19 -59 -103 -33 c-56 -18 -112 -42 -124 -53 -12 -11 -72 -105 -134 -208
l-112 -187 -186 -110 -186 -111 -280 -40 c-348 -51 -325 -35 -325 -222 0 -71
4 -140 9 -153 6 -14 42 -56 80 -94 l71 -70 0 -66 c0 -39 -4 -67 -10 -67 -6 0
-81 47 -167 105 l-157 105 -62 181 -62 181 26 56 c170 372 501 741 857 957
107 65 266 145 288 145 9 0 61 -29 115 -65z m1879 -53 c157 -90 424 -295 423
-325 -1 -7 -29 -29 -63 -51 l-61 -38 -161 31 c-88 17 -227 52 -308 78 l-148
47 -159 -39 -160 -39 -62 20 c-44 14 -63 25 -62 37 1 8 23 54 48 101 l47 86
147 1 147 0 135 69 c74 38 140 69 145 69 6 0 47 -21 92 -47z m-208 -841 c48
-73 81 -113 99 -119 15 -6 136 -29 269 -52 l241 -40 225 75 c123 41 227 75
230 75 9 0 61 -105 95 -192 76 -194 110 -317 139 -498 25 -160 24 -509 -1
-670 -44 -281 -143 -557 -289 -803 l-40 -68 -63 62 -62 62 -4 161 -3 161 -157
310 -158 310 0 158 c0 87 -4 167 -10 177 -11 20 -252 184 -287 194 -12 4 -81
-8 -162 -29 -77 -19 -150 -35 -161 -35 -16 0 -482 192 -497 204 -1 1 -16 94
-32 206 -17 113 -33 219 -36 237 -5 29 2 39 88 127 l94 96 205 0 205 0 72
-109z m-2067 -1065 c19 -14 62 -16 289 -16 l267 0 103 -172 c56 -95 115 -185
130 -200 27 -27 30 -28 148 -28 112 0 121 -1 121 -19 0 -10 -12 -74 -26 -142
l-26 -124 -162 -163 -161 -162 -3 -118 -4 -117 -121 -90 c-67 -49 -136 -103
-154 -119 l-33 -28 0 -160 0 -160 -31 6 c-72 14 -78 21 -150 201 l-68 170 -1
403 c0 238 -4 411 -10 421 -14 26 -46 36 -232 72 -91 17 -171 35 -176 38 -5 3
-39 66 -76 138 l-66 133 0 89 0 88 153 152 152 151 57 -114 c32 -63 68 -122
80 -130z"/>
                                </g>
                            </svg>Based In Istanbul</h1>
                        <h2 className='flex my-2 font-mainTextFont font-semibold'>
                            <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
                                width="24" height="24" viewBox="0 0 506.000000 493.000000"
                                preserveAspectRatio="xMidYMid meet"
                                className='mx-2'
                            >

                                <g transform="translate(0.000000,493.000000) scale(0.100000,-0.100000)"
                                    fill="#000000" stroke="none">
                                    <path d="M2493 4425 c-35 -15 -63 -60 -63 -99 0 -14 12 -39 28 -56 23 -26 43
-34 136 -55 387 -87 728 -291 982 -588 196 -229 324 -482 388 -772 29 -127 34
-138 77 -161 37 -19 65 -18 100 3 45 27 53 66 33 170 -41 222 -164 512 -305
721 -250 367 -673 675 -1091 792 -57 16 -250 62 -253 60 0 -1 -14 -7 -32 -15z"/>
                                    <path d="M1086 4204 c-79 -25 -123 -59 -294 -228 -181 -178 -250 -270 -282
-374 -121 -391 147 -1072 668 -1702 595 -718 1573 -1256 2108 -1159 32 6 97
29 144 51 80 39 96 52 272 232 233 237 253 270 253 416 0 144 -13 164 -330
481 -143 143 -278 271 -300 284 -67 40 -157 59 -225 47 -101 -18 -152 -53
-316 -214 l-152 -149 -60 30 c-236 119 -572 422 -781 704 -56 76 -140 215
-147 244 -5 19 17 45 129 155 149 147 199 217 223 309 13 51 14 73 5 118 -24
120 -45 147 -335 437 -228 228 -280 275 -330 298 -74 35 -178 43 -250 20z
m172 -213 c45 -24 503 -483 526 -528 40 -80 24 -108 -179 -313 -109 -110 -176
-186 -180 -203 -35 -136 180 -472 506 -794 197 -194 378 -330 574 -431 101
-53 139 -61 191 -42 15 6 104 86 198 179 183 179 213 199 284 186 32 -6 75
-45 299 -268 221 -222 263 -269 274 -305 21 -71 -2 -107 -193 -302 -181 -184
-217 -209 -333 -231 -174 -32 -474 52 -810 225 -527 272 -981 684 -1329 1206
-244 367 -396 754 -396 1012 0 120 23 199 79 271 61 80 315 325 353 342 46 20
92 18 136 -4z"/>
                                    <path d="M2435 3727 c-41 -41 -45 -75 -16 -124 21 -33 21 -33 126 -59 281 -67
521 -250 658 -504 42 -76 69 -149 92 -240 23 -96 35 -119 66 -135 42 -22 83
-18 117 10 37 31 43 59 27 143 -29 147 -118 341 -219 475 -104 139 -277 283
-431 360 -78 39 -260 97 -325 104 -58 6 -60 5 -95 -30z"/>
                                </g>
                            </svg>

                            05337675656</h2>
                    </div>
                    <form className='flex flex-col gap-14 items-center'>
                        <input type='text' placeholder='İsim' className='text-center w-screen/3 h-12 border-2 rounded-3xl border-gray-300' />
                        <input type='text' placeholder='Soyisim' className=' text-center w-screen/3 h-12 border-2 rounded-3xl border-gray-300' />
                        <input type='text' placeholder='Email' className=' text-center w-screen/3 h-12 border-2 rounded-3xl border-gray-300' />
                        <input type='text' placeholder='Telefon Numarası' className=' text-center w-screen/3 h-12 border-2 rounded-3xl border-gray-300' />

                        <button className='text-lg bg-buttonColor py-4 w-80 my-5 rounded-2xl text-white font-mainTextFont'>
                            Start With Today
                        </button>
                    </form>
                </div>
            </section>

        </div>
    )
}

export default Contact
