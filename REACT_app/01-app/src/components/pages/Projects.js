import React from "react";
import { Card, Button } from "react-bootstrap";

const projects = [
  {
    id: 1,
    image: "./assets/multiclass-sheet-w-dice.jpg",
    title: "DM Helper",
    app_url: "https://mysterious-oasis-83726.herokuapp.com/",
    repo_url: "https://github.com/Aladd616/dm-helper",
  },
  {
    id: 2,
    image: "./assets/81IRP9L7zuL._SL1500_-1.jpg",
    title: "Note Taker",
    app_url: "https://still-stream-17322.herokuapp.com/",
    repo_url: "https://github.com/Aladd616/notes_taker_all",
  },
  {
    id: 3,
    image:
      "./assets/weather-report-prediction-forecast-news-information-concept-H93EAJ.jpg",
    title: "Weather Dashboard",
    app_url: "https://aladd616.github.io/Weather_Dashboard_ALL/",
    repo_url: "https://aladd616.github.io/Weather_Dashboard_ALL/",
  },
  {
    id: 4,
    image:
      "./assets/daily-planner-printable-template-vector-260nw-1892208166.jpg",
    title: "Work Day Planner",
    app_url: "https://aladd616.github.io/Work-Day-Scheduler-ALL/",
    repo_url: "https://aladd616.github.io/Work-Day-Scheduler-ALL/",
  },
  {
    id: 5,
    image: "./assets/download.jpg",
    title: "Password Generator",
    app_url: "https://aladd616.github.io/Password-Generator-ALL/",
    repo_url: "https://aladd616.github.io/Password-Generator-ALL/",
  },
  {
    id: 6,
    image: "./assets/Pop-quiz-ISS_2160_02106-copy.jpg",
    title: "Code Quiz",
    app_url: "https://aladd616.github.io/Code-Quiz-ALL/",
    repo_url: "https://aladd616.github.io/Code-Quiz-ALL/",
  },
];

const cardList = () => {
  return projects.map((project) => {
    return (
      <Card style={{ width: "18rem" }}>
        <Card.Img src={project.image} variant="top" />
        <Card.Body>
          <Card.Title>{project.title}</Card.Title>
          <Button href={project.app_url} variant="primary">
            APP
          </Button>
          <Button href={project.repo_url} variant="primary">
            REPO
          </Button>
        </Card.Body>
      </Card>
    );
  });
};

export default cardList;
