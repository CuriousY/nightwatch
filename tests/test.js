module.exports = {
  'Login test new tours': function (client) {
    client
      .url('http://newtours.demoaut.com/')
      .setValue('input[name="userName"]', 'mercury')
      .setValue('input[name="password"]', 'mercury')
      .click('input[name="login"]')
      .assert.title('Find a Flight: Mercury Tours:')
      .end()    
    }
};