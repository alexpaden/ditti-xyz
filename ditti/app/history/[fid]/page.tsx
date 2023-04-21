'use client';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import UnfollowerRow from '../../components/UnfollowerRow';

export default function WhoUnfollowedMePage({ params }) {
  const [unfollowerData, setUnfollowerData] = useState([]);
  const [username, setUsername] = useState('');
  const router = useRouter();

  useEffect(() => {
    async function fetchUnfollowers() {
      const response = await fetch(
        `/api/history/${params.fid}/follower/removed`
      );
      const data = await response.json();

      setUnfollowerData(data);
    }

    fetchUnfollowers();
  }, []);

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const redirectToNewPage = async () => {
    try {
      // Convert username to fid
      const response = await fetch(`/api/user/${username}`);
      const data = await response.json();
      router.push(`/history/${data}`);
    } catch (error) {
      console.error(error);
      console.log('User not found');
    }
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <div style={{ margin: 'auto' }}>
        <h1>Who Unfollowed Me</h1>
        <input
          type="text"
          value={username}
          onChange={handleUsernameChange}
          placeholder="Enter username"
        />
        <button onClick={redirectToNewPage}>Go to user</button>
        {unfollowerData.map(({ id, created_at, removed }) => (
          <div key={id}>
            <h2>{new Date(created_at).toLocaleString()}</h2>
            {removed.map((user) => (
              <UnfollowerRow key={user.id} user={user} />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
