module.exports = async function(){
    const axios = require("axios")

    await axios.get('https://jsonplaceholder.typicode.com/users')
        .then((res) => {console.log(res.data)})
            .catch((err) => {console.error(err)})
}
