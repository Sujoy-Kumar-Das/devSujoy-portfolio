"use server";
const blogService = async (limit: number = 3) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/blogs?limit=${limit}`,
      {
        next: {
          revalidate: 30,
        },
      }
    );

    if (!res.ok) {
      throw new Error(`Error fetching blogs: ${res.statusText}`);
    }

    const data = await res.json();
    return data?.data || [];
  } catch (error) {
    console.error("Failed to fetch blogs:", error);
    return [];
  }
};

export default blogService;
