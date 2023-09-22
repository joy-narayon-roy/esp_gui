import React, { useEffect, useState } from "react";
import Row from "./Row";

export default function Body({ path, set_path }) {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchdata() {
      try {
        const url = new URL("http://192.168.1.4/goto");
        url.searchParams.append("path", path);
        const res = await fetch(url);
        const data = await res.json();
        setData(data);
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    }
    fetchdata();
  }, [path]);

  return (
    <div className="body">
      <aside></aside>
      <div className="folders">
        <div className="header">
          <div className="name">Name</div>
        </div>
        <div className="list">
          {loading && <h3>Loading</h3>}
          {error && <h3>Error</h3>}
          {!loading &&
            !error &&
            data &&
            data.map((fileName, i) => (
              <Row key={i} path={path} set_path={set_path} name={fileName} />
            ))}
        </div>
      </div>
    </div>
  );
}
