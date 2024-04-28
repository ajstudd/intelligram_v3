import { Box } from "@chakra-ui/react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import React , {useState} from "react";

export default function Leaderboard() {

  const [minimumScoreToFollow, setMinimumScoreToFollow] = useState('0');
  const [lockAllPosts, setLockAllPosts] = useState(false);
  const [optOutOfDailyChallenges, setOptOutOfDailyChallenges] = useState(false);
    return (
      <div className="flex flex-col py-2 gap-2 h-max w-full">
        <Box>
          <h1 className="font-bold text-2xl">Settings</h1>
        </Box>
        <Box>
          <h2>Minimum Score to Follow</h2>
          <input
          className="w-full bg-gray-100 rounded-sm p-2 overflow-hidden focus:outline-none"
          placeholder="Enter Password"
          value={minimumScoreToFollow} onChange={(e) => setMinimumScoreToFollow(e.target.value)}
        />
        </Box>
        <Box display={'flex'} flexDirection={'row'} gap={'5'} alignItems={'center'}>
          <h2>Lock All Posts</h2>
          <input
          className=" bg-gray-100 rounded-sm gap-2 w-4 h-4"
          type="checkbox" checked={lockAllPosts} onChange={(e) => setLockAllPosts(e.target.checked)}
        />
          {/* <input type="checkbox" checked={lockAllPosts} onChange={(e) => setLockAllPosts(e.target.checked)} /> */}
        </Box>
        <Box display={'flex'} flexDirection={'row'} gap={'5'}  alignItems={'center'}>
          <h2>Opt Out of Daily Challenges</h2>
          <input
          className=" bg-gray-100 rounded-sm w-4 h-4"
          type="checkbox" checked={optOutOfDailyChallenges} onChange={(e) => setOptOutOfDailyChallenges(e.target.checked)}
        />
          {/* <input type="checkbox" checked={optOutOfDailyChallenges} onChange={(e) => setOptOutOfDailyChallenges(e.target.checked)} /> */}
        </Box>
      </div>
    );
  }