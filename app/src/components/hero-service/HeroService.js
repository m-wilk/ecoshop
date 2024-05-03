import "./hero-service.scss"
import { ReactComponent as  Service} from "../../assets/img/service-img.svg";
import { ReactComponent as  Service2} from "../../assets/img/service-img2.svg";
import { ReactComponent as  Service3} from "../../assets/img/service-img3.svg";
import { ReactComponent as  Service4} from "../../assets/img/service-img4.svg";

const HeroService = () => {
    return (
        <div className="bg-success hero-service">
            <div className="row gy-4">
                <div className="col-lg-3 col-sm-6">
                   <div className="d-flex align-items-center gap-3">
                    <div><Service /></div>
                    <div>
                        <h5 className="fw-bold">Free Shopping</h5>
                        <p className="mb-0">When ordering over $100</p>
                    </div>
                    </div> 
                </div>
                <div className="col-lg-3 col-sm-6">
                   <div className="d-flex align-items-center gap-3">
                    <div><Service2 /></div>
                    <div>
                        <h5 className="fw-bold">Free Return</h5>
                        <p className="mb-0">Get Return within 30 days</p>
                    </div>
                    </div> 
                </div>
                <div className="col-lg-3 col-sm-6">
                   <div className="d-flex align-items-center gap-3">
                    <div><Service3 /></div>
                    <div>
                        <h5 className="fw-bold">Secure Payment</h5>
                        <p className="mb-0">100% Secure Online Payment</p>
                    </div>
                    </div> 
                </div>
                <div className="col-lg-3 col-sm-6">
                   <div className="d-flex align-items-center gap-3">
                    <div><Service4 /></div>
                    <div>
                        <h5 className="fw-bold">Best Quality</h5>
                        <p className="mb-0">Original Product Guarenteed</p>
                    </div>
                    </div> 
                </div>
            </div>
        </div>
    );
}

export default HeroService;