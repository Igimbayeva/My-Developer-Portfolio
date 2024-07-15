import React from "react";

export const Navbar = () => {
    return (
        <>
           
            <div class="bg-light">
                <div class="container-fluid">
                    <div class='d-flex justify-content-between align-items-center'>
                        <div class="p-2"><a class="navbar-brand" href="/"><img src="https://htmljstemplates.com/static_files/images/logos/logo_5.png" height="90" alt="" /></a></div>
                        <div class="p-2 text-end">
                            <div class="d-inline-block mx-3 compact align-middle">
                                {/* <span class="fs-3 fontStyle1">Call Us Today</span><br />
                                <span class="fs-5 fontStyle2">1-800-324-1234</span> */}
                            </div>
                            <div class="d-inline-block mx-3 d-none d-lg-inline-block d-md-inline-block d-sm-inline-block">
                                <a href="/contact">
                                <button class="btn btn-outline-danger pt-2 px-4 compact">
                                   
                                    <span class="fontStyle1 fs-3"><i class="fas fa-pen-alt"></i> CONTACT ME</span>
                                </button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <nav class="flex justify-between px-20 py-10 items-center bg-gradient-to-r from-red-400 to-red-700">
                <h1 class="text-xl text-gray-100 font-bold">My Portfolio</h1>
                <div class="flex items-center">
        
                    <ul class="flex items-center space-x-6">
                        <a href="/"><li class="font-semibold text-gray-200">About</li></a>
                        <a href="/projects"><li class="font-semibold text-gray-200">Projects</li></a>
                        {/* <a href="/contact"><li class="font-semibold text-gray-200">Contact</li></a> */}
                        <a href="/resume"><li class="font-semibold text-gray-200">Resume</li></a>
                    </ul>
                </div>
            </nav>
            {/* <div class="bg-danger fontStyle2">
                <button type="button" data-bs-toggle="collapse" data-bs-target="#bottomNavbar" class="btn btn-danger w-100 d-lg-none d-md-none d-sm-block d-xs-block rounded-0 p-2"><i class="fas fa-bars me-2"></i> Menu</button>
                <div class="collapse navbar-collapse px-2" id="bottomNavbar">
                    <div class="container-fluid">
                        <div class="d-flex justify-content-between align-items-center" id="removeFlex">
                            <div class="flex-grow-1">
                                <a href="#" class="active d-inline-block customNav">Home</a>
                                <a href="#" class="d-inline-block customNav">Services</a>
                                <a href="#" class="d-inline-block customNav">Pricing</a>
                                <a href="#" class="d-inline-block customNav">About Us</a>
                                <a href="#" class="d-inline-block customNav">Partners</a>
                                <a href="#" class="d-inline-block customNav">Blog</a>
                                <a href="#" class="d-inline-block customNav">Contact Us</a>
                            </div>
                            <div class="m-3">
                                <i class="fas fa-search text-white fs-6"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}

 
        </>
    )
}