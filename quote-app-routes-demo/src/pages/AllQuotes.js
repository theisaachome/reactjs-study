import QuoteList from "../components/quotes/QuoteList";

export const DUMMY_QUOTES = [
  {
    id: "T6AMWsNRE5",

    text: "Any sufficiently advanced technology is equivalent to magic.",
    author: "Arthur C. Clarke",
  },
  {
    id: "69Ldsxcdm-",
    text: "Technology is nothing. What's important is that you have a faith in people, that they're basically good and smart, and if you give them tools, they'll do wonderful things with them.",
    author: "Steve Jobs",
  },
  {
    id: "lOjXfROWf1n",
    text: "Real magic in relationships means an absence of judgement of others.",
    author: "Wayne Dyer",
  },
];
const AllQuotes = () => {
  return <QuoteList quotes={DUMMY_QUOTES} />;
};

export default AllQuotes;
