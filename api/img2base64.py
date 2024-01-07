import base64
import os
import sys

import sqlite3


def convert(image, id):
    conn = sqlite3.connect("data.db")
    cur = conn.cursor()

    with open(image, "rb") as f:
        base64_bytes = base64.b64encode(f.read())

    # with open(image.replace("jpg", "txt"), "w") as f:
    #     f.write(base64_bytes.decode("utf-8"))

    # Insert image from producst.image into database where id = i
    cur.execute(
        "UPDATE products SET image = ? WHERE ID = ?", (base64_bytes.decode("utf-8"), id)
    )

    conn.commit()
    conn.close()


def convert_all_images_in_folder(folder):
    for image in os.listdir(folder):
        c = int(image.split(".")[0])
        image_path = os.path.join(folder, image)
        convert(image_path, c)


if __name__ == "__main__":
    folder = sys.argv[1]
    convert_all_images_in_folder(folder)
