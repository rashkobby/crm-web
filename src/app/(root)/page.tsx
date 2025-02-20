import CreatePost from "@/components/Feed/CreatePost";
import Posts from "@/components/Feed/Posts";
import Announcements from "@/components/Feed/new/announcements";
import TechieLeaderboard from "@/components/Feed/new/techieLeaderboard";

export default function FeedPage() {
  return (
    <div className="grid lg:grid-cols-feed justify-center w-full h-full px-4 font-tt-hoves">
      <section className="hidden xl:flex p-8">
        <TechieLeaderboard />
      </section>
      <section className="w-full h-[calc(100vh-80px)] scrollbar overflow-y-scroll flex flex-col border-l border-r border-st-gray dark:border-st-grayDark">
        <div className="h-14 shrink-0 flex-row px-2 flex items-center border-b border-st-gray dark:border-st-grayDark">
          <h3 className="text-secondary dark:text-primary text-4xl font-tt-hoves font-semibold tracking-wider">
            Feed
          </h3>
        </div>
        <CreatePost />
        <Posts />
      </section>
      <section className="hidden xl:flex p-8 h-[calc(100vh-80px)] overflow-y-scroll scrollbar">
        <Announcements />
      </section>
    </div>
  );
}
