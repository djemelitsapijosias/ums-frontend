import React from "react";
import DashboardCard from "../components/DashboardCard";
import TimetableCard from "../components/TimetableCard";
import ActivityLogsCard from "../components/ActivityLogsCard";
import { Link } from "react-router-dom";
import {
  FaUserGraduate,
  FaChalkboardTeacher,
  FaWallet,
  FaEnvelope,
} from "react-icons/fa";

const Dashboard = () => {
  const studentCountenrolled = 120;
  const teacherCount = 20;
  const paymentCount = 85;
  const messageunreadCount = 5;
  const percentenrolled = 75;
  const teacherCountper = 100;
  const percentmessage = 60;
  const today = new Date().toLocaleDateString();
  const timetable = [
    {
      course_name: "Mathematics",
      session_name: "Morning",
      time_shift: "08:00-10:00",
      lecturer_name: "Dr. Smith",
    },
    {
      course_name: "Physics",
      session_name: "Afternoon",
      time_shift: "12:00-14:00",
      lecturer_name: "Prof. John",
    },
  ];

  const activityLogs = [
    {
      name: "Admin",
      action: "added a new student",
      page: "Enroll Page",
      logged_at: "2025-09-25 09:00",
    },
    {
      name: "Admin",
      action: "recorded a payment",
      page: "Payment Page",
      logged_at: "2025-09-25 08:45",
    },
  ];
  return (
    <div>
      <div className="row">
        <div className="col-lg-3 col-md-4 col-sm-6">
          <DashboardCard
            icon={<FaUserGraduate />}
            title="Total Students"
            value={`${studentCountenrolled} enrolled`}
            progress={percentenrolled}
            color="#1A237E"
            link="/students"
          />
        </div>
        <div className="col-lg-3 col-md-4 col-sm-6">
          <DashboardCard
            icon={<FaChalkboardTeacher />}
            title="Total Teachers"
            value={`${teacherCount} lecturers`}
            progress={teacherCountper}
            color="green"
            link="/teachers"
          />
        </div>
        <div className="col-lg-3 col-md-4 col-sm-6">
          <DashboardCard
            icon={<FaWallet />}
            title="Payments Record"
            value={`${paymentCount} records`}
            progress={percentenrolled}
            color="orange"
            link="/payments"
          />
        </div>
        <div className="col-lg-3 col-md-4 col-sm-6">
          <DashboardCard
            icon={<FaEnvelope />}
            title="Messages"
            value={`${messageunreadCount} unread`}
            progress={percentmessage}
            color="red"
            link="/messages"
          />
        </div>
      </div>

      <div className="card mt-4">
        <div className="card-header bg-primary text-white">
          <h4>Welcome Admin!</h4>
        </div>
        <div className="card-body">
          <p>Today is {today}.</p>
          <div className="mt-3" style={{ justifyContent: "space-between" }}>
            <Link to="/enroll" className="btn btn-primary">
              <i className="fas fa-user-plus"></i> Add Student
            </Link>
            <Link to="/record-payment" className="btn btn-success">
              <i className="fas fa-coins"></i> Record Payment
            </Link>
            <Link to="/timetable" className="btn btn-info">
              <i className="fas fa-calendar-alt"></i> View Timetable
            </Link>
            <Link to="/messages" className="btn btn-dark">
              <i className="fas fa-paper-plane"></i> Send Message
            </Link>
            <Link to="/messages" className="btn btn-grey">
              <i className="fas fa-paper-plane"></i> Clear System Logs
            </Link>
          </div>
        </div>
      </div>
      {/* Timetable & Activity Logs */}
      <div className="row mt-4">
        <div className="col-md-6">
          <TimetableCard
            title="Today's Timetable"
            bgColor="#1A237E"
            items={timetable}
          />
        </div>
        <div className="col-md-6">
          <ActivityLogsCard
            title="Recent Activity Logs"
            bgColor="#6c757d"
            logs={activityLogs}
          />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
