# Fund Management Web Application

## Overview
This web application streamlines fund management operations, handling fixed-income fund products with features including CRUD operations, daily data updates, and dynamic querying capabilities.

## Features
- Fund and asset management (CRUD operations)
- Daily data integration from custody bank files
- Dynamic querying with on-the-fly calculations
- Data export capabilities
- User authentication and authorization

## Tech Stack
- Frontend: React.js with TypeScript, Material-UI
- Backend: Node.js with Express, TypeScript
- Database: PostgreSQL
- ORM: TypeORM

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- PostgreSQL (v12 or higher)
- npm or yarn

### Installation
1. Clone the repository
2. Install dependencies:
   ```bash
   npm run install:all
   ```
3. Set up environment variables (copy .env.example to .env and fill in values)
4. Start development servers:
   ```bash
   # Terminal 1 - Backend
   npm run dev:backend
   
   # Terminal 2 - Frontend
   npm run dev:frontend
   ```

## Project Structure
```
fund-management-app/
├── frontend/          # React frontend application
├── backend/           # Node.js backend server
├── package.json       # Root package.json
└── README.md         # Project documentation
```
