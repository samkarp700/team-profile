const Engineer = require('../lib/Engineer');

test('creates a container for Engineer Info', () => {
    //must inherit Employee info + github username
    const engineer = new Engineer('Joe', 3, 'joe@engineeremail.com', 'joesgithubname');

//expect engineer manager name
 expect(engineer.name).toEqual(expect.any(String));
 //expect engineer ID
 expect(engineer.id).toEqual(expect.any(Number));
 //expect email address
 expect(engineer.email).toEqual(expect.any(String));
 //expect github name
 expect(engineer.gitName).toEqual(expect.any(String));

 console.log(`Engineer Name: ${engineer.name}`);
 console.log(`Engineer ID: ${engineer.id}`);
 console.log(`Engineer Email: ${engineer.email}`);
 console.log(`Engineer GitHub Name: ${engineer.gitName}`);
});
