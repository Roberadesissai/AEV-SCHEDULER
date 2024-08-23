"use client";

import React from "react";
import Link from "next/link";
import { ChartBar, Users, ClipboardList, Clock, ArrowRight, Bell, Star, PlusCircle, Activity } from "lucide-react";
import EmployerLayout from '@/layouts/EmployerLayout';

export default function Home() {
  return (
    <EmployerLayout>
      <div className="p-4 bg-gray-50 dark:bg-gray-900 min-h-screen">
        {/* Welcome Banner */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6 mb-8 flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold text-gray-800 dark:text-white">
              Welcome Back, John Doe!
            </h1>
            <p className="mt-2 text-gray-600 dark:text-gray-400">
              Here's what's happening with your projects today:
            </p>
          </div>
          <button className="flex items-center px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
            <PlusCircle className="w-5 h-5 mr-2" />
            New Project
          </button>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          {/* Total Projects */}
          <div className="flex items-center p-4 bg-white dark:bg-gray-800 rounded-lg shadow">
            <div className="p-3 mr-4 bg-blue-500 text-white rounded-full">
              <ClipboardList className="w-6 h-6" />
            </div>
            <div>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Total Projects
              </p>
              <p className="text-xl font-semibold text-gray-800 dark:text-white">
                24
              </p>
            </div>
          </div>

          {/* Tasks in Progress */}
          <div className="flex items-center p-4 bg-white dark:bg-gray-800 rounded-lg shadow">
            <div className="p-3 mr-4 bg-yellow-500 text-white rounded-full">
              <Clock className="w-6 h-6" />
            </div>
            <div>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Tasks In Progress
              </p>
              <p className="text-xl font-semibold text-gray-800 dark:text-white">
                58
              </p>
            </div>
          </div>

          {/* Completed Tasks */}
          <div className="flex items-center p-4 bg-white dark:bg-gray-800 rounded-lg shadow">
            <div className="p-3 mr-4 bg-green-500 text-white rounded-full">
              <ChartBar className="w-6 h-6" />
            </div>
            <div>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Completed Tasks
              </p>
              <p className="text-xl font-semibold text-gray-800 dark:text-white">
                125
              </p>
            </div>
          </div>

          {/* Team Members */}
          <div className="flex items-center p-4 bg-white dark:bg-gray-800 rounded-lg shadow">
            <div className="p-3 mr-4 bg-purple-500 text-white rounded-full">
              <Users className="w-6 h-6" />
            </div>
            <div>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Team Members
              </p>
              <p className="text-xl font-semibold text-gray-800 dark:text-white">
                12
              </p>
            </div>
          </div>
        </div>

        {/* Recent Activities */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6 mb-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold text-gray-800 dark:text-white">
              Recent Activities
            </h2>
            <Link
              href="/activities"
              className="text-blue-500 hover:underline flex items-center"
            >
              View All
              <ArrowRight className="w-4 h-4 ml-1" />
            </Link>
          </div>
          <ul className="divide-y divide-gray-200 dark:divide-gray-700">
            <li className="py-4">
              <div className="flex items-center">
                <div className="p-2 bg-green-500 text-white rounded-full">
                  <ClipboardList className="w-5 h-5" />
                </div>
                <div className="ml-3">
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    You completed the task{" "}
                    <span className="font-semibold text-gray-800 dark:text-white">
                      "Design Homepage"
                    </span>
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-500">
                    2 hours ago
                  </p>
                </div>
              </div>
            </li>
            <li className="py-4">
              <div className="flex items-center">
                <div className="p-2 bg-blue-500 text-white rounded-full">
                  <Users className="w-5 h-5" />
                </div>
                <div className="ml-3">
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    New team member{" "}
                    <span className="font-semibold text-gray-800 dark:text-white">
                      Sarah Smith
                    </span>{" "}
                    joined the project
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-500">
                    5 hours ago
                  </p>
                </div>
              </div>
            </li>
            <li className="py-4">
              <div className="flex items-center">
                <div className="p-2 bg-yellow-500 text-white rounded-full">
                  <Clock className="w-5 h-5" />
                </div>
                <div className="ml-3">
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Task{" "}
                    <span className="font-semibold text-gray-800 dark:text-white">
                      "Develop Login Flow"
                    </span>{" "}
                    is pending review
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-500">
                    1 day ago
                  </p>
                </div>
              </div>
            </li>
          </ul>
        </div>

        {/* Notifications */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold text-gray-800 dark:text-white">
              Notifications
            </h2>
            <Link
              href="/notifications"
              className="text-blue-500 hover:underline flex items-center"
            >
              View All
              <ArrowRight className="w-4 h-4 ml-1" />
            </Link>
          </div>
          <ul className="divide-y divide-gray-200 dark:divide-gray-700">
            <li className="py-4">
              <div className="flex items-center">
                <div className="p-2 bg-red-500 text-white rounded-full">
                  <Bell className="w-5 h-5" />
                </div>
                <div className="ml-3">
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    You have 3 new notifications
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-500">
                    Just now
                  </p>
                </div>
              </div>
            </li>
            <li className="py-4">
              <div className="flex items-center">
                <div className="p-2 bg-yellow-500 text-white rounded-full">
                  <Star className="w-5 h-5" />
                </div>
                <div className="ml-3">
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Your project{" "}
                    <span className="font-semibold text-gray-800 dark:text-white">
                      "New Website"
                    </span>{" "}
                    has been starred
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-500">
                    1 hour ago
                  </p>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </EmployerLayout>
  );
}