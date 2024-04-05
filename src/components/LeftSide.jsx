import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const LeftSide = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("categories.json");
      const data = await res.json();
      setCategories(data);
    };
    fetchData();
  }, []);
  return (
    <div>
      <h3 className="mb-4">All Categories</h3>
      <div className="flex flex-col gap-2 item-center">
        {categories.map((category) => (
          <Link
            className="text-black no-underline rounded-sm hover:bg-[#E7E7E7] focus:bg-[#E7E7E7] p-2"
            key={category.id}
          >
            {category.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default LeftSide;
