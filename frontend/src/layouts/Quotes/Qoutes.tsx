export const Qoutes = () => {
    return (
        
        <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
            <div className="container py-5">
                <div className="row g-5">
                    <div className="col-lg-7">
                        <div className="section-title position-relative pb-3 mb-5">
                            <h5 className="fw-bold text-info text-uppercase">Request A Quote</h5>
                            <h1 className="mb-0">Need A Free Quote? Please Feel Free to Contact Us</h1>
                        </div>
                        <div className="row gx-3">
                            <div className="col-sm-6 wow zoomIn" data-wow-delay="0.2s">
                                <h5 className="mb-4"><i className="fa fa-reply text-info me-3"></i>Reply within 24 hours</h5>
                            </div>
                            <div className="col-sm-6 wow zoomIn" data-wow-delay="0.4s">
                                <h5 className="mb-4"><i className="fa fa-phone-alt text-info me-3"></i>24 hrs telephone support</h5>
                            </div>
                        </div>
                        <p className="mb-4">Eirmod sed tempor lorem ut dolores. Aliquyam sit sadipscing kasd ipsum. Dolor ea et dolore et at sea ea at dolor, justo ipsum duo rebum sea invidunt voluptua. Eos vero eos vero ea et dolore eirmod et. Dolores diam duo invidunt lorem. Elitr ut dolores magna sit. Sea dolore sanctus sed et. Takimata takimata sanctus sed.</p>
                        <div className="d-flex align-items-center mt-2 wow zoomIn" data-wow-delay="0.6s">
                            <div className="bg-info d-flex align-items-center justify-content-center rounded h-60 w-60">
                                <i className="fa fa-phone-alt text-white"></i>
                            </div>
                            <div className="ps-4">
                                <h5 className="mb-2">Call to ask any question</h5>
                                <h4 className="text-info mb-0">+91 6284 7020 41</h4>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-5">
                        <div className="main-color rounded h-100 d-flex align-items-center p-5 wow zoomIn" data-wow-delay="0.9s">
                            <form>
                                <div className="row g-3">
                                    <div className="col-xl-12">
                                        <input type="text" className="form-control bg-light border-0 h-60" placeholder="Your Name"/>
                                    </div>
                                    <div className="col-12">
                                        <input type="email" className="form-control bg-light border-0  h-60" placeholder="Your Email"/>
                                    </div>
                                    <div className="col-12">
                                        <select className="form-select bg-light border-0">
                                            <option>Select A Service</option>
                                            <option value="1">Service 1</option>
                                            <option value="2">Service 2</option>
                                            <option value="3">Service 3</option>
                                        </select>
                                    </div>
                                    <div className="col-12">
                                        <textarea className="form-control bg-light border-0" placeholder="Message"></textarea>
                                    </div>
                                    <div className="col-12">
                                        <button className="btn btn-dark w-100 py-3" type="submit">Request A Quote</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}