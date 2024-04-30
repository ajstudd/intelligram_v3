
export default function Leaderboard() {

  const profiles = [
    {
      imageUrl : 'https://www.w3schools.com/howto/img_avatar.png',
      name: 'John Doe',
      score : 100,
      rank : 1
    },
    {
      imageUrl : 'https://www.w3schools.com/howto/img_avatar.png',
      name: 'Jane Doe',
      score : 90,
      rank : 2
    },
    {
      imageUrl : 'https://www.w3schools.com/howto/img_avatar.png',
      name: 'John Doe',
      score : 80,
      rank : 3
    },
    {
      imageUrl : 'https://www.w3schools.com/howto/img_avatar.png',
      name: 'Jane Doe',
      score : 70,
      rank : 4
    },
    {
      imageUrl : 'https://www.w3schools.com/howto/img_avatar.png',
      name: 'John Doe',
      score : 60,
      rank : 5
    },
    {
      imageUrl : 'https://www.w3schools.com/howto/img_avatar.png',
      name: 'Jane Doe',
      score : 50,
      rank : 6
    },
    {
      imageUrl : 'https://www.w3schools.com/howto/img_avatar.png',
      name: 'John Doe',
      score : 40,
      rank : 7
    },
    {
      imageUrl : 'https://www.w3schools.com/howto/img_avatar.png',
      name: 'Jane Doe',
      score : 30,
      rank : 8
    },
    {
      imageUrl : 'https://www.w3schools.com/howto/img_avatar.png',
      name: 'John Doe',
      score : 20,
      rank : 9
    },
    {
      imageUrl : 'https://www.w3schools.com/howto/img_avatar.png',
      name: 'Jane Doe',
      score : 10,
      rank : 10
    }
  ]

    return (
      <div className="flex flex-col items-center">
        <div className="flex flex-col w-full max-w-[600px]">
          <div className="flex flex-col w-full bg-white rounded-lg shadow-md p-4">
            <div className="flex flex-row items-center justify-between">
              <h1 className="text-2xl font-bold">Leaderboard</h1>
            </div>
            <div className="flex flex-col w-full mt-4">
              <div className="flex flex-row items-center justify-between bg-gray-100 p-2 rounded-md">
                <div className="flex flex-row items-center">
                  <h2 className="text-lg font-semibold">Rank</h2>
                </div>
                <div className="flex flex-row items-center">
                  <h2 className="text-lg font-semibold">Name</h2>
                </div>
                <div className="flex flex-row items-center">
                  <h2 className="text-lg font-semibold">Score</h2>
                </div>
              </div>
              {profiles.map((profile, index) => (
                <div key={index} className="flex flex-row items-center justify-between bg-gray-100 p-2 rounded-md mt-2">
                  <div className="flex flex-row items-center">
                    <h2 className="text-lg font-semibold">{profile.rank}</h2>
                  </div>
                  <div className="flex flex-row items-center">
                    <img className="w-8 h-8 rounded-full" src={profile.imageUrl} alt="profile" />
                    <h2 className="text-lg font-semibold ml-2">{profile.name}</h2>
                  </div>
                  <div className="flex flex-row items-center">
                    <h2 className="text-lg font-semibold">{profile.score}</h2>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }