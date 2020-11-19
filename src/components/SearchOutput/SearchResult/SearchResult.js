import React from "react";
import classes from './SearchResult.module.css';

const SearchResult = (props) => {
    console.log(props);
    return (
        <article className={classes.Result}>
            <h1>Title: {props.title}</h1>
            <h3 className={classes.Author}>
                {props.authors && props.authors.map((author, index) => (
                    <p key={index}>By: {author}</p>
                ))}
            </h3>
            <a href={props.link} rel="noopener noreferrer" target="_blank">{props.link}</a>
        </article>
    );
}

export default SearchResult;