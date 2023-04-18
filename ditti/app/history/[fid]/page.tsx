"use client";
import React, { useEffect, useState } from "react";
import UnfollowerRow from "../../components/UnfollowerRow";

export default function WhoUnfollowedMePage({ params }) {
  const [unfollowerData, setUnfollowerData] = useState([]);

  useEffect(() => {
    async function fetchUnfollowers() {
      const response = await fetch(
        `http://localhost:3000/api/history/${params.fid}/follower/removed`
      );
      const data = await response.json();

      setUnfollowerData(data);
    }

    fetchUnfollowers();
  }, []);

  return (
    <div>
      <h1>Who Unfollowed Me</h1>
      {unfollowerData.map(({ id, created_at, removed }) => (
        <div key={id}>
          <h2>{new Date(created_at).toLocaleString()}</h2>
          {removed.map((user) => (
            <UnfollowerRow key={user.id} user={user} />
          ))}
        </div>
      ))}
    </div>
  );
}
