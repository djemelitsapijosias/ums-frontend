import React from "react";
import DashboardCard from "../components/DashboardCard";
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
          <div className="quick-links mt-3">
            <a href="/enroll" className="btn btn-primary">
              <i className="fas fa-user-plus"></i> Add Student
            </a>
            <a href="/record-payment" className="btn btn-success">
              <i className="fas fa-coins"></i> Record Payment
            </a>
            <a href="/timetable" className="btn btn-info">
              <i className="fas fa-calendar-alt"></i> View Timetable
            </a>
            <a href="/messages" className="btn btn-dark">
              <i className="fas fa-paper-plane"></i> Send Message
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
