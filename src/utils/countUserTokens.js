export const extractGroupMembers = (data, groupMembers = {}) => {
  const regex = /\[\d{2}\/\d{2}\/\d{4}, \d{2}:\d{2}:\d{2}\] ([^:]+):/;
  const tickRegex = /✅/;

  const groupName = data[0].match(regex)[1];

  for (let line of data) {
    const matchResult = line.match(regex);
    if (matchResult && matchResult.length > 1) {
      const name = matchResult[1].trim();
      if (groupMembers[name] === undefined) {
        groupMembers[name] = 0;
      }
      const matchTick = line.match(tickRegex);

      if (matchTick && matchTick.length >= 1) {
        groupMembers[name]++;
      } else {
        continue;
      }
    }
  }
  delete groupMembers[groupName];
  return groupMembers;
};
