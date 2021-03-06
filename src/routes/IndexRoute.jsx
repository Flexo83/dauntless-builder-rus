import React from "react";

import {Link} from "react-router-dom";

export default class IndexRoute extends React.Component {
    render() {
        return <div>
            <div className="featured">
                <div className="columns">
                    <div className="column">
                        <Link to="/b/new">
                            <div className="notification is-success new-build-tile feature-tile">
                                <p className="title">Создать новый билд</p>
                                <div className="feature-tile-background">
                                    <i className="fas fa-plus"></i>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>

                <div className="columns">
                    <div className="column">
                        <Link to="/favorites">
                            <div className="tile notification is-danger feature-tile">
                                <p className="title">Мои билды</p>
                                <div className="feature-tile-background">
                                    <i className="fas fa-folder-open"></i>
                                </div>
                            </div>
                        </Link>
                    </div>

                    <div className="column">
                        <a href="https://github.com/atomicptr/dauntless-builder" target="_blank" rel="noopener noreferrer">
                            <div className="tile notification is-light feature-tile">
                                <p className="title">Исходный код (ориг.)</p>
                                <div className="feature-tile-background">
                                    <i className="fab fa-github"></i>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>

                <div className="columns">
                    <div className="column">
                        <a href="https://reddit.com/r/dauntless" target="_blank" rel="noopener noreferrer">
                            <div className="tile notification is-light feature-tile">
                                <p className="title">Reddit</p>
                                <div className="feature-tile-background">
                                    <i className="fab fa-reddit"></i>
                                </div>
                            </div>
                        </a>
                    </div>

                    <div className="column">
                        <a href="https://discord.gg/dauntless" target="_blank" rel="noopener noreferrer">
                            <div className="tile notification is-light feature-tile">
                                <p className="title">Официальный канал Dauntless в Discord</p>
                                <div className="feature-tile-background">
                                    <i className="fab fa-discord"></i>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>

            </div>
        </div>;
    }
}
