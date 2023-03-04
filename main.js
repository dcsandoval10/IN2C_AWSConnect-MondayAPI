import 'amazon-connect-streams'

export default function searchMonday (value) {

    alert("Este es el valor" + value)


    // let query = "query { items_by_column_values (board_id: 1234567, column_id: \"date\", column_value: \"2019-02-06\") { id name } }";

    // fetch("https://api.monday.com/v2", {
    //     method: 'post',
    //     headers: {
    //         'Content-Type': 'application/json',
    //         'Authorization': 'YOUR_API_KEY_HERE'
    //     },
    //     body: JSON.stringify({
    //         query: query
    //     })
    // })
    //     .then(res => res.json())
    //     .then(res => console.log(JSON.stringify(res, null, 2)));
}

