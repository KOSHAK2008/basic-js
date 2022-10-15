const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  if (members.length === 0 || typeof (members) !== Function) throw new NotImplementedError('Not implemented');
  let latterMemberTeam = [];
  for (let i = 0; i < members.length; i++) {
    if (typeof (members[i]) == 'string') {
      let nameMemberTeam = members[i].trim();
      latterMemberTeam.push(nameMemberTeam[0].toUpperCase());
    } else { throw new NotImplementedError('Not implemented') }
    latterMemberTeam.sort();
  }
  let nameTeam = '';
  for (let j = 0; j < latterMemberTeam.length; j++) {
    nameTeam += latterMemberTeam[j];
  }
  console.log(nameTeam);
  return nameTeam;

}

module.exports = {
  createDreamTeam
};
