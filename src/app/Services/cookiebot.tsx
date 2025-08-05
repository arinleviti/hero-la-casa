import ReactCookieBot from "react-cookiebot";


const domainGroupID = "875fb5f8-87be-41db-8302-6fba0521f651";

export default function CookiebotLoader() {
  return (
    <ReactCookieBot
      domainGroupId={domainGroupID}

      language="it"

    />
  );
}