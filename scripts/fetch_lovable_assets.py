import json
import pathlib
import urllib.request


ROOT = pathlib.Path(__file__).resolve().parents[1]
SOURCE = "https://parma-hut-escape.lovable.app"


def main() -> None:
    downloaded = 0
    for metadata_path in sorted((ROOT / "src" / "assets").glob("*.asset.json")):
        metadata = json.loads(metadata_path.read_text(encoding="utf-8"))
        target = ROOT / "public" / metadata["url"].lstrip("/")
        target.parent.mkdir(parents=True, exist_ok=True)

        request = urllib.request.Request(
            SOURCE + metadata["url"],
            headers={
                "User-Agent": "Mozilla/5.0 (compatible; ParmaKhutorBackup/1.0)",
                "Accept": "image/avif,image/webp,image/apng,image/*,*/*;q=0.8",
                "Referer": SOURCE + "/",
            },
        )
        with urllib.request.urlopen(request, timeout=60) as response:
            data = response.read()

        expected_size = int(metadata["size"])
        if len(data) != expected_size:
            raise RuntimeError(
                f"Size mismatch for {metadata['original_filename']}: "
                f"received {len(data)}, expected {expected_size}"
            )

        target.write_bytes(data)
        downloaded += 1

    print(f"Downloaded and verified {downloaded} assets")


if __name__ == "__main__":
    main()
