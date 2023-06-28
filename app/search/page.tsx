import getSongsByTitle from "@/actions/getSongsByTitle";
import Header from "@/components/Header";
import SearchInput from "@/components/SearchInput";
import SearchContent from "./components/SearchContent";

interface SearchProps {
  searchParams: {
    title: string;
  };
}

const Search = async ({ searchParams }: SearchProps) => {
  const songs = await getSongsByTitle(searchParams.title);

  return (
    <div
      className="
    bg-neutral-900
    rounded-lg
    h-fulll
    w-full
    overflow-hidden
    overflow-y-hidden
    "
    >
      <Header className="from-bg-neutral-900">
        <div className="mb-2 flex-col gap-y-6">
          <h1 className="text-white text-3xl font-semibold">Search</h1>
        </div>
        <SearchInput />
      </Header>
      <SearchContent songs={songs} />
    </div>
  );
};

export default Search;