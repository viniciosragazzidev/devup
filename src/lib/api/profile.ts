import { cache } from "react";
import { fetchAPI } from "../utils_s";

export const getProfileByUserName = cache(async (userName: string) => {
  if (!userName) {
    return null;
  }

  try {
    const profile = await fetchAPI(`/profile/${userName}`, {
      method: "GET",
      cache: "force-cache",
      next: {
        revalidate: 300,
        tags: [`profile-${userName}`],
      },
    });
    console.log(profile);

    return profile;
  } catch (error) {
    console.error(`Error fetching profile for ${userName}:`, error);
    return null;
  }
});
