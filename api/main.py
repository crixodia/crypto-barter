from fastapi import FastAPI, HTTPException, APIRouter, Depends
from fastapi.responses import JSONResponse, StreamingResponse
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import sqlite3
import base64

app = FastAPI(
    title="Crypto Barter API",
    description="API for Crypto Barter",
    version="1.0.0",
)

origins = ["*"]
router = APIRouter()


class Product(BaseModel):
    id: int
    name: str
    description: str
    price: float
    image: str


@router.get("/products")
async def get_products():
    conn = sqlite3.connect("data.db")
    cursor = conn.cursor()
    cursor.execute("SELECT id, name, description, price FROM products")

    products = [
        {"id": row[0], "name": row[1], "description": row[2], "price": row[3]}
        for row in cursor.fetchall()
    ]

    conn.close()

    return products


@router.get("/product_image/{product_id}")
async def get_product_image_by_id(product_id: int):
    conn = sqlite3.connect("data.db")
    cursor = conn.cursor()

    cursor.execute("SELECT image FROM products WHERE id=?", (product_id,))
    image_data = cursor.fetchone()

    conn.close()

    if image_data:
        image_base64 = image_data[0]
        image_binary = base64.b64decode(image_base64)
        return StreamingResponse(iter([image_binary]), media_type="image/jpeg")
    else:
        raise HTTPException(status_code=404, detail="Image not found for the product")


@router.get("/product/{product_id}")
async def get_product_by_id(product_id: int):
    conn = sqlite3.connect("data.db")
    cursor = conn.cursor()

    cursor.execute(
        "SELECT id, name, description, price FROM products WHERE id=?", (product_id,)
    )
    row = cursor.fetchone()

    conn.close()

    if row:
        product = {"id": row[0], "name": row[1], "description": row[2], "price": row[3]}
        return product
    else:
        raise HTTPException(status_code=404, detail="Product not found")


# Include the router in the main app
app.include_router(router, prefix="/api/v1")
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["GET", "POST"],
    allow_headers=["*"],
)


if __name__ == "__main__":
    import uvicorn

    uvicorn.run(app, host="0.0.0.0", port=8000)
