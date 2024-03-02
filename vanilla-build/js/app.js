const App = {
    // All of the selected HTML elements
    $: {
        menu: document.querySelector('[data-id="menu"]'),
        menuItems: document.querySelector('[data-id="menu-items"]'),
        resetBtn: document.querySelector('[data-id="reset-btn"]'),
        newRoundBtn: document.querySelector('[data-id="new-round-btn"]'),
        squares: document.querySelectorAll('[data-id="square"]')
    },

    state: {
        currentPlayer: 1
    },

    init() {
        App.registerEventListeners();
    },

    registerEventListeners () {
        App.$.menu.addEventListener("click", (event) => {
            App.$.menuItems.classList.toggle("hidden");
        });

        App.$.resetBtn.addEventListener('click', event => {
            console.log('reset the game');
        });

        App.$.newRoundBtn.addEventListener('click', event => {
            console.log('add a new round');
        });

        App.$.squares.forEach(square => {
            square.addEventListener('click', event => {
                console.log(`Square with id ${event.target.id} was clicked`);
                console.log(`Current player is ${App.state.currentPlayer}`);


                if (square.hasChildNodes()) {
                    return;
                }


                const currentPlayer = App.state.currentPlayer;
                const icon = document.createElement('i')

                if (currentPlayer === 1) {
                    icon.classList.add('fa-solid', 'fa-x', 'yellow')
                } else {
                    icon.classList.add('fa-solid', 'fa-o', 'turquoise')
                };
                
                App.state.currentPlayer = App.state.currentPlayer === 1 ? 2 : 1

                square.replaceChildren(icon);
            });
        });
    },
};

window.addEventListener("load", App.init);


// menu.addEventListener('click', event => {
//     menuItems.classList.toggle('hidden');
// });