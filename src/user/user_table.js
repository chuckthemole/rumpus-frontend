const React = require('react');
import useSWR from 'swr';

import api from '../api';

const fetcher = (url, config) =>
  api(url, config).then((res) => res.data);


function UserTable() {
    const { data, error } = useSWR(
        "/view/user_table",
        fetcher
    );

    console.log(data);
    if (error) return <p>An error occurred</p>;
    if (!data) return <p>Loading</p>;
   
    // return (
    //     <div className="columns">
    //         {data}
    //     </div>
    // )
}

export default UserTable;