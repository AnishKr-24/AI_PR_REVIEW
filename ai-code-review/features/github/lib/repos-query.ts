import { useQuery } from "@tanstack/react-query";

export const githubReposInfiniteQuery = {
  queryKey: ["github", "repos"],
  queryFn: async () => ({ repos: [], totalCount: 0 }),
};

export function useGithubRepos() {
  return useQuery(githubReposInfiniteQuery);
}
