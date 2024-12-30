# PrepMe: AI-Powered Interview Preparation

PrepMe is a cutting-edge web application designed to help users prepare for interviews efficiently. With personalized AI-generated questions, mock interviews, resume analysis, and industry insights, PrepMe is your ultimate tool to ace any interview.
<img width="1440" alt="Screenshot 2024-12-30 at 12 47 35" src="https://github.com/user-attachments/assets/9e5daa3a-4fa7-487f-a04d-a8c39982689f" />

<img width="1440" alt="Screenshot 2024-12-30 at 12 47 58" src="https://github.com/user-attachments/assets/97b285ec-c04b-42a3-af20-01385d8ac2ec" />

<img width="1440" alt="Screenshot 2024-12-30 at 12 48 10" src="https://github.com/user-attachments/assets/cbe56b9e-220a-4449-9c81-78960cca3a8a" />


## Features

### Personalized Interview Preparation
- Role-based question generation.
- Customizable practice plans.

### Mock Interview Simulator
- Real-time Q&A with AI feedback.
- Supports technical, behavioral, and situational interviews.

### Resume & Portfolio Analysis
- Upload your resume to receive tailored feedback.
- AI-generated suggestions for improvement.

### Coding Practice
- Interactive coding challenges with instant feedback.

### Industry Insights
- AI-curated articles and tips for your specific domain.

### Peer Mock Interviews
- Connect with other users to practice interviews.
- AI-guided feedback after sessions.

## Tech Stack

### Frontend
- **React**: Modern and responsive UI.
- **TailwindCSS**: Clean and consistent styling.

### Backend
- **FastAPI**: Efficient and scalable API development.
- **PostgreSQL**: Robust database for user data and question banks.

### AI Integration
- **OpenAI GPT-4**: LLM for generating questions, feedback, and insights.
- **Custom Models**: Fine-tuned models for domain-specific needs.

### Hosting
- **Vercel**: Frontend hosting.
- **AWS**/**Azure**: Backend services and storage.

## Getting Started

### Prerequisites
- **Node.js** (v16+)
- **Python** (3.9+)
- **PostgreSQL**

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/prepme.git
   cd prepme
   ```

2. Install frontend dependencies:
   ```bash
   cd frontend
   npm install
   ```

3. Install backend dependencies:
   ```bash
   cd ../backend
   pip install -r requirements.txt
   ```

4. Set up the database:
   ```bash
   # Create a PostgreSQL database and update the `.env` file with credentials.
   python manage.py migrate
   ```

5. Start the development servers:
   - Frontend:
     ```bash
     cd frontend
     npm start
     ```
   - Backend:
     ```bash
     cd backend
     uvicorn main:app --reload
     ```

### Environment Variables
Create a `.env` file in the `backend` directory with the following:

```env
DATABASE_URL=postgresql://user:password@localhost:5432/prepme
OPENAI_API_KEY=your_openai_key
JWT_SECRET=your_secret_key
```

<!-- ## Usage
- Visit `http://localhost:3000` to access the frontend.
- API endpoints are available at `http://localhost:8000`. -->

## Contributing
We welcome contributions! To get started:

1. Fork the repo.
2. Create a new branch:
   ```bash
   git checkout -b feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add feature description"
   ```
4. Push to the branch:
   ```bash
   git push origin feature-name
   ```
5. Open a pull request.

## License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contact
For questions or feedback, reach out to us:
- Email: poorvaja.sathasivam@outlook.com
- GitHub Issues: [Create an Issue](https://github.com/yourusername/prepme/issues)

---

Happy prepping with PrepMe!

