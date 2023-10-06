import React from 'react'
import heroBG from '../assets/hero_bg.jpg'
import heroSpinLogo from '../assets/hero_anime_logo.gif'
import Buttons from '../components/Buttons'
import top_card_1 from '../assets/top_card_1.jpg'
import top_card_2 from '../assets/top_card_2.webp'
import top_card_3 from '../assets/top_card_3.webp'
import sec_card_1 from '../assets/sec_card_1.webp'
import sec_card_2 from '../assets/sec_card_2.webp'
import sec_card_3 from '../assets/sec_card_3.webp'
import sec_card_4 from '../assets/sec_card_4.webp'
import third_sec_bg from '../assets/third_sec_bg.webp'
import fin_ico from '../assets/vault_ico.png'
import bag_ico from '../assets/bag_ico.webp'
import heart_ico from '../assets/heart_ico.webp'
import setting_ico from '../assets/setting_ico.webp'
import chat_agent from '../assets/agent_chat.png'
    // customer stories
import smart_rent_logo from '../assets/smart_rent_logo.webp'
import f1_logo from '../assets/f1_logo.png'
import yearup_logo from '../assets/yearup_logo.png'
import casey_logo from '../assets/casey_logo.png'
import canva_logo from '../assets/canva_logo.png'
    // courses
import course_1 from '../assets/course_1.png'
import course_2 from '../assets/course_2.png'
import course_3 from '../assets/course_3.png'
    // learn more
import crm_img from '../assets/crm_img.webp'
import learn_more_1 from '../assets/learn_more_1.webp'
import learn_more_2 from '../assets/learn_more_2.jpg'
import learn_more_3 from '../assets/learn_more_3.webp'
import crm_bg from '../assets/crm_bg.webp'
    // events
import events_1 from '../assets/events_1.jpg'
import events_2 from '../assets/events_2.webp'
import events_3 from '../assets/events_3.webp'

