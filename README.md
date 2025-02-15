# 🍽️ VIT Chennai Food Pickup Website

A web application for **food ordering** within **VIT Chennai** campus, allowing users to **pre-order** from food areas and receive a **token number** for pickup. No delivery—users pick up their orders in person.

---

## 📌 **Features**
### 👥 Customer Side
- Select a food area (**North Square, Gazebo, Gymkhana, Milky Way**).
- Browse **menus** and **add items** to cart.
- **Search bar** to find food quickly.
- **Cart & checkout system**.
- **UPI Payment Simulation** (Razorpay API or Fake Payment Page).
- **Order confirmation** with **token number & pickup time**.

### 🏪 Shop Owner Side
- View **real-time orders** (token number, timestamp).
- Track & **update order status**.

### 🔄 Real-time Updates
- **Live order updates** using **Socket.io**.
- Shop owners see **incoming orders instantly**.

---

## 🛠️ **Tech Stack**
| **Category** | **Technology** |
|-------------|----------------|
| **Frontend** | React (TypeScript), Tailwind CSS |
| **Backend** | Node.js, Express.js |
| **Database** | Json files |
| **Real-time** | Socket.io |
| **Authentication** | local storage |
| **Payment** | Razorpay API (or Fake Payment Page) |
| **Version Control** | Git & GitHub |

---

## 🚀 **Installation & Setup**
### 1️⃣ Clone the Repository
```sh
git clone <repository-url>
cd vit-food-pickup
