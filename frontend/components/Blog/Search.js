import React, {useState} from 'react';
import Link from "next/link";
import {listSearch} from "../../actions/blog";
import renderHTML from 'react-render-html';

const Search = () => {
    const [values, setValues] = useState({
        search: undefined,
        searched: false,
        message: '',
        results: []
    });
    // const [results, setResults] = useState([])

    const {search, results,searched, message} = values;

    const searchSubmit = e => {
        e.preventDefault();
        listSearch({search}).then((data) => {
            setValues({...values, searched: true, results: data, message: `${data.length} blogs found`});
        });

    };

    const handleChange = e => {
        // console.log(e.target.value);
        // setResults([])
        setValues({...values, results: [], search: e.target.value, searched: false});
    };

    const searchedBlogs = (results = []) => {
        console.log(results)
        return (
            <div className="jumbotron bg-white">
                {message && <p className="pt-4 text-muted font-italic">{message}</p>}

                {results.map((blog, i) => {
                    console.log(blog.title)
                    return(
                        <>
                            <div key={i}>
                                <Link href={`/blogs/${blog.slug}`}>
                                    <a className="text-primary">{blog.title}</a>
                                </Link>
                            </div>
                        </>
                    )
                    // return (

                    // );
                })}
            </div>
        );
    };

    const searchForm = () => (
        <form onSubmit={searchSubmit}>
            <div className="row">
                <div className="col-md-8">
                    <input type="search" className="form-control" placeholder="Search blogs" onChange={handleChange}/>
                </div>

                <div className="col-md-4">
                    <button className="btn btn-block btn-outline-primary" type="submit">
                        Search
                    </button>
                </div>
            </div>
        </form>
    );

    return (
        <div className="container-fluid">
            <div className="pt-3 pb-5">{searchForm()}</div>
            {searched && <div style={{marginTop: '-120px', marginBottom: '-80px'}}>{searchedBlogs(results)}</div>}
        </div>
    );
};

export default Search;