const Hero = () => {

    const top_article_data = [
        {label: 'Meet Salesforce Starter: the simple, powerful CRM suite.', img: top_card_1, link: 'Watch demo', },
        {label: 'Join the Salesblazer movement.', img: top_card_2, link: 'Get started', },
        {label: 'Boost small business growth with Data + AI + CRM + Trust.', img: top_card_3, link: 'Explore the solution', },
    ]

    const sec_article_data = [
        {heading: 'Small Business', label: 'Sell smarter and provide support faster in a single app.', img: sec_card_1, link: 'Watch demos', },
        {heading: 'sales', label: 'Close more deals faster and unleash growth with AI-driven sales.', img: sec_card_2, link: 'Watch demos', },
        {heading: 'Service', label: 'Easily scale service and boost productivity with AI support.', img: sec_card_3, link: 'Watch demos', },
        {heading: 'See all products', label: 'Connect with customers in a new way with Customer 360 driven by AI.', img: sec_card_4, link: 'Watch demos', },
      
    ]

    const sec_ico_data = [
        {label: 'Financial Services', ico: fin_ico},
        {label: 'Retail', ico: bag_ico},
        {label: 'Healthcare & Life Sciences', ico: heart_ico},
        {label: 'Manufacturing', ico: setting_ico},
    ]

    const cust_stories = [
       {icon: smart_rent_logo},
       {icon: f1_logo},
       {icon: yearup_logo},
       {icon: casey_logo},
       {icon: canva_logo},

    ]

    const courses = [
        {heading: 'Salesforce CRM', label: 'Learn how to use customer relationship management (CRM) software to grow your business.', ico: course_1, link: 'Start learning'},
        {heading: 'Sales Cloud Basics', label: 'Grow your business, boost productivity, and make smart decisions with Sales Cloud.', ico: course_2, link: 'Start learning'},
        {heading: 'Service Cloud Basics', label: 'Supercharge your agents with omni-channel tools and an intelligent service platform.', ico: course_3, link: 'Start learning'},
    ]

    const learn_tools = [
        {heading: 'Read our latest State of Sales Report.', label: 'Learn how more than 7,700 sales professionals are finding success now.', img: learn_more_1, notif: 'Report', link: 'Read the report'},
        {heading: 'Stream our Connections video series.', label: 'Hear how innovative marketers are connecting with customers in all new ways.', img: learn_more_2, notif: 'Video Series', link: 'Watch the series'},
        {heading: 'Boost sales with Lead Management 101.', label: 'Get expert advice on lead management.', img: learn_more_3, notif: 'Webinar', link: 'Join the webinar'},
    ]

    const events = [
        {label: 'Immerse yourself in passion, learning, and expertise.', notif: 'Events', img: events_1, link: 'Explore events'},
        {label: 'Learn all about Customer 360 in hands-on workshops.', notif: 'Customer Sucess', img: events_2, link: 'Check out our workshops'},
        {label: 'Get in-depth guidance on how to drive growth with Salesforce, free.', notif: 'Webinars', img: events_3, link: 'Find webinars'},
    ]

    const collab = [
        {label: 'Sales Cloud - Getting Started', notif: 'Group', link: 'Join us now'},
        {label: 'Salesforce Platform', notif: 'Group', link: 'Join us now'},
        {label: '#Customer360', notif: 'Topic', link: 'Follow topic'},
    ]


  return (
    <>
        <section>
            <div className='h-[550px] w-full' style={{background: `url(${heroBG}) center/cover no-repeat`}}>
                <div className='py-20 h-full w-full relative'>
                    <div className='hero_disc w-1/2 px-14 grid gap-5 text-[#032d60]'>
                        <h1 className='text-5xl font-semibold'>Data + AI + CRM + Trust = more sales and happier customers.</h1>
                        <p className='text-lg'>Discover how unified data and trusted AI help you connect with customers in a whole new way.</p>
                        <div className='flex gap-4 pt-7'>
                            <Buttons name={'Start free trial'} styles={'bg-[#0176d3] text-neutral-100 py-3 px-7 text-xs font-bold'}/>
                            <Buttons name={'Watch demos'} styles={'text-[#0176d3] border-[#0176d3] py-3 px-7 border-2 text-xs font-bold'}/>
                        </div>
                    </div>
                    <div className='right_spin_logo absolute right-0 top-24 w-[500px] h-auto mr-10'>
                        <img src={heroSpinLogo} alt="img" className='w-full h-full object-cover object-center' />
                    </div>
                </div>
            </div>
        </section>

        <section className='my-14'>
            <article className='grid gap-10 text-[#032d60]'>
                <h1 className='text-center text-3xl font-bold'>What's new at Salesforce?</h1>
                <ul className='flex justify-center items-center gap-7'>
                  {top_article_data.map((item, i) => (
                      <li key={i} className='shadow shadow-[#0176d3]/50 w-[16.9rem] h-[21.5rem] p-2 rounded-lg'>
                      <div className='w-64 h-full shadow-lg m-auto shadow-neutral-500/30 rounded-lg'>
                      <img src={item.img} alt="img" className='w-full h-auto rounded-t-lg m-auto' />
                      <h1 className='mt-10 mb-7 font-bold px-8 h-[60px]'>{item.label}</h1>
                      <a href="" className='underline px-8 text-xs font-semibold'>{item.link}</a>
                      </div>
                  </li>
                
                  ))}
                </ul>
            </article>
        </section>

        <section className='my-14'>
            <article className='grid gap-10 text-[#032d60]'>
                <h1 className='text-center text-3xl font-bold w-[550px] m-auto'>Learn how Salesforce helps you work smarter and grow faster.</h1>
                <ul className='flex justify-center items-center gap-10'>
                  {sec_article_data.map((item, i) => (
                      <li key={i} className='shadow shadow-[#0176d3]/50 w-[12rem] h-[21rem] p-2 rounded-lg'>
                      <div className='w-44 h-full m-auto'>
                      <img src={item.img} alt="img" className='w-full h-auto rounded-t-lg m-auto' />
                      <h1 className='font-bold pt-5 pb-1'>{item.heading}</h1>
                      <p className="text-xs h-[4.5rem]">{item.label}</p>
                      <a href="" className='underline text-xs font-semibold'>{item.link}</a>
                      </div>
                  </li>
                
                  ))}
                </ul>
            </article>
        </section>

        <section className='mt-14'>
            <div className='grid gap-5 text-[#032d60]'>
                <h1 className='text-center text-3xl font-bold w-[550px] m-auto'>Find innovations for any industry.</h1>
                <p className="text-xs text-center">Whatever your industry, we offer solutions to modernize your business, save time, and lower costs.</p>
                <Buttons name='See all industries' styles='border-2 border-[#0176d3] px-5 py-2 w-fit m-auto text-[#0176d3] text-xs font-bold text-xs font-bold '/>
                <ul className="flex justify-center gap-5 pt-7">
                    {sec_ico_data.map((items, i) => (
                        <div key={i} className='w-[5.9rem]'>
                            <li className='w-[60px] h-[60px] m-auto shadow shadow-neutral-300 rounded-full'>
                                <img src={items.ico} alt="img" className='w-8 relative top-1/2 -translate-y-1/2 h-auto m-auto'/>
                            </li>
                            <p className='text-xs font-semibold pt-3 text-center'>{items.label}</p>
                        </div>

                        
                    ))}
                </ul>
                <div className='h-full w-full max-lg:hidden'>
                    <img src={third_sec_bg} alt="img" className='w-full h-full object-cover object-center'/>
                </div>
            </div>
        </section>
{/* customer stories */}
        <section className='mb-14'>
            <div className='grid gap-5 text-[#032d60] w-[550px] m-auto'>
            <h1 className='text-center text-3xl font-bold'>See how Salesforce customers become customer companies.</h1>
                <p className=' m-auto text-center text-sm'>Learn how companies of every description are connecting with customers in a whole new way.</p>
                <Buttons name='See all customer stories' styles='border-2 border-[#0176d3] px-5 py-2 w-fit m-auto text-[#0176d3] text-xs font-bold '/>
            </div>
            <ul className='flex items-center justify-center gap-4 py-10'>
                {cust_stories.map((item, i) => (
                    <div key={i} className='w-32 shadow-md shadow-neutral-300 px-4 py-1 rounded'>
                        <img src={item.icon} alt="img" className='w-full h-full object-cover object-center'/>
                    </div>
                ))}
            </ul>
        </section>
{/* learning skills */}
        <section className='mb-14'>
            <article className='grid gap-5 text-[#032d60]  h-full w-[900px] m-auto'>
                <div className=' w-[580px] m-auto'>
                    <h1 className='text-center text-3xl font-bold whitespace-nowrap'>Learn valuable skills for free, with Trailhead.</h1>
                    <p className=' m-auto text-center text-sm'>Follow guided learning paths and get hands-on to learn Salesforce, digital, and soft skills from anywhere.</p>
                </div>
                <div className='shadow shadow-[#0176d3]/50 rounded-lg'>
                    <div className='flex justify-center items-center gap-10 p-2 pb-7'>
                        {courses.map((items, i) => (
                            <ul key={i} className='w-64 h-72 shadow shadow-neutral-400 rounded-lg p-3'>
                                <li className="w-20 h-20 mb-3 m-auto">
                                    <img src={items.ico} alt="icon" className='w-full h-full object-cover object-center'/>
                                </li>
                                <span className='text-[10px] rounded-xl p-1 bg-[#81b7f871]'>Module</span>
                                <div className="grid gap-3 pt-3">
                                    <h1 className='font-bold'>{items.heading}</h1>
                                    <p className='text-xs h-16'>{items.label}</p>
                                </div>
                                <a href="" className='underline text-xs font-semibold'>{items.link}</a>
                            </ul>
                        ))}
                    </div>
                </div>
                    <Buttons name='Learn for free' styles='border-2 border-[#0176d3] px-5 py-2 w-fit m-auto text-xs font-bold text-[#0176d3] my-7'/>
            </article>
        </section>
{/* content for growth */}
        <section className='mb-14 relative'>
            <article className='grid gap-5 text-[#032d60] h-full '>
                <h1 className='text-center text-3xl font-bold w-[580px] m-auto'>All sorts of content. All to help you grow.</h1>
                <div className='mt-10 flex items-center justify-between w-[900px] m-auto'>
                   <div className=' grid gap-5'>
                    <h1 className='text-3xl font-bold'>What is CRM?</h1>
                    <p className='text-xs w-80'>Learn all about CRM, how it can unify all your teams, and how it drives growth and productivity across your business.</p>
                    <Buttons name='Discover CRM' styles='border-2 border-[#0176d3] px-5 py-2 w-fit text-xs font-bold text-[#0176d3] mt-3'/>
                   </div>
                    <div className='w-[28rem] h-auto rounded-lg'>
                        <img src={crm_img} alt="img" className='w-full h-full object-cover object-center' />
                    </div>
                </div>
                <div className='flex items-center justify-center gap-7 mt-10'>
                    {learn_tools.map((items, i) => (
                        <ul key={i} className='w-72 h-[425px] rounded-lg shadow bg-white'>
                            <li className='w-full h-52'>
                                <img src={items.img} alt="img" className='w-full h-full object-cover rounded-t-xl object-center'/>
                            </li>
                            <div className='px-5 py-6'>
                            <span className='text-[10px] rounded-xl py-[2px] px-2 bg-[#81b7f871]'>{items.notif}</span>
                                <h1 className='py-2 font-bold'>{items.heading}</h1>
                                <p className='text-xs h-12'>{items.label}</p>
                                <a href="" className='underline text-xs font-semibold'>{items.link}</a>
                            </div>
                        </ul>
                    ))} 
                </div>
            </article>
                <div className='absolute top-[90%] -translate-y-1/2 w-full h-fit -z-[1]'>
                    <img src={crm_bg} alt="img" className='w-full h-full object-contain object-center'/>
                </div>
        </section>
{/* events */}
        <section className='mt-48 mb-14'>
            <article className='grid gap-5 text-[#032d60] h-full '>
                <h1 className='text-center text-3xl font-bold'>Inspiring events. In-person and streaming.</h1>
                <ul className='flex justify-center items-center gap-7 pt-5'>
                  {events.map((item, i) => (
                      <li key={i} className='shadow shadow-[#0176d3]/50 w-[16.9rem] h-[23rem] p-2 rounded-lg'>
                     <div className='shadow-md shadow-neutral-400/60 h-full rounded-lg'>
                     <li className='w-full h-40'>
                                <img src={item.img} alt="img" className='w-full h-full object-cover rounded-t-xl object-center'/>
                            </li>
                            <div className='px-5 py-6'>
                            <span className='text-[10px] rounded-xl py-[2px] px-2 bg-[#81b7f871]'>{item.notif}</span>
                            <h1 className='mt-4 mb-7 font-bold h-[60px]'>{item.label}</h1>
                                <a href="" className='underline text-xs font-semibold'>{item.link}</a>
                            </div>
                     </div>
                  </li>
                
                  ))}
                </ul>
            </article>
        </section>
{/* collab */}
        <section className='mb-14'>
            <article className='grid gap-5 text-[#032d60] h-full '>
                <h1 className='text-center text-3xl font-bold w-[580px] m-auto'>Meet and collaborate with Trailblazers who share your role and interests.</h1>
                <div>
                <ul className='flex justify-center items-center w-[900px] m-auto rounded-lg gap-7 pb-5 mt-6 shadow shadow-[#0176d3]/50'>
                  {collab.map((item, i) => (
                      <li key={i} className=' w-[16.9rem] h-36 p-2 rounded-lg'>
                     <div className='shadow-md shadow-neutral-400/60 h-full rounded-lg'>
                            <div className='px-5 py-2'>
                            <span className='text-[10px] rounded-xl px-2 bg-[#81b7f871]'>{item.notif}</span>
                            <h1 className='font-bold h-12'>{item.label}</h1>
                                <a href="" className='underline text-xs font-semibold'>{item.link}</a>
                            </div>
                     </div>
                  </li>
                
                  ))}
                </ul>
                </div>
                <Buttons name='Explore Trailblazer Community' styles='border-2 m-auto border-[#0176d3] px-5 py-2 w-fit text-xs font-bold text-[#0176d3] my-7'/>
            </article>
        </section>



        {/* chat */}
        <div className='fixed bottom-8 right-10 bg-[#0176d3] rounded-3xl flex py-1 justify-between gap-3 pl-1 pr-8'>    
            <img src={chat_agent} alt="ico" className='w-6 h-6' />
            <Buttons name="Let's Chat" styles='text-white text-[9.75px] font-bold'/>
        </div>
    </>
    )
}

export default Hero