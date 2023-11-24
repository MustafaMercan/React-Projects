import React from 'react'
import landPhoto from '../assets/test_profile.jpg'
import abaoutPagePh from '../assets/aboutPhotoV2.png'
import { useEffect } from 'react'
const About = () => {


    useEffect(() => {
        const handleScroll = (event) => {
            const threshold = window.innerHeight / 1.10;
            const elements = document.querySelectorAll('.animate-on-scroll');

            elements.forEach(element => {
                const elementTop = element.getBoundingClientRect().top;
                if (elementTop < threshold) {
                    element.classList.add('element-visible');
                    element.classList.remove('element-hidden');
                }
                else {
                    element.classList.add('element-hidden');
                    element.classList.remove('element-visible');
                }
            })
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, [])



    return (
        <div className=' bg-navbarColor'>
            <section className='bg-cover bg-center text-center text-white py-12 h-screen/1.5 flex items-center justify-center '
                style={{
                    backgroundImage: `url(${landPhoto})`,
                    filter: 'grayscale(15%)'
                }}
            >
                <div className='flex items-center flex-col justify-center
               h-full w-2/3 bg-green-100 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-30 border border-gray-800
               animate-on-scroll element-hidden
                "
                '>
                    <h1 className=' font-semibold text-5xl text-gray-600'>About Us</h1>
                    <p className='font-semibold text-xl my-12 text-black'>
                        <i>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur cursus cursus commodo. <br />
                            Ut maximus tempus enim, sit amet rhoncus erat commodo quis. Donec vulputate at sapien at consequat. <br />
                            Donec mattis auctor orci sed accumsan<br />
                            Ut maximus tempus enim, sit amet rhoncus erat commodo quis. Donec vulputate at sapien at consequat. <br />
                            Donec mattis auctor orci sed accumsan<br />
                        </i>
                    </p>
                </div>
            </section>

            <section className='flex flex-col items-center justify-center '>
                <div className='grid grid-cols-2 grid-rows-1 gap-4 animate-on-scroll element-hidden'>
                    <div className='flex flex-col items-center justify-center pl-24 '>
                        <h1 className=' font-semibold text-5xl text-gray-600 animate-on-scroll element-hidden'>About Us</h1>
                        <p className='font-semibold text-xl my-12 animate-on-scroll element-hidden'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur cursus cursus commodo.
                            Ut maximus tempus enim, sit amet rhoncus erat commodo quis. Donec vulputate at sapien at consequat.
                            Donec mattis auctor orci sed accumsan
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur cursus cursus commodo.
                            Ut maximus tempus enim, sit amet rhoncus erat commodo quis. Donec vulputate at sapien at consequat.
                            Donec mattis auctor orci sed accumsan                            Ut maximus tempus enim, sit amet rhoncus erat commodo quis. Donec vulputate at sapien at consequat.
                            Donec mattis auctor orci sed accumsan


                        </p>
                    </div>
                    <div className='flex items-center justify-center animate-on-scroll element-hidden'>
                        <img className='w-2/3' src={abaoutPagePh} />

                    </div>
                </div>

                <div className='grid grid-cols-2 grid-rows-1 gap-4 animate-on-scroll element-hidden'>
                    <div className='flex items-center justify-center'>
                        <img className='w-2/3' src={abaoutPagePh} />

                    </div>
                    <div className='flex flex-col items-center justify-center pr-24 '>
                        <p className='font-semibold text-xl my-12'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur cursus cursus commodo.
                            Ut maximus tempus enim, sit amet rhoncus erat commodo quis. Donec vulputate at sapien at consequat.
                            Donec mattis auctor orci sed accumsan
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur cursus cursus commodo.
                            Ut maximus tempus enim, sit amet rhoncus erat commodo quis. Donec vulputate at sapien at consequat.
                            Donec mattis auctor orci sed accumsan                            Ut maximus tempus enim, sit amet rhoncus erat commodo quis. Donec vulputate at sapien at consequat.
                            Donec mattis auctor orci sed accumsan


                        </p>
                    </div>

                </div>
            </section>



        </div>
    )
}

export default About
