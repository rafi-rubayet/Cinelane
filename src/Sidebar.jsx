import { useContext } from 'react';
import Trending from './assets/icons/trending.svg';
import NewRelease from './assets/icons/newRelease.svg';
import ComingSoon from './assets/icons/commingSoon.svg';
import Favourite from './assets/icons/favourite.svg';
import WatchLater from './assets/icons/watchLater.svg';
import { LanguageContext } from "./context/index";

export default function Sidebar() {
    const { t } = useContext(LanguageContext);

    return (
        <aside>
            <ul className="space-y-2">
                <li>
                    <a
                        className="flex items-center space-x-2 px-5 py-3.5 rounded-lg bg-primary text-black"
                        href="#"
                    >
                        <img
                            src={Trending}
                            width="24"
                            height="24"
                            alt=""
                        />
                        <span> { t('sidebar.trending') } </span>
                    </a>
                </li>
                <li>
                    <a
                        className="flex items-center space-x-2 px-5 py-3.5 rounded-lg hover:bg-primary hover:text-black"
                        href="#"
                    >
                        <img
                            src={NewRelease}
                            width="24"
                            height="24"
                            alt=""
                        />
                        <span> { t('sidebar.new_releases') } </span>
                    </a>
                </li>
                <li>
                    <a
                        className="flex items-center space-x-2 px-5 py-3.5 rounded-lg hover:bg-primary hover:text-black"
                        href="#"
                    >
                        <img
                            src={ComingSoon}
                            width="24"
                            height="24"
                            alt=""
                        />
                        <span> { t('sidebar.coming_soon') } </span>
                    </a>
                </li>
                <li>
                    <a
                        className="flex items-center space-x-2 px-5 py-3.5 rounded-lg hover:bg-primary hover:text-black"
                        href="#"
                    >
                        <img
                            src={Favourite}
                            width="24"
                            height="24"
                            alt=""
                        />
                        <span> { t('sidebar.favourite') } </span>
                    </a>
                </li>
                <li>
                    <a
                        className="flex items-center space-x-2 px-5 py-3.5 rounded-lg hover:bg-primary hover:text-black"
                        href="#"
                    >
                        <img
                            src={WatchLater}
                            width="24"
                            height="24"
                            alt=""
                        />
                        <span> { t('sidebar.watch_later') } </span>
                    </a>
                </li>
            </ul>
        </aside>
    );
}

