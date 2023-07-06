import './Contact.css';
export const Contact = () => {
    return (
        <div className="container-fluid wow fadeInUp" data-wow-delay="0.1s">
            <div className="row py-5 bg-header h-600">
                <div className="col-12 text-center">
                    <div className='div-center'>
                        <h1 className="display-4 text-white animated zoomIn">Contact Us</h1>
                        <a href="" className="h5 text-white">Home</a>
                        <i className="far fa-circle text-white px-2"></i>
                        <a href="" className="h5 text-white">Contact</a>
                    </div>
                </div>
            </div>
            <div className="container py-5">
                <div className="section-title text-center position-relative pb-3 mb-5 mx-auto">
                    <h5 className="fw-bold text-info text-uppercase">Contact Us</h5>
                    <h1 className="mb-0">If You Have Any Query, Feel Free To Contact Us</h1>
                </div>
                <div className="row g-5 mb-5">
                    <div className="col-lg-4">
                        <div className="d-flex align-items-center wow fadeIn" data-wow-delay="0.1s">
                            <div className="bg-info d-flex align-items-center justify-content-center rounded h-6- w-6-">
                                <i className="fa fa-phone-alt text-white"></i>
                            </div>
                            <div className="ps-4">
                                <h5 className="mb-2">Call to ask any question</h5>
                                <h4 className="text-info mb-0">+91 6284 7020 41</h4>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="d-flex align-items-center wow fadeIn" data-wow-delay="0.4s">
                            <div className="bg-info d-flex align-items-center justify-content-center rounded h-6- w-6-">
                                <i className="fa fa-envelope-open text-white"></i>
                            </div>
                            <div className="ps-4">
                                <h5 className="mb-2">Email to get free quote</h5>
                                <h4 className="text-info mb-0">team.aaravix@gmail.com</h4>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="d-flex align-items-center wow fadeIn" data-wow-delay="0.8s">
                            <div className="bg-info d-flex align-items-center justify-content-center rounded h-6- w-6-">
                                <i className="fa fa-map-marker-alt text-white"></i>
                            </div>
                            <div className="ps-4">
                                <h5 className="mb-2">Visit our office</h5>
                                <h4 className="text-info mb-0">Ludhiana, Punjab, India</h4>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row g-5">
                    <div className="col-lg-6 wow slideInUp" data-wow-delay="0.3s">
                        <form>
                            <div className="row g-3">
                                <div className="col-md-6">
                                    <input type="text" className="form-control border-0 bg-light px-4 h-60" placeholder="Your Name" />
                                </div>
                                <div className="col-md-6">
                                    <input type="email" className="form-control border-0 bg-light px-4 h-60" placeholder="Your Email" />
                                </div>
                                <div className="col-12">
                                    <input type="text" className="form-control border-0 bg-light px-4 h-60" placeholder="Subject" />
                                </div>
                                <div className="col-12">
                                    <textarea className="form-control border-0 bg-light px-4 h-60 py-3" placeholder="Message"></textarea>
                                </div>
                                <div className="col-12">
                                    <button className="btn btn-info w-100 py-3" type="submit">Send Message</button>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="col-lg-6 wow slideInUp" data-wow-delay="0.6s">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d109552.36514720826!2d75.78663333627543!3d30.900326335865252!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391a837462345a7d%3A0x681102348ec60610!2sLudhiana%2C%20Punjab!5e0!3m2!1sen!2sin!4v1675767857743!5m2!1sen!2sin" width="600" height="450" loading="lazy"></iframe>
                    </div>
                </div>
            </div>
        </div>
    );
}