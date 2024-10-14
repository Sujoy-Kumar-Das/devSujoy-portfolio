"use server";
const skillsService = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/skills?limit=${18}`,
    {
      next: {
        revalidate: 30,
      },
    }
  );
  const data = await res.json();

  return data?.data;
};

export default skillsService;
