import { ReactComponent as Compaire } from "../../assets/img/compaire.svg";
import { ReactComponent as WishList } from "../../assets/img/wishlist.svg";
import { ReactComponent as Card } from "../../assets/img/card.svg";
import { ReactComponent as User } from "../../assets/img/user-profile.svg";

const HeaderCardItems = () => {
  return (
    <div className="d-flex  align-items-center gap-3"> 
      <div>
        <a href="#">
          <span>
            <Compaire />
          </span>
        </a>
      </div>
      <div>
        <a href="#">
          <span>
            <WishList />
          </span>
        </a>
      </div>
      <div>
        <a href="#">
          <span>
            <Card />
          </span>
        </a>
      </div>
      <div>
        <a href="#">
          <span>
            <User />
          </span>
        </a>
      </div>
    </div>
  );
};

export default HeaderCardItems;
