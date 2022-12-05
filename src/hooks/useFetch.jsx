import { useUserContext } from "./useUserContext";

export const useFecth = () => {
  const { setUser, setUserRepositories, setLoading } = useUserContext();

  const api = "https://api.github.com/users/";
  const headers = {
    method: "GET",
    headers: {
      Accept: "application/vnd.github+json",
    },
  };

  const getUser = async (username) => {
    try {
      const res = await fetch(`${api}${username}`, headers);
      const data = await res.json();
      setUser(data);
    } catch (error) {
      console.log(error);
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

  const getAllDataUser = async (username) => {
    setLoading(true);
    await getUser(username);
    await getUserRepositories(username);
    setLoading(false);
  };

  return { getAllDataUser };
};
