import React from "react";
import PageHeaderContent from "../../components/pageHeaderContent";
// import { BsInfoCircleFill } from "react-icons/bs";
import { SiFiles } from "react-icons/si";
import matchGame from "../../images/matchgame.png";
import emojiGame from "../../images/emojigame.png";
import nxtTrends from "../../images/nxttrends.png";
import jobbyApp from "../../images/jobbyapp.png";
import digitalTimer from "../../images/digitaltimer.png";
import iplDashBoard from "../../images/ipldashboard.png";
import moneyManager from "../../images/moneymanager.png";
import passwordManager from "../../images/passwordmanager.png";
import contactsApp from "../../images/contactsapp.png";
import stopWatch from "../../images/stopwatch.png";
import foodOrder from "../../images/foodorder.png";
import gitRepos from "../../images/gitrepos.png";
import commentsReact from "../../images/commentsreact.png";
import blogs from "../../images/blogs.png";
import novisto from "../../images/novisto.png";
import events from "../../images/events.png";
import resume from "../../images/resume.png";

import "./styles.scss";
import { useState } from "react";

const portfolioData = [
  {
    id: 2,
    name: "Resume",
    image: resume,
    link: "https://resume413.vercel.app/",
    git:"https://github.com/Mouni413/resume413",
  },
  {
    id: 2,
    name: "Match Game",
    image: matchGame,
    link: "https://match-game-413.vercel.app/",
    git:"https://github.com/Mouni413/match_game_413",
  },
  {
    id: 2,
    name: "Emoji Game",
    link: "https://emoji-game-413.vercel.app/",
    image: emojiGame,
    git:"https://github.com/Mouni413/emoji_game_413",
  },
  {
    id: 2,
    name: "Nxt Trends",
    image: nxtTrends,
    link: "https://nxt-trends-0413.vercel.app/",
    git:"https://github.com/Mouni413/nxt_trends_0413",
  },
  {
    id: 2,
    name: "Jobby App",
    image: jobbyApp,
    link: "https://jobby-413.vercel.app/",
    git:"https://github.com/Mouni413/jobby_413",
  },
  {
    id: 3,
    name: "Digital Timer",
    image: digitalTimer,
    link: "https://clock-livid-two.vercel.app/",
    git:"https://github.com/Mouni413/clock",
  },
  {
    id: 2,
    name: "Ipl Dash Board",
    image: iplDashBoard,
    link: "https://ipl-dash-board-413.vercel.app/",
    git:"https://github.com/Mouni413/ipl_dash_board_413",
  },
  {
    id: 3,
    name: "Money Manager",
    image: moneyManager,
    link: "https://moneymanager-413.vercel.app/",
    git:"https://github.com/Mouni413/moneymanager_413",
  },
  {
    id: 3,
    name: "Password Manager",
    image: passwordManager,
    link: "https://password-manager-413.vercel.app/",
    git:"https://github.com/Mouni413/password_manager_413",
  },
  {
    id: 3,
    name: "Stop Watch",
    image: stopWatch,
    link: "https://stop-watch413.vercel.app/",
    git:"https://github.com/Mouni413/stopWatch413",
  },
  {
    id: 2,
    name: "Git Repos",
    image: gitRepos,
    link: "https://git-popular-repos-413.vercel.app/",
    git:"https://github.com/Mouni413/git_popular_repos_413",
  },
  {
    id: 3,
    name: "Food Order",
    image: foodOrder,
    link: "https://food-order-green.vercel.app/",
    git:"https://github.com/Mouni413/food_order",
  },
  {
    id: 3,
    name: "Contacts App",
    image: contactsApp,
    link: "https://contacts-app-nu.vercel.app/",
    git:"https://github.com/Mouni413/contacts_app",
  },
  {
    id: 3,
    name: "Novisto page",
    image: novisto,
    link: "https://novisto413.vercel.app/",
    git:"https://github.com/Mouni413/novisto413",
  },
  {
    id: 3,
    name: "Comments App",
    image: commentsReact,
    link: "https://comments-react-hooks-413.vercel.app/",
    git:"https://github.com/Mouni413/comments_react_hooks_413",
  },
  {
    id: 2,
    name: "Blogs",
    image: blogs,
    link: "https://basic-api-2.vercel.app/",
    git:"https://github.com/Mouni413/blog_list_app_413",
  },
  {
    id: 3,
    name: "Events",
    image: events,
    link: "https://events-413.vercel.app/",
    git:"https://github.com/Mouni413/events_413",
  },
];

const filterData = [
  {
    filterId: 1,
    label: "All",
  },
  {
    filterId: 2,
    label: "Developement",
  },
  {
    filterId: 3,
    label: "Design",
  },
];

const Portfolio = () => {
  const [filteredvalue, setFilteredValue] = useState(1);
  const [hoveredValue, setHoveredValue] = useState(null);

  function handleFilter(currentId) {
    setFilteredValue(currentId);
  }

  function handleHover(index) {
    setHoveredValue(index);
  }

  console.log("====================================");
  console.log(hoveredValue);
  console.log("====================================");

  const filteredItems =
    filteredvalue === 1
      ? portfolioData
      : portfolioData.filter((item) => item.id === filteredvalue);

  console.log(filteredItems);

  return (
    <section id="portfolio" className="portfolio">
      <PageHeaderContent
        headerText="My Portfolio"
        icon={<SiFiles size={40} />}
      />
      <div className="portfolio__content">
        <ul className="portfolio__content__filter">
          {filterData.map((item) => (
            <li
              className={item.filterId === filteredvalue ? "active" : ""}
              onClick={() => handleFilter(item.filterId)}
              key={item.filterId}
            >
              {item.label}
            </li>
          ))}
        </ul>
        <div className="portfolio__content__cards">
          {filteredItems.map((item, index) => (
            <div
              className="portfolio__content__cards__item"
              key={`cardItem${item.name.trim()}`}
              onMouseEnter={() => handleHover(index)}
              onMouseLeave={() => handleHover(null)}
            >
              <div className="portfolio__content__cards__item__img-wrapper">
                <a href="#">
                  <img alt="dummy data" src={item.image} />
                </a>
              </div>
              <div className="overlay">
                {index === hoveredValue && (
                  <div>
                    <p>{item.name}</p>
                    <div>
                      <button onClick={() => window.open(item.link, "_blank")}>
                        Visit Website
                      </button>
                      <button onClick={() => window.open(item.git, "_blank")}>
                        Git Hub
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Portfolio;
