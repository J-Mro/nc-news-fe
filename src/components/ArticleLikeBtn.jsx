import { useState } from "react";
import { patchArticleVotes } from "../utils/patchArticleData";
export function ArticleLikeBtn({ setVoteChangeState, article_id, article }) {
  const [isDisabled, setIsDisabled] = useState(false);
  async function eventHandlerLike() {
    async function clickVoteBtn() {
      try {
        if (isDisabled) {
          return;
        }
        setVoteChangeState(1);
        setIsDisabled(true);
        await patchArticleVotes(article_id, { inc_votes: 1 });
      } catch {
        setVoteChangeState(0);
      }
    }
    await clickVoteBtn();
  }
  async function eventHandlerDislike() {
    async function clickVoteBtn() {
      try {
        if (isDisabled) {
          return;
        }
        setVoteChangeState(-1);
        setIsDisabled(true);
        await patchArticleVotes(article_id, { inc_votes: -1 });
      } catch {
        setVoteChangeState(0);
      }
    }
    await clickVoteBtn();
  }
  return (
    <>
      <button onClick={eventHandlerLike} disabled={isDisabled}>
        Like
      </button>
      <button onClick={eventHandlerDislike}>Dislike</button>
    </>
  );
}
