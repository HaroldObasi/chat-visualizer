export const countTokens = (data, searchToken) => {
  const SEARCHES = {};
  const TIME_REGEX = /^\[.*\]/gm;
  const GC_NAME = data.split(TIME_REGEX)[1].split(":")[0].trim();
  for (const line of data.split(TIME_REGEX)) {
    const curr = line.split(":");

    if (curr.length !== 2) continue;
    let [user, text] = curr;
    user = user.trim();

    if (!SEARCHES[user]) {
      SEARCHES[user] = 0;
    }

    if (text.includes(searchToken)) {
      if (SEARCHES[user] !== undefined) {
        SEARCHES[user]++;
      } else {
        SEARCHES[user] = 1;
      }
    }
  }

  delete SEARCHES[GC_NAME];
  return SEARCHES;
};
