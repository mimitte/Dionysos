import React from 'react';

class NewBottle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    render() {
        return(
            <div className="new-bottle-container">
                <h2>Créer un nouvelle bouteille</h2>
                <form action="">
                    <ul>
                        <li>
                            <label for="name">Nom</label>
                            <input type="text" name="name" />
                        </li>
                        <li>
                            <label for="name">Année</label>
                            <input type="text" name="name" />
                        </li>
                        <li>
                            <label for="name">Cépage</label>
                            <input type="text" name="name" />
                        </li>
                        <li>
                            <label for="name">Terroir</label>
                            <input type="text" name="name" />
                        </li>
                        <li>
                            <label for="name">Exposition</label>
                            <input type="text" name="name" />
                        </li>
                        <li>
                            <label for="name">Exploitant</label>
                            <input type="text" name="name" />
                        </li>
                        <li>
                            <label for="name">Cépage</label>
                            <input type="text" name="name" />
                        </li>
                    </ul>
                </form>
            </div>
        );
    }
}
export default NewBottle;