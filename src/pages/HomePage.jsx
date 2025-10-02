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
    <div className={`${s.bg} hero bg-base-200 min-h-screen `}>
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">
            Master Your Goals with a To-Do List
          </h1>
          <p className="py-6">
            A to-do list is a powerful tool for organizing your tasks and staying on
            track. Follow these simple steps to turn your goals into daily progress.
          </p>

          <div className="py-4">
            <h2 className="text-2xl font-semibold">1. Write Down Your Tasks</h2>
            <p>
              Start by listing everything you want to accomplish. Getting it out of
              your head makes it easier to focus.
            </p>
          </div>

          <div className="py-4">
            <h2 className="text-2xl font-semibold">2. Set Priorities</h2>
            <p>
              Mark the most important tasks first. This ensures that you spend your
              energy on what truly matters.
            </p>
          </div>

          <div className="py-4">
            <h2 className="text-2xl font-semibold">3. Break Goals into Steps</h2>
            <p>
              Big goals can feel overwhelming. Divide them into smaller, manageable
              actions you can track.
            </p>
          </div>

          <div className="py-4">
            <h2 className="text-2xl font-semibold">4. Stay Consistent</h2>
            <p>
              Check your list daily. Even small progress adds up when you stick to
              your routine.
            </p>
          </div>

          <div className="py-4">
            <h2 className="text-2xl font-semibold">
              5. Review and Adjust
            </h2>
            <p>
              Plans may change. Update your list regularly to reflect new priorities
              and keep moving forward.
            </p>
          </div>

          <div className="py-4">
            <h2 className="text-2xl font-semibold">6. Avoid Distractions</h2>
            <p>
              Focus on finishing one task at a time. Clear away distractions to
              maintain steady progress.
            </p>
          </div>

          <div className="py-4">
            <h2 className="text-2xl font-semibold">7. Celebrate Progress</h2>
            <p>
              Each completed task is a step closer to your goal. Celebrate small
              wins to stay motivated and inspired.
            </p>
          </div>
        </div>
      </div>
    </div>

  );
};

export default Home;
