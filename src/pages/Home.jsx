import React from 'react'
import mainPhoto from '../assets/mainPhoto.jpg'
import sectionPhotoV1 from '../assets/sectionPhotoV1.jpg'
import profilePhoto from '../assets/profilePhoto.jpg'
import Footer from '../components/Footer'
import { useState, useEffect, useRef } from 'react'


const Home = () => {




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
        <div>
            <main className='bg-navbarColor'>
                <section className='flex bg-navbarColor max-sm:flex-col px-36 sm:h-screen items-center justify-between max-sm:py-12 ' >
                    <figure className='bg-navbarColor w-1/2'>
                        <img className='rounded-3xl w-full' src={mainPhoto} />
                    </figure>
                    <section className='flex flex-col items-center justify-center px-12 gap-12 text-center'>
                        <p className='text-center text-lg font-bold text-gray-500 lg:text-xl font-mainTextFont'>Sağlıklı Beslenme, Işıltılı Yaşamın Anahtarı </p>
                        <h1 className='mb-4 text-4xl font-semibold leading-none tracking-tight text-gray-900 max-lg:text-2xl'> Sağlıklı Beslenme Yolculuğunda Size Eşlik Eden Adım Adım Uzmanlık ve Beslenme Çözümleri </h1>
                        <p className='text-center text-lg font-bold text-gray-500 lg:text-xl font-mainTextFont'>Sağlıklı beslenme, herkesin hayatında önemli bir yere sahip olmalıdır. Ancak bu yolculuk bazen karmaşık ve yorucu olabilir. İşte tam da burada biz devreye giriyoruz! Sizi adım adım sağlıklı beslenme yolculuğunda yönlendiriyoruz. </p>
                        
                        <button className='text-lg bg-buttonColor py-4 px-8 my-5 mx-5 rounded-2xl text-white font-mainTextFont'>
                            Start With Today
                        </button>
                    </section>

                </section>


                <section className='text-center  animate-on-scroll element-hidden mb-24'>
                    <h1 className='mb-4 text-4xl font-semibold leading-none tracking-tight text-gray-900 max-lg:text-2xl'>Sağlıklı Beslenmeyle Gelen Güçlü Yaşam</h1>
                    <p className='text-center text-lg font-semibold  text-gray-500  font-mainTextFont'>Sağlıklı beslenme, güçlü bir yaşamın anahtarıdır. Doğru beslenme alışkanlıkları, enerji seviyelerini artırır, zihinsel netliği destekler ve mutluluğu tetikler</p>
                </section>

                <section className=' max-lg:flex-col max-lg:items-center  flex justify-evenly my-12 animate-on-scroll element-hidden' >
                    <img src={sectionPhotoV1} className='rounded-full max-lg:w-1/3 aspect-square' />
                    <div className='w-1/2'>
                        <h1 className='mb-4 text-4xl font-semibold leading-none tracking-tight text-gray-900 max-lg:text-2xl text-center'>Doğru seçimleri yaparken size yardımcı olalım</h1>
                        <p className='text-center font-semibold text-gray-500 text-lg font-mainTextFont mt-8'>Sağlıklı bir yaşam tarzı için doğru seçimleri yapmak, bazen kafa karıştırıcı olabilir. Beslenme, sağlık ve genel refah konusunda doğru kararları vermek, her birey için farklılık gösterebilir. Biz sizin için en iyi olanı bulmanıza yardımcı olmak için burdayız.</p>
                        <p className='text-center font-semibold text-gray-500 text-lg font-mainTextFont mt-4'>Sağlıklı bir beslenme tarzı, kişisel ihtiyaçlarınıza uygun olmalıdır. Biz, bu noktada devreye giriyor ve size özel beslenme planınızı oluşturmak için buradayız. Hangi besinlerin bedeninizi en iyi şekilde besleyeceğini keşfetmenize yardımcı olacak bilgi ve uzmanlıkla size destek oluyoruz.</p>
                        <p className='text-center font-semibold text-gray-500 text-lg font-mainTextFont mt-4'>Doğru seçimleri yaparken size rehberlik etmek ve en iyi kararları almanızda size destek olmak için buradayız. Sağlıklı ve mutlu bir yaşam için sizinle birlikteyiz.</p>
                        <button className='text-lg bg-buttonColor py-4 px-8 my-5 mx-5 rounded-2xl text-white'>
                            Start With Today
                        </button>
                    </div>
                </section>

                <section className=' bg-navbarColor flex justify-evenly items-center max-md:flex-col animate-on-scroll element-hidden'>
                    <div className='w-1/3 max-md:w-2/3'>
                        <h1 className='text-start text-4xl font-bold leading-none tracking-tight text-gray-900 max-lg:text-2xl mt-8 mb-4'>Hi! I'm</h1>

                        <h1 className='text-start text-4xl font-bold leading-none tracking-tight text-gray-900 max-lg:text-2xl mb-8'>Mustafa Mercan</h1>
                        <p className='text-start text-lg font-normal text-gray-500 lg:text-xl max-lg:text-start ml-3 font-mainTextFont my-4'>Etiam sed varius libero, et lacinia enim. Praesent at consequat leo. Vestibulum laoreet, diam eu sollicitudin molestie, est suscipit quamEtiam sed varius libero, et lacinia enim. Praesent at consequat leo. Vestibulum laoreet, diam eu sollicitudin molestie, est suscipit quam</p>
                        <p className='text-start text-lg font-normal text-gray-500 lg:text-xl max-lg:text-start ml-3 font-mainTextFont'>Etiam sed varius libero, et lacinia enim. Praesent at consequat leo. Vestibulum laoreet, diam eu sollicitudin molestie, est suscipit quamEtiam sed varius libero, et lacinia enim. Praesent at consequat leo. Vestibulum laoreet, diam eu sollicitudin molestie, est suscipit quam</p>


                        <button className='text-lg bg-buttonColor py-4 px-8 mx-5 rounded-2xl text-white my-12'>
                            Start With Today
                        </button>
                    </div>
                    <img src={profilePhoto} className=' w-1/4 rounded-2xl max-md:w-1/2' />



                </section>

                <section className='flex flex-col items-center justify-center bg-navbarColor' >
                    <h2 className='text-center text-lg font-normal text-gray-500 lg:text-2xl my-10 font-mainTextFont animate-on-scroll element-hidden'>How We Can Work Together</h2>
                    <h1 className='text-center text-4xl font-extrabold leading-none tracking-tight text-gray-900 max-lg:text-2xl mb-10 animate-on-scroll element-hidden'>Etiam sed varius libero, et lacinia enim</h1>

                    <div className="grid grid-cols-2 grid-rows-2 w-2/4 gap-x-5 gap-y-12 max-2xl:w-2/3 max-md:grid-cols-1 max-md:grid-rows-4 max-md:w-4/5 max-md:gap-12 ">
                        <div className=' flex flex-col animate-on-scroll element-hidden'>
                            <h1 className='text-center text-xl font-normal text-gray-800 lg:text-xl font-secondryTitleFont'>Consturcter Title</h1>
                            <div className="w-full max-w-xs h-px bg-gray-300 my-6 mx-auto" />
                            <p className='text-start text-lg font-normal text-gray-500 lg:text-xl max-lg:text-start ml-3'>Etiam sed varius libero, et lacinia enim. Praesent at consequat leo. Vestibulum laoreet, diam eu sollicitudin molestie, est suscipit quamEtiam sed varius libero, et lacinia enim. Praesent at consequat leo. Vestibulum laoreet, diam eu sollicitudin molestie, est suscipit quam</p>
                        </div>

                        <div className=' flex flex-col animate-on-scroll element-hidden'>

                            <h1 className='text-center text-xl font-normal text-gray-800 lg:text-xl font-secondryTitleFont'>Consturcter Title</h1>

                            <div className="w-full max-w-xs h-px bg-gray-300 my-6 mx-auto" />
                            <p className='text-start text-lg font-normal text-gray-500 lg:text-xl max-lg:text-start ml-3'>Etiam sed varius libero, et lacinia enim. Praesent at consequat leo. Vestibulum laoreet, diam eu sollicitudin molestie, est suscipit quamEtiam sed varius libero, et lacinia enim. Praesent at consequat leo. Vestibulum laoreet, diam eu sollicitudin molestie, est suscipit quam</p>
                        </div>

                        <div className=' flex flex-col animate-on-scroll element-hidden'>
                            <h1 className='text-center text-xl font-normal text-gray-800 lg:text-xl font-secondryTitleFont'>Consturcter Title</h1>

                            <div className="w-full max-w-xs h-px bg-gray-300 my-6 mx-auto" />
                            <p className='text-start text-lg font-normal text-gray-500 lg:text-xl max-lg:text-start ml-3'>Etiam sed varius libero, et lacinia enim. Praesent at consequat leo. Vestibulum laoreet, diam eu sollicitudin molestie, est suscipit quamEtiam sed varius libero, et lacinia enim. Praesent at consequat leo. Vestibulum laoreet, diam eu sollicitudin molestie, est suscipit quam</p>
                        </div>

                        <div className=' flex flex-col animate-on-scroll element-hidden'>
                            <h1 className='text-center text-xl font-normal text-gray-800 lg:text-xl font-secondryTitleFont'>Consturcter Title</h1>

                            <div className="w-full max-w-xs h-px bg-gray-300 my-6 mx-auto" />
                            <p className='text-start text-lg font-normal text-gray-500 lg:text-xl max-lg:text-start ml-3'>Etiam sed varius libero, et lacinia enim. Praesent at consequat leo. Vestibulum laoreet, diam eu sollicitudin molestie, est suscipit quamEtiam sed varius libero, et lacinia enim. Praesent at consequat leo. Vestibulum laoreet, diam eu sollicitudin molestie, est suscipit quam</p>
                        </div>
                    </div>

                    <button className='text-lg bg-buttonColor py-4 px-8 my-10 mx-5 rounded-2xl text-white'>
                        Start With Today
                    </button>

                </section>

            </main>


        </div>
    )
}

export default Home
