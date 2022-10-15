// function createDreamTeam(members) {
//     if (members.length === 0) throw new NotImplementedError('Not implemented');
//     let latterMemberTeam = [];
//     for (let i = 0; i < members.length; i++) {
//         if (typeof (members[i]) == 'string') {
//             let nameMemberTeam = members[i].trim();
//             latterMemberTeam.push(nameMemberTeam[0].toUpperCase());
//         }
//         latterMemberTeam.sort();
//     }
//     let nameTeam = '';
//     for (let j = 0; j < latterMemberTeam.length; j++) {
//         nameTeam += latterMemberTeam[j];
//     }
//     console.log(nameTeam);
//     return nameTeam;

// };

// createDreamTeam([
//     ['David Abram'],
//     ['Robin Attfield'],
//     'Thomas Berry',
//     ['Paul R.Ehrlich'],
//     'donna Haraway',
//     ' BrIaN_gOodWiN  ',
//     {
//         0: 'Serenella Iovino'
//     },
//     'Erazim Kohak',
//     '  val_plumwood',
// ])

//   // 'BDETV';