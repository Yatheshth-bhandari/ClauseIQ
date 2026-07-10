from app.services.rag_service import (
    chunk_text,
    create_embeddings,
    build_index,
)

vector_db = {}


def store_document(doc_id, text):

    chunks = chunk_text(text)

    embeddings = create_embeddings(chunks)

    index = build_index(embeddings)

    vector_db[doc_id] = {
        "chunks": chunks,
        "index": index
    }


def get_document(doc_id):
    return vector_db.get(doc_id)