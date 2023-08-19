export const countFrequentEmojis = (data) => {
  const emojiRegex =
    /(?:[\uD800-\uDBFF][\uDC00-\uDFFF])|(?:\p{Emoji_Presentation})/gu;
  const TIME_REGEX = /^\[.*\]/gm;
  const chatLogs = data.split(TIME_REGEX);
  const emojiCounts = {};

  for (const line of chatLogs) {
    let [user, text] = line.split(":");
    if (!text) {
      continue;
    }
    const emojis = text.match(emojiRegex);
    if (emojis) {
      emojis.forEach((emoji) => {
        emojiCounts[emoji] = (emojiCounts[emoji] || 0) + 1;
      });
    }
  }

  return emojiCounts;
};
