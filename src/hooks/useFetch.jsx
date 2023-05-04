import { useUserContext } from "./useUserContext";

const api = "https://api.github.com/users/";

const headers = {
  method: "GET",
  headers: {
    Accept: "application/vnd.github+json",
  },
};

export const useFecth = () => {
  const { setUser, setUserRepositories, setLoading } = useUserContext();

  const getUser = async (username) => {
    setLoading(true);
    try {
      const res = await fetch(`${api}${username}`, headers);
      const data = await res.json();
      setUser(data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const getUserRepositories = async (username) => {
    try {
      const res = await fetch(`${api}${username}/repos`, headers);
      const data = await res.json();
      setUserRepositories(data);
    } catch (error) {
      console.log(error);
    }
  };

  return { getUser, getUserRepositories };
};
