import { useLocation } from "react-router-dom";

export const UrlParameter = () => {
  const location = useLocation();
  console.log(location);
  const { search } = useLocation();
  console.log(search);
  const query = new URLSearchParams(search);
  console.log(query);
  return (
    <div>
      <h1>Query Parameterページです</h1>
      <p>クエリパラメーターは {query.get("name")} です</p>
    </div>
  );
};
