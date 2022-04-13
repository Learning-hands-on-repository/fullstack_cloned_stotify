import useSWR from "swr";
import fetcher from "./fetcher";

// Wherever wa want to show user information, we can use this hook. and it will automatically update data every time /me got update, dot need another api call to fetch
export const useMe = () => {
  const { data, error } = useSWR("/me", fetcher);

  return {
    user: data,
    isLoading: !data && !error,
    isError: error,
  };
};

export const usePlaylist = () => {
  const { data, error } = useSWR("/playlist", fetcher);

  return {
    playlists: (data as any) || [],
    isLoading: !data && !error,
    isError: error,
  };
};
