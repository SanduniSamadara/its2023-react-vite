import React from "react";

class Card extends React.Component<any, any> {

    render() {
        return (

            <div className={'border-solid border-2 m-5 w-72 p-5'}>
                <h1 className={"text-2xl font-bold"}>Learn Typescript(+React)</h1>
                <p className={'my-5'}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem culpa
                    dignissimos earum eius facilis fuga iure nisi optio pariatur perferendis placeat
                    aerat quo. Assumenda?</p>
                <button className={'bg-teal-800 text-white p-2 '}>Read More...</button>
            </div>

        );
    }
}

export default Card;