import React from "react";
import StudentCard from "./StudentCard";

function SearchList({ filteredPosts, groupList }) {
  const posts = filteredPosts.map((title) => (
    <StudentCard
      _id={title?.id}
      key={title.id}
      {...title.data}
      group={groupList
        .filter((x) => {
          return x.id === title.data.groupId;
        })
        .map((s) => (
          <div>
            <p>{s.data.name}</p>
          </div>
        ))}
    />
  ));
  return posts;
}

export default SearchList;
