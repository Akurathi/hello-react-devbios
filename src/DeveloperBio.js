import React from 'react';

export default function DeveloperBio(props){
    return(
        <div className="card d-inline-block text-dark" >
            <div className="card-body">
                <h5 className="card-title">{props.developer.firstName} {props.developer.lastName}'s Bio</h5>
                <p className="card-text">
                    <span className="bold">Favorite Dev Language:</span>{props.developer.favoriteDevLanguage}
                </p>
                <p className="card-text">
                    <span className="bold">Year Started:</span>{props.developer.yearStarted}
                </p>
            </div>
        </div>
    );
}