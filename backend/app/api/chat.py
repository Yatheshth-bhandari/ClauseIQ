from fastapi import APIRouter
from app.models.schemas import ChatRequest

from app.services.vector_store import get_document
from app.services.rag_service import retrieve_chunks
from app.services.llm_service import rag_answer

router = APIRouter()


@router.post("/chat")
def chat(request: ChatRequest):

    print("Document ID:", request.document_id)

    document = get_document(request.document_id)

    print("Document:", document)

    if document is None:
        return {
            "error": "Document not found."
        }

    context = retrieve_chunks(
        request.question,
        document["chunks"],
        document["index"]
    )

    answer = rag_answer(
        request.question,
        context
    )

    return {
        "answer": answer
    }