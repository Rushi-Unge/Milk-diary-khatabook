# 🐄 Milk Diary Khatabook

A modern digital dairy management system designed to track daily milk records, calculate earnings, and send instant SMS notifications for each transaction. Built using **Next.js**, **TailwindCSS**, and integrated with SMS services, this project aims to replace traditional khatabooks (paper-based ledgers) with a smart, fast, and reliable solution for milk vendors and dairy owners.

---

## 📌 Project Overview

**Milk Diary Khatabook** is a full-stack application created to help dairy farmers or milk sellers keep accurate records of their daily milk transactions with customers. The app records how much milk a customer buys each day, calculates total cost based on price per liter, and sends a confirmation SMS to the customer instantly.

---

## 🎯 Purpose

Traditional dairies maintain handwritten ledgers (khatabooks), which are prone to errors, misplacement, or disputes. This project solves those problems by offering:

- ✅ Real-time digital entry of milk quantity
- ✅ Auto calculation of price based on rate per liter
- ✅ Historical recordkeeping and day-wise summaries
- ✅ SMS alerts for transparency
- ✅ Neat, minimal, responsive design
- ✅ Support for multiple users/customers

---

## 🔧 Tech Stack

| Frontend     | Backend     | Database   | Other Integrations |
|--------------|-------------|------------|---------------------|
| Next.js      | Node.js     | MongoDB    | SMS API (e.g., Fast2SMS or Twilio) |
| React        | Express     | Prisma (optional) | TailwindCSS       |
| TypeScript   | REST APIs   |            | GitHub Actions (CI/CD) |

---

## 📦 Features

- 📝 **Milk Record Entry** – Add how much milk is given to each customer daily.
- 💰 **Auto Billing** – Calculates the cost dynamically using price × liters.
- 📲 **SMS Notification** – Sends SMS to customers after adding a record.
- 📆 **Date-wise History** – Track how much milk each customer received and the total amount paid.
- 🔐 **Secure Data** – Data is securely stored and can be accessed only by the owner.
- 🌐 **Deployed** – Supports production deployment with domain via `CNAME`.

---

## 📸 Screenshots

> *(Add screenshots here to showcase UI - e.g., milk entry form, daily summary, SMS alert confirmation)*

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/Rushi-Unge/Milk-diary-khatabook.git
cd Milk-diary-khatabook
