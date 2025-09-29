import React, { useEffect, useState } from "react";
import DashboardCard from "../components/DashboardCard";
import TimetableCard from "../components/TimetableCard";
import ActivityLogsCard from "../components/ActivityLogsCard";
import axios from "axios";
import ButtonLink from "./ButtonLink";
import {
  FaUserGraduate,
  FaChalkboardTeacher,
  FaWallet,
  FaEnvelope,
  FaUserPlus,
  FaCoins,
  FaCalendarAlt,
  FaPaperPlane,
  FaHistory,
} from "react-icons/fa";

const Dashboard = () => {
  const percentenrolled = 75;
  const teacherCountper = 100;
  const percentmessage = 60;
  const today = new Date().toLocaleDateString();

  const [stats, setStats] = useState({
    enrolled: 0,
    lecturers: 0,
    payments: 0,
    messages: 0,
  });

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const res = await axios.get(
          "http://localhost:5000/api/dashboardcards/stats",
          {
            withCredentials: true, // if using cookies/JWT
          }
        );
        setStats(res.data);
      } catch (err) {
        console.error("Error fetching stats:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
  }, []);

  if (loading) {
    return <p className="text-center mt-5">Loading dashboard...</p>;
  }

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
            value={`${stats.enrolled} enrolled`}
            progress={percentenrolled}
            color="#7a46e2"
            link="/students"
          />
        </div>
        <div className="col-lg-3 col-md-4 col-sm-6">
          <DashboardCard
            icon={<FaChalkboardTeacher />}
            title="Total Teachers"
            value={`${stats.lecturers - 1} lecturers`}
            progress={teacherCountper}
            color="#7a46e2"
            link="/teachers"
          />
        </div>
        <div className="col-lg-3 col-md-4 col-sm-6">
          <DashboardCard
            icon={<FaWallet />}
            title="Payments Record"
            value={`${stats.payments} records`}
            progress={percentenrolled}
            color="#7a46e2"
            link="/payments"
          />
        </div>
        <div className="col-lg-3 col-md-4 col-sm-6">
          <DashboardCard
            icon={<FaEnvelope />}
            title="Messages"
            value={`${stats.messages} unread`}
            progress={percentmessage}
            color="#7a46e2"
            link="/messages"
          />
        </div>
      </div>

      <div className="card mt-1">
        <div className="card-heading">
          <div className="heading-right">
            <h4>&nbsp;  Welcome Admin!</h4>
          </div>
          <div className="heading-center"></div>
          <div className="heading-left">
            <p>Today is {today}. &nbsp;</p>
          </div>
        </div>
        <div className="card-body">
          <ButtonLink
            text={"Add Student"}
            link={"/enroll"}
            icon={<FaUserPlus />}
          />
          <ButtonLink
            text={"Record Payment"}
            link={"/record-payment"}
            icon={<FaCoins />}
          />
          <ButtonLink
            text={"View Timetable"}
            link={"/timetable"}
            icon={<FaCalendarAlt />}
          />
          <ButtonLink
            text={"Send Message"}
            link={"/messages"}
            icon={<FaPaperPlane />}
          />
          <ButtonLink
            text={"Clear System Logs"}
            link={"/system-logs"}
            icon={<FaHistory />}
          />
        </div>
      </div>
      {/* Timetable & Activity Logs */}
      <div className="row mt-1">
        <div className="col-md-6">
          <TimetableCard
            title="Today's Timetable"
            bgColor="#5322b6"
            items={timetable}
          />
        </div>
        <div className="col-md-6">
          <ActivityLogsCard
            title="Recent Activity Logs"
            bgColor="#5322b6"
            logs={activityLogs}
          />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
