export const extractGroupMembers = (data, searchToken = "✅") => {
  const groupMembers = {};
  const dateRegex = /\[\d{2}\/\d{2}\/\d{4}, \d{2}:\d{2}:\d{2}\] ([^:]+):/;
  const escapedSearchToken = searchToken.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const regexPattern = new RegExp(escapedSearchToken, "gi");

  const tickRegex = /✅/;
  const groupName = data[0].match(dateRegex)[1];

  for (let line of data) {
    const matchResult = line.match(dateRegex);
    if (matchResult && matchResult.length > 1) {
      const name = matchResult[1].trim();
      if (groupMembers[name] === undefined) {
        groupMembers[name] = 0;
      }
      const matchToken = line.match(regexPattern);

      if (matchToken && matchToken.length >= 1) {
        groupMembers[name]++;
      } else {
        continue;
      }
    }
  }
  delete groupMembers[groupName];
  return groupMembers;
};

export const extractMessageCount = (data, messageCount = {}) => {
  const regex = /\[\d{2}\/\d{2}\/\d{4}, \d{2}:\d{2}:\d{2}\] ([^:]+):/;

  const groupName = data[0].match(regex)[1];

  for (let line of data) {
    const matchResult = line.match(regex);
    if (matchResult && matchResult.length > 1) {
      const name = matchResult[1].trim();
      if (groupMembers[name] === undefined) {
        groupMembers[name] = 1;
      } else {
        groupMembers[name]++;
      }
    }
  }

  return groupMembers;
};
