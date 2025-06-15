"use server";
const projectDetailsService = async (id: string) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/project/${id}`,
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

export default projectDetailsService;
