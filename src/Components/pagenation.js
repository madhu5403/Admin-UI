import Button from "@mui/material/Button"

function Pagenation({
  pagesCount,
  setCurrentPage,
  currentPage,
  setselectAllChecked,
  handleDelete,
  Users,
}) {
  const pages = []
  for (let i = 0; i < Math.ceil(pagesCount); i++) {
    pages.push(i + 1)
  }
  function handlePageClick(e) {
    setselectAllChecked(false)
    setCurrentPage(Number(e.target.innerText))
  }
  function handlePreviousClick() {
    if (currentPage > 1) {
      setCurrentPage((prevState) => prevState - 1)
      setselectAllChecked(false)
    }
  }
  function handleNextClick() {
    if (currentPage <= pagesCount) {
      setCurrentPage((prevState) => prevState + 1)
      setselectAllChecked(false)
    }
  }

  return (
    <div>
      <Button
        className={Users.length <= 0 ? "hide" : ""}
        onClick={handleDelete}
        variant="contained"
        color="error"
      >
        Delete Selected
      </Button>
      <Button
        fontSize="large"
        className={pagesCount <= 1 ? "hide" : ""}
        onClick={handlePreviousClick}
        variant="contained"
      >
        Prev
      </Button>
      {pages.map((page) => {
        return (
          <Button variant="outlined" onClick={handlePageClick} key={page}>
            {page}
          </Button>
        )
      })}
      <Button
        variant="contained"
        fontSize="large"
        className={pagesCount <= 1 ? "hide" : ""}
        onClick={handleNextClick}
      >
        Next
      </Button>
    </div>
  )
}
export default Pagenation
