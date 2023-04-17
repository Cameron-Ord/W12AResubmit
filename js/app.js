let injector = document.querySelector(`#section_main`);





injector.insertAdjacentHTML(`beforeend`,

 `<article>
<span class="main_span">

<button class="clickme">USE API</button>

</span>
</article>`



);







function API() {


    axios.request({

        url: `https://dog.ceo/api/breeds/image/random`
    }).then(successFunction).catch(failureFunction);


};


function successFunction(response) {
    for (let counter = 0; counter < response[`data`][`message`].length; counter = counter + 1) {
        let injector = document.querySelector(`#section_main`);



        injector.insertAdjacentHTML(`beforeend`,
            `<article>
<span class="main_span">

<img src="${response[`data`][`message`]}" alt="dog">

</span>
</article>`

        );
    }

};

function failureFunction() {
    let injector = document.querySelector(`#section_main`);



    injector.insertAdjacentHTML(`beforeend`, `<h1> error </h1>`);
};


let call_api = document.querySelectorAll(`.clickme`);

for (let counter = 0; counter < call_api.length; counter = counter + 1) {


    call_api[counter].addEventListener(`click`, API);
};