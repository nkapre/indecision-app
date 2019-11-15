console.log('App.js is running');

//JSX - JavaScript XML - A language extension
const app = {
    title: 'Indecision App',
    subTitle: 'This is some info',
    options: ['One', 'Two', 'Three']
};

const onFormSubmit = (evt) => {
    evt.preventDefault();

    const option = evt.target.elements.option.value;

    if (option) {
        app.options.push(option);
        evt.target.elements.option.value = '';
    }

    renderTemplate();
};

const onRemoveAllClick = (evt) => {
    app.options = [];

    renderTemplate();
}

const onMakeDecision = () => {
    const randomNum = Math.floor (Math.random() * app.options.length);
    const option = app.options[randomNum];
    alert (option);
}

const appRoot = document.getElementById  ('app');
const numbers = [55, 101, 1000];
const renderTemplate = () => {
    const template = (
        <div>
            <h1>{app.title}</h1>
            {app.subTitle && <p>{app.subTitle}</p>}
            <p>{(app.options && app.options.length > 0) ? 'Here are your options' : 'No options'}</p>
            <button disabled={app.options.length > 0 ? false : true} onClick={onMakeDecision}>What should I do?</button>
            <button onClick={onRemoveAllClick}>Remove All</button>
            {
                <ol>
                    {
                        app.options.map((item) => {
                            return <li key={item}>{item}</li>;
                        })
                    }
                </ol>
                
            }

            <form onSubmit={onFormSubmit}>
                <input type="text" name="option"/>
                <button type="submit">Add Option</button>
            </form>
        </div>
    );

    ReactDOM.render(template, appRoot);    
}

renderTemplate();