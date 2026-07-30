from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.services.llm_service import summarize_contract, compare_contracts
from app.api.upload import router as upload_router
from app.api.compare import router as compare_router
from app.api.chat import router as chat_router
from app.api.report import router as report_router


app = FastAPI(title="ClauseIQ API")
app.include_router(report_router, prefix="/api")
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def home():
    return {"message": "Welcome to ClauseIQ"}

@app.get("/api/health")
def health():
    return {
        "status": "Backend Running",
        "project": "ClauseIQ"
    }

app.include_router(upload_router, prefix="/api")
app.include_router(compare_router, prefix="/api")
app.include_router(chat_router, prefix="/api")