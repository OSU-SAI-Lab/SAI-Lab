// People content lives in src/assets/json/people.json.
// Photos live in src/assets/json/images/people/ — set "photo" to the filename.
// Research projects link to people via numeric id — keep ids stable when possible.
import peopleData from "../../assets/json/people.json";

const photoModules = import.meta.glob(
  "../../assets/json/images/people/*",
  { eager: true, import: "default" }
);

function resolvePhoto(photo) {
  if (!photo || photo.startsWith("http")) return photo;
  const filename = photo.split("/").pop();
  const match = Object.entries(photoModules).find(([path]) =>
    path.endsWith(`/${filename}`)
  );
  return match ? match[1] : photo;
}

export const labMembers = peopleData.members.map((member) => ({
  ...member,
  photo: resolvePhoto(member.photo),
}));
