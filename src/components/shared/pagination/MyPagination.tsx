"use client";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Pagination } from "@mui/material";
import PaginationItem from "@mui/material/PaginationItem";
export default function MyPagination() {
  return (
    <Pagination
      count={10 as number}
      renderItem={(item: any) => (
        <PaginationItem
          slots={{ previous: ArrowBackIcon, next: ArrowForwardIcon }}
          {...item}
        />
      )}
    />
  );
}
