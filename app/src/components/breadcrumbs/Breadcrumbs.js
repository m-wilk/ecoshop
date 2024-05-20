import { Link } from "react-router-dom";

const Breadcrumbs = ({ values = [] }) => {
  const lastValuesIndex = values.length - 1;
  return values.map(({ label, path }, index) => (
    <>
      <Link key={path} to={path} className="pe-2 text-decoration-none">
        {label}
      </Link>
      {lastValuesIndex !== index ? <span className="pe-2">/</span> : null}
    </>
  ));
};

export default Breadcrumbs;


/**
 * HOW TO USE
 *           
  <Breadcrumbs
      values={[
        {
          label: "Home",
          path: "/",
        },
        {
          label: "Dashboard",
          path: "/user-dashboard",
        },
      ]}
    />
 */