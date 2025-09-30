import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../redux/auth/selectors";
import s from "../pages/Home.module.css"

const Home = () => {
  const navigate = useNavigate();
  const isLogged = useSelector(selectIsLoggedIn);

  return !isLogged ? (
    <div className={`${s.bg} hero bg-base-200 min-h-screen `}>
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">
            Welcome to the To-Do List Creator!
          </h1>
          <p className="py-6">
            This platform is designed to help you organize, plan, and track your tasks efficiently. Whether you want to manage daily chores, work projects, or personal goals, this space allows you to create, prioritize, and complete your to-do items with ease. Stay productive, stay focused, and make every day more organized as you build your personal task list!
          </p>
          <button
            className="btn btn-primary"
            onClick={() => navigate("/dreamList")}
          >
            Get Started
          </button>
        </div>
      </div>
    </div>
  ) : (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">
            How to Achieve Your Dreams: A Simple Guide
          </h1>
          <p className="py-6">
            Here's a simple guide to help you achieve your dreams and make
            meaningful progress every day. Take these steps, and remember that
            every small action counts.
          </p>

          <div className="py-4">
            <h2 className="text-2xl font-semibold">1. Define Your Dream</h2>
            <p>
              Take time to clarify what you truly want. Write it down in vivid
              detail, and let that vision inspire you.
            </p>
          </div>

          <div className="py-4">
            <h2 className="text-2xl font-semibold">2. Set Clear Goals</h2>
            <p>
              Break your dream into smaller, manageable goals. Set deadlines for
              each goal to stay accountable and motivated.
            </p>
          </div>

          <div className="py-4">
            <h2 className="text-2xl font-semibold">3. Make a Plan</h2>
            <p>
              List specific actions to take. Prioritize tasks and use your plan
              as a roadmap.
            </p>
          </div>

          <div className="py-4">
            <h2 className="text-2xl font-semibold">4. Stay Focused</h2>
            <p>
              Block out distractions, and keep reminders of your goal close to
              maintain focus.
            </p>
          </div>

          <div className="py-4">
            <h2 className="text-2xl font-semibold">
              5. Take Consistent Action
            </h2>
            <p>
              Progress is made one step at a time. Dedicate even a small part of
              each day to working toward your dream.
            </p>
          </div>

          <div className="py-4">
            <h2 className="text-2xl font-semibold">
              6. Adapt and Overcome Obstacles
            </h2>
            <p>
              Challenges will come. Be flexible and learn from setbacks as you
              continue forward.
            </p>
          </div>

          <div className="py-4">
            <h2 className="text-2xl font-semibold">7. Celebrate Small Wins</h2>
            <p>
              Recognize each milestone, however small. Celebrate progress to
              stay motivated on your journey.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
