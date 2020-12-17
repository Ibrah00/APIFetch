import React, {useState, Component} from 'react';
const APIKEY = "AIzaSyCT9h1i4eDT1jlhciFC7-2TgQPXVSLaXiA";
const APIKEY2 = "AIzaSyCAUJtBF_CaUsiG0MhCHV30rRKyJhEiPqY";

function Search (){
    const [value, setValue] = useState("");
        const fetchData = () => {
            fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=${value}&key=${APIKEY}`)
            .then(response => response.json)
            .then(response=>{
                console.log(response);
                
            })
        }

    return(
        <div className="wrap">
            <form className="formInline">
                <div className="searchBar">
                    <input className="innerInput" type="text" text={value} onChange={(text) => setValue(text)} placeholder="Search Here"></input>
                    <button className="button2" onClick={fetchData()}> Search </button>
                    {/* onChange={this.searchChange} */}
                </div>
            </form>
        </div>
    )
}

    export default Search;
    