import React from "react";
import { useState, useEffect } from "react";
import "./css/main.css";
import {
  Box,
  Button,
  Flex,
  Heading,
  Input,
  Text,
  Drawer,
  DrawerHeader,
  DrawerFooter,
  DrawerBody,
} from "@sparrowengg/twigs-react";
import DeleteSVG from "../components/images/delete.svg";
import ResetPNG from "../components/images/reset.png";
// import { PowerBIEmbed } from "powerbi-client-react";

import { query } from "./helpers/query";
import { generatePlan } from "./helpers/generatePlan";
import { createGuide } from "./helpers/createGuide";
import createPlan from "./helpers/createPlan";
import Modal from "react-modal";

const Main = () => {
  // For Todo List Tracker
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  // For Adding new guide 
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [newChat, setNewChat] = useState({
    language: '',
    content: '',
  });

  const handleAddChat = () => {
    if (newChat.language.trim() !== '' && newChat.content.trim() !== '') {
      chats.push(newChat);
      setNewChat({
        language: '',
        content: '',
      });
      closeModal();
    }
  };

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  // =============================== For Chatgpt Integration and its chat components ===============================
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [selectedChat, setSelectedChat] = useState(null);
  const [surveyText, setSurveyText] = useState("");
  const [isSubmitDisabled, setIsSubmitDisabled] = useState(true);

  useEffect(() => {
    setIsSubmitDisabled(surveyText === "");
  }, [surveyText]);

  async function handleSubmit() {
    try {
      setIsSubmitDisabled(true);

      const response = await generatePlan(query(surveyText), client);
      const questionsArray = response?.choices[0]?.message?.content.split("\n");

      const createSurveyResponse = await createGuide(surveyText, client);
      const surveyObject = JSON.parse(createSurveyResponse).body;
      const surveyId = surveyObject?.data?.id;

      const numQuestions = questionsArray.length;
      await createPlan(numQuestions, questionsArray, surveyId, client);

      document.getElementById("InputForChatGpt").value = "";
      client.interface.alertMessage("Survey Generated Successfully", {
        type: "success",
      });
      setIsSubmitDisabled(false);
    } catch (error) {
      document.getElementById("InputForChatGpt").value = "";
      setIsSubmitDisabled(false);
      client.interface.alertMessage(
        "Error while generating the survey. If your survey is malformed kindly delete it.",
        { type: "failure" }
      );
      console.error(error);
    }
  }

  const chats = [
    {
      language: "Python Programming",
      content:
        "Detailed Plan for Python Programming. Detailed Plan for Python Programming. Detailed Plan for Python Programming. Detailed Plan for Python Programming. Detailed Plan for Python Programming",
    },
    {
      language: "Java Programming",
      content: "Detailed Plan for Java Programming",
    },
    {
      language: "JavaScript Programming",
      content: "Detailed Plan for JavaScript Programming",
    },
    {
      language: "Python Programming",
      content:
        "Detailed Plan for Python Programming. Detailed Plan for Python Programming. Detailed Plan for Python Programming. Detailed Plan for Python Programming. Detailed Plan for Python Programming",
    },
    {
      language: "JavaScript Programming",
      content: "Detailed Plan for JavaScript Programming",
    },
    {
      language: "Python Programming",
      content:
        "Detailed Plan for Python Programming. Detailed Plan for Python Programming. Detailed Plan for Python Programming. Detailed Plan for Python Programming. Detailed Plan for Python Programming",
    },
    {
      language: "JavaScript Programming",
      content: "Detailed Plan for JavaScript Programming",
    },
    {
      language: "Java Programming",
      content: "Detailed Plan for Java Programming",
    },
    {
      language: "Python Programming",
      content:
        "Detailed Plan for Python Programming. Detailed Plan for Python Programming. Detailed Plan for Python Programming. Detailed Plan for Python Programming. Detailed Plan for Python Programming",
    },
    {
      language: "JavaScript Programming",
      content: "Detailed Plan for JavaScript Programming",
    },
    {
      language: "Java Programming",
      content: "Detailed Plan for Java Programming",
    },
  ];

  // =============================== States for Todo list and its related functionalities ==========================
  const handleAddTask = () => {
    if (newTask.trim() !== "") {
      setTasks((prevTasks) => [
        ...prevTasks,
        { id: prevTasks.length + 1, description: newTask, done: false },
      ]);
      setNewTask("");
    }
  };

  const handleEditTask = (id, newDescription) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, description: newDescription } : task
      )
    );
  };

  const handleRemoveTask = (id) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  };

  const handleToggleDone = (id) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, done: !task.done } : task
      )
    );
  };

  return (
    <>
      {/* ============================================ Title Content and Todo List Tracker =============================== */}
      <div className="title-content">
        <div className="title-main">
          <p className="heading">
            Learn <span> X </span> in <span> Y </span> Mins/Days
          </p>
          <p className="heading-2">
            Prompt here to get your detailed study guide
          </p>
          <div className="title-chatgpt">
            <Box css={{ mt: "$10" }}>
              <Flex
                css={{
                  alignItems: "flex-start",
                  flexDirection: "column",
                  gap: "$12",
                }}
              >
                <Input
                  css={{
                    width: "700px",
                    fontSize: "20px",
                    height: "55px",
                    boxShadow: "0 7px 38px -3px rgba(159, 159, 159, 0.4)",
                    border: "1px solid #9b9b9b",
                  }}
                  id="InputForChatGpt"
                  onChange={(e) => {
                    setSurveyText(e.target.value);
                  }}
                  placeholder="What you want to learn today...."
                  size="xl"
                />
                <button onClick={handleSubmit} disabled={isSubmitDisabled}>
                  Generate
                </button>
              </Flex>
            </Box>
          </div>
        </div>

        {/* ======================================= Todo Container ========================================= */}
        <div className="title-todo">
          <div className="todo-container">
            <div className="todo-terminal-design">
              <div className="red"></div>
              <div className="yellow"></div>
              <div className="green"></div>
            </div>
            <div className="todo-contents">
              <p className="todo-heading">Tracker</p>
              <div className="add-tasks">
                <Input
                  placeholder="Add tasks"
                  css={{
                    height: "40px",
                    fontSize: "$md",
                    border: "1px solid #9b9b9b",
                  }}
                  value={newTask}
                  onChange={(e) => setNewTask(e.target.value)}
                />
                <button className="addTask" onClick={handleAddTask}>
                  Add Task
                </button>
              </div>
              <div className="task-container">
                <table id="task-table">
                  <tbody>
                    <tr>
                      <th>S.No</th>
                      <th style={{ width: "15rem" }}>Task</th>
                      <th style={{ width: "5rem" }}>Re-write</th>
                      <th>Remove</th>
                      <th>Done</th>
                    </tr>
                    {tasks.length > 0 ? (
                      tasks.map((task) => (
                        <tr key={task.id} className={task.done ? "done" : ""}>
                          <td>{task.id}</td>
                          <td>{task.description}</td>
                          <td>
                            <img
                              src={ResetPNG}
                              alt="change"
                              style={{ width: "1rem", cursor: "pointer" }}
                              onClick={() => {
                                const newDescription = prompt(
                                  "Enter new description:",
                                  task.description
                                );
                                if (newDescription !== null) {
                                  handleEditTask(task.id, newDescription);
                                }
                              }}
                            />
                          </td>
                          <td>
                            <img
                              src={DeleteSVG}
                              alt="delete"
                              style={{ width: "1rem", cursor: "pointer" }}
                              onClick={() => handleRemoveTask(task.id)}
                            />
                          </td>
                          <td>
                            <input
                              type="checkbox"
                              checked={task.done}
                              onChange={() => handleToggleDone(task.id)}
                            />
                          </td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan="5">No tasks found</td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* =========================================== Get your Guide Content ================================================= */}
      <div className="guide-content">
        <p className="heading">
          Get your <span>P</span>repared Guide <span>Here!</span>
        </p>
        <div className="guide-result">
          {chats.map((chat, index) => (
            <div className="study-guide" key={index}>
              <Drawer
                isOpen={selectedChat === index && isDrawerOpen}
                onClose={() => setIsDrawerOpen(false)}
              >
                <DrawerHeader>
                  <Heading size="h4">{chat.language}</Heading>
                </DrawerHeader>
                <DrawerBody>{chat.content}</DrawerBody>
              </Drawer>
              <Button
                onClick={() => {
                  setSelectedChat(index);
                  setIsDrawerOpen(true);
                }}
                css={{
                  width: "12vw",
                  height: "2.5rem",
                }}
              >
                {chat.language}
              </Button>
            </div>
          ))}
          <div className="guide-add" onClick={openModal}>+</div>
          {/* ======================================= Adding Modal for Guide Add ================================ */}
          <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            contentLabel="Add New Chat Modal"
            className="custom-modal"
          >
            <h2>Add New Chat</h2>
            <label className="label-1">
              Language
              <input
                type="text"
                placeholder="Choose your Programming Language"
                value={newChat.language}
                onChange={(e) =>
                  setNewChat({ ...newChat, language: e.target.value })
                }
              />
            </label>
            <label className="label-2">
              Content
              <textarea
                placeholder="Type your plan here"
                value={newChat.content}
                onChange={(e) =>
                  setNewChat({ ...newChat, content: e.target.value })
                }
              />
            </label>
            <div className="buttons"> 
            <button onClick={handleAddChat} className="modal-button-addChat">Add Chat</button>
            <button onClick={closeModal} className="modal-button-cancel">Cancel</button>
            </div>
          </Modal>
        </div>
      </div>

      {/* =========================================== Connect your Leetcode Account ================================================= */}

      <div className="leetcode-content">
        <p className="heading">
          Personalized Dashboard<span>!</span>
        </p>
        <p className="heading-2">
          Connect to your <span>Leet</span>Code account and get personalized
          dashboard experience
        </p>
        <Input
          css={{
            width: "700px",
            fontSize: "20px",
            height: "55px",
            boxShadow: "0 7px 38px -3px rgba(159, 159, 159, 0.4)",
            border: "1px solid #9b9b9b",
          }}
          placeholder="Enter your leetcode username"
          size="xl"
        />
        <div className="leetcode-dashboard"></div>
      </div>
    </>
  );
};

export default Main;
