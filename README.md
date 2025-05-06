# 📘 Loan Calculator App

A modern, single-page React application that calculates loan EMIs (Equated Monthly Installments), displays an amortization schedule, and converts EMI values in real time using live exchange rates.

> 🚀 **Live Demo:** [View on Vercel](https://loan-calculator-yogeshs-projects-1f0629e0.vercel.app/)

---

## 🔍 About This App

Built using **React** and **Material UI**, this app allows users to:

- Calculate loan EMIs
- View a monthly amortization schedule
- Convert EMI to other currencies using live exchange rates

---

## 🎯 Project Objectives

This project demonstrates:

- ✅ React fundamentals: state, props, hooks, and routing
- ✅ Custom reusable hooks
- ✅ Integration with third-party APIs
- ✅ Responsive design with Material UI
- ✅ Global state using Context API
- ✅ Theme toggling (light/dark)
- ✅ Graceful error handling

---

## 🧠 Features

- 💰 **Loan EMI Calculation** using standard financial formulas
- 📊 **Amortization Schedule** with detailed breakdown
- 🌍 **Real-time Currency Conversion** with ExchangeRate API
- 📈 **Paginated Exchange Rate Table** (160+ currencies)
- 🌗 **Light/Dark Theme Toggle**
- 📱 **Responsive Design** with collapsible mobile navigation
- ⚠️ **404 Not Found Page**
- ❗ **Global Error Page Handling**
- 🧩 **Custom Hooks**
- 🧠 **Global State via Context API**

---

## ⚙️ Technologies Used

| Tech             | Purpose                              |
| ---------------- | ------------------------------------ |
| React.js         | Frontend framework                   |
| React Router     | Client-side routing                  |
| Context API      | Global state management              |
| Axios            | API calls                            |
| Material UI      | Component styling and responsiveness |
| ExchangeRate API | Live currency conversion             |
| Vercel           | Deployment platform                  |

---

## 🧮 EMI Formula

```text
EMI = [P × R × (1 + R)^N] / [(1 + R)^N – 1]
```
