import { RefAttributes } from "react";
import { Link as RDLink, LinkProps as RDLinkProps } from "react-router-dom";
type RLinkProps = RDLinkProps & RefAttributes<HTMLAnchorElement>;

type Query = { [key: string]: string };

interface LinkProps extends RLinkProps {
  query?: Query;
  direct?: boolean;
}

const Link = (props: LinkProps) => {
  const { to, query, direct, ...rprop } = props;

  let nameRoute = to;

  if (!!direct) {
    nameRoute = `/${nameRoute}`;
  }
  if (!!query) {
    const queries = Object.keys(query).map((ele) => `${ele}=${query[ele]}`);
    nameRoute = nameRoute + "?" + queries.join("&");
  }

  return (
    <RDLink {...rprop} to={nameRoute}>
      {rprop.children}
    </RDLink>
  );
};

export default Link;
