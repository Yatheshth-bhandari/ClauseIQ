from sentence_transformers import SentenceTransformer
import faiss
import numpy as np

model = SentenceTransformer("all-MiniLM-L6-v2")


def chunk_text(text, chunk_size=500):
    chunks = []

    for i in range(0, len(text), chunk_size):
        chunks.append(text[i:i+chunk_size])

    return chunks


def create_embeddings(chunks):
    embeddings = model.encode(chunks)
    return np.array(embeddings, dtype="float32")


def build_index(embeddings):
    dimension = embeddings.shape[1]
    index = faiss.IndexFlatL2(dimension)
    index.add(embeddings)
    return index


def retrieve_chunks(query, chunks, index, k=5):

    query_embedding = model.encode([query]).astype("float32")

    distances, indices = index.search(query_embedding, k)

    retrieved = []

    for i in indices[0]:
        retrieved.append(chunks[i])

    return "\n\n".join(retrieved)