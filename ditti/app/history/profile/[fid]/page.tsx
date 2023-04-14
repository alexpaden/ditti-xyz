"use client";
import { useEffect, useState } from "react";
import styled from "styled-components";

type Profile = {
  id: number;
  username: string | null;
  display_name: string | null;
  bio: string | null;
  following_count: number | null;
  follower_count: number | null;
  pfp_url: string | null;
};

type ApiResponse = {
  profiles: Profile[];
};

export default function ProfilePage({ params }) {
  const [profiles, setProfiles] = useState<Profile[]>([]);

  useEffect(() => {
    async function fetchProfiles() {
      const res = await fetch(
        `http://localhost:3000/api/v1/history/profile/${params.fid}}`
      );
      const { profiles } = await res.json();
      setProfiles(profiles);
    }

    fetchProfiles();
  }, []);

  return (
    <Container>
      <h1>Profile Page</h1>
      <ProfileList>
        {profiles.map((profile) => (
          <ProfileRow key={profile.id}>
            {profile.pfp_url && (
              <ProfileImage src={profile.pfp_url} alt="Profile Picture" />
            )}
            <ProfileDetails>
              <ProfileName>@{profile.username}</ProfileName>
              <ProfileBio>"{profile.bio}"</ProfileBio>
              <ProfileFollowers>
                {profile.follower_count} Followers
              </ProfileFollowers>
              <ProfileFollowing>
                {profile.following_count} Following
              </ProfileFollowing>
            </ProfileDetails>
          </ProfileRow>
        ))}
      </ProfileList>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ProfileName = styled.p`
  color: black;
  font-weight: bold;
`;

const ProfileBio = styled.p`
  color: black;
  font-style: italic;
`;

const ProfileFollowers = styled.p`
  color: black;
  font-size: 0.75rem;
`;

const ProfileFollowing = styled.p`
  color: black;
  font-size: 0.75rem;
`;

const ProfileList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
`;

const ProfileRow = styled.li`
  display: flex;
  align-items: center;
  height: 150px;
  width: 60%;
  margin: 10px;
  padding: 10px;
  background-color: #f1f1f1;
  border-radius: 10px;
`;

const ProfileImage = styled.img`
  height: 100%;
  margin-right: 10px;
  border-radius: 50%;
`;

const ProfileDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-grow: 1;
`;
