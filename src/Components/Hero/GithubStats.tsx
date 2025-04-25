import GitHubCalendar from "react-github-calendar";

const GithubStats = () => {
  return (
    <div className="w-full flex justify-center  sm:px-6 md:px-10 mt-5">
      <section className="w-full max-w-screen-xl stats-bg bg-center bg-cover p-6 sm:p-10 md:p-14 lg:p-16 border border-green-900 rounded-lg mt-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-10 text-center text-gray-800 dark:text-white">
          <div className="bg-white max-w-screen-xl dark:bg-gray-800 p-4 rounded-lg shadow-md">
            <GitHubCalendar
              username="iprabin01"
              blockSize={15}
              blockMargin={5}
              fontSize={16}
              colorScheme="dark"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default GithubStats;
