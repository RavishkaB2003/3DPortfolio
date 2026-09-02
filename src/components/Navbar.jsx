import React, {useState} from 'react'
import {navLinks} from '../constants'

const Navbar = () => {
     
    //Track the active link
    const [active, setActive] = useState("");
    //Controls mobile menu toggle
    const [toggle, setToggle] = useState(false);



  return (
    <nav className="fixed top-4 left-0 right-0 z-50 max-w-6xl mx-auto px-4 sm:px-6">
        {/* ThreEUI frosted glass dock container*/}
        <div className=" w-full flex justify-between items-center bg-card-surface/80 backdrop-blur-md border border-white/10 py-3 px-6 rounded-xl shadow-2xl">
        {/*Monogram logo (SCROLLS TO TOP WHEN CLICKED)*/}
        <a
          href="#"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }} className="flex items-center gap-2 group cursor-pointer">  Ravishka

            <span className="font-mono text-xs text-kage-orange bg-kage-orange/10 px-2 py-0.5 rounded border border-kage-orange/20">
            //DEV
            </span>
        </a>

        {/*Desktop Links and Mobile Menu*/ }
        <ul className="list-none hidden md:flex flex-row gap-8 items-center">
            {navLinks.map((link) => (
                <li
                key={link.id}
                className={`${
                    active === link.title ? "text-white" : "text-muted-slate"
                } font-mono text-sm tracking-wider uppercase hover:text-kage-orange transition-colors duration-200 cursor-pointer`}
                onClick = {() => setActive(link.title)}>
                <a href={`#${link.id}`}>{`// ${link.title}`}</a>
                
                </li>
            ))}
        </ul>

            {/* Resume CTA Button */}
            <div className="hidden md:flex items-center">
                <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-xs text-white bg-white/5 hover:bg-kage-orange/20 hover:text-kage-orange
                border border-white/15 hover:border-kage-orange/50 px-4 py-2 rounded-lg transition-all duration-300 shadow-sm">
                    [RESUME_CV.PDF] ↗

                </a>

            </div>

            {/* Mobile Menu Toggle */}
            <div className="md:hidden flex items-center">
                <button
                onClick={ () => setToggle(!toggle)}
                className="text-zinc-300 hover:text-white p-1 font-mono text-xs focus:outline-none cursor-pointer">
                    {toggle ? "[X]" : "[MENU]"}
                </button>


                {/* Mobile Floating Dropdown Drawer*/}
                <div className={`${
                    !toggle ? "hidden" : "flex"
                } p-6 bg-card-surface/95 backdrop-blur-xl border border-white/15 absolute top-16 right-0 min-w-[200px] rounded-xl z-50 shadow-2xl flex-col gap-4 animate-in fade-in
                slide-in-from-top-2 duration-200`}>
                    <ul className="list-none flex flex-col gap-4">
                        {navLinks.map((link) => (
                            <li 
                            key={link.id}
                            className={`${active === link.title ? "text-kage-orange font-bold" : "text-zinc-300"}
                            font-mono text-xs tracking-wider uppercase hover:text-kage-orange transition-colors cursor-pointer`}
                                 onClick={ () => {
                                    setToggle(false);
                                    setActive(link.title);
                                }
                                 }
                                    >

                                <a href = {`#${link.id}`}>{`// ${link.title}`}

                                </a>

                            </li>

                        ))}

                    </ul>

                    <div className="pt-3 border-t border-white/10">
                    <a
                    href="/resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer" //security best practice for external links to avoid reverse tabnabbing attacks
                    className="font-mono text-xs text-kage-orange block text-center py-2 bg-kage-orange/10 hover:bg-kage-orange/20 rounded border border-kage-orange/20 transition-all"
                    >
                        [RESUME_CV.PDF] ↗

                    </a>

                    </div>
            

                </div>
            </div>


            </div>

    </nav>
    
  )
}

export default Navbar